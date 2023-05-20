class Serializer {
    constructor(model) {
        this.model = model
    }

    toRepresentation(instance, stringify = true) {
        let obj = {}
        for (let [fieldName, fieldInstance] of Object.entries(this.model.fields)) {
            obj[fieldName] = fieldInstance.toRepresentation(instance[fieldName])
        }

        return stringify ? JSON.stringify(obj) : obj
    }

    toModel(json) {
        let data = {}
        for (let [fieldName, fieldInstance] of Object.entries(this.model.fields)) {
            data[fieldName] = fieldInstance.toInternalValue(json[fieldName])
        }
        return new this.model(data)
    }
}


export default Serializer
