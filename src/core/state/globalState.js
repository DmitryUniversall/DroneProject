import {updateObject} from "../utils/utils";
import settings from "./settings";


class GlobalState {
    constructor(initial = {}) {
        this.state = initial
        this.subscribers = {}
    }

    notify() {
        for (let callback of Object.values(this.subscribers)) {
            callback(this.state)
        }
    }

    dispatch(newState, callback) {
        if (this.state === newState) {
            return
        }

        updateObject(this.state, newState)
        if (callback) callback()
        this.notify()
    }

    subscribe(name, callback) {
        this.subscribers[name] = callback
    }

    unsubscribe(name) {
        delete this.subscribers[name]
    }
}


const globalState = new GlobalState({
    authData: {
        user: undefined,
        token: undefined,
        isAuthenticated: false
    },
    settings: settings,
    isInitialized: false,
    globalError: undefined
})


export default globalState
