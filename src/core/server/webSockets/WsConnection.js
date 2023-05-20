import WSMessage from "./response";
import settings from "../../state/settings";


class SubscriberManager {
    constructor(initial = {}) {
        this.subscribers = initial
    }

    getActionKey(type, action) {
        if (!type) {
            type = 'ANY'
        }
        if (!action) {
            action = 'ANY'
        }

        return `${type}:${action}`
    }

    get(type, action) {
        let key = this.getActionKey(type, action)
        let result = this.subscribers[key]
        if (!result) {
            result = []
            this.subscribers[key] = result
        }

        return result
    }

    add(type, action, subscriber) {
        let actionSubscribers = this.get(type, action)
        actionSubscribers.push(subscriber)
    }

    remove(name) {
        for (let actionSubscribers of Object.values(this.subscribers)) {
            for (let subscriber of actionSubscribers) {
                if (subscriber.name === name) {
                    actionSubscribers.splice(actionSubscribers.indexOf(subscriber), 1)
                    return
                }
            }
        }
    }

    getCallbacks(type, action) {
        let callbacks = []

        for (let subscriber of this.get(type, action)) {
            callbacks.push(subscriber.callback)
        }

        for (let subscriber of this.get('ANY', 'ANY')) {
            callbacks.push(subscriber.callback)
        }

        for (let subscriber of this.get('ANY', action)) {
            callbacks.push(subscriber.callback)
        }

        for (let subscriber of this.get(type, 'ANY')) {
            callbacks.push(subscriber.callback)
        }

        return callbacks
    }
}


class WsConnection {
    constructor(path, token) {
        this.path = path
        this.token = token
        this.subscribers = new SubscriberManager()
        this.connection = undefined
    }

    send(request) {
        return new Promise((resolve, reject) => {
            if (this.connection === undefined) {
                throw Error("You must connect to the host. Call 'connect' method")
            }

            this.connection.send(request.serialize())
            resolve()
        })
    }

    onOpen() {
        console.log("Соединение установлено.");
    }

    onClose(event) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');  // например, "убит" процесс сервера
        }
        console.log('Код: ' + event.code + ' причина: ' + event.reason);
    }

    onMessage(event) {
        let data = JSON.parse(event.data)

        let response = new WSMessage(data)
        let callbacks = this.subscribers.getCallbacks(response.type, response.action)

        if (callbacks) {
            for (let callback of callbacks) {
                callback(response)
            }
        }
    }

    onError(event) {
        console.log("Ошибка " + event.message);
    }

    subscribe(name, type, action, callback) {
        if (this.connection === undefined) {
            throw Error("You must connect to the host. Call 'connect' method")
        }

        this.subscribers.add(type, action, {
            name: name,
            callback: callback
        })
    }

    unsubscribe(name) {
        if (this.connection === undefined) {
            throw Error("You must connect to the host. Call 'connect' method")
        }

        this.subscribers.remove(name)
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.connection = new WebSocket(settings.server.baseWSUrl + this.path + `?token=${settings.auth.AuthTokenType} ${this.token}`)

            this.connection.onopen = (event) => {
                this.onOpen(event)
                resolve(event)
            }

            this.connection.onclose = (event) => {
                this.onClose(event)
            }

            this.connection.onmessage = (event) => {
                this.onMessage(event)
            }

            this.connection.onerror = (event) => {
                this.onError(event)
                reject(event)
            }
        });
    }
}


export default WsConnection
