class Model {
    static fields = undefined
    static serializer = undefined
    constructor(data) {
        for (let fieldName of Object.keys(this.cls.fields)) {
            this[fieldName] = data[fieldName]
        }
    }
    get cls() {
        return Object.getPrototypeOf(this).constructor
    }

    serialize(stringify = true) {
        return this.cls.serializer.toRepresentation(this, stringify)
    }

    static fromJson(json, many = false) {
        if (many) {
            return json.map((item) => this.serializer.toModel(item))
        }
        return this.serializer.toModel(json)
    }
}

export default Model
