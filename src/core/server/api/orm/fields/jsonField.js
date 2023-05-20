import Field from "../../../../../server/api/orm/fields";


class JsonField extends Field {
    toRepresentation(instance) {
        return JSON.stringify(instance)
    }

    toInternalValue(data) {
        return JSON.parse(data)
    }
}


export default JsonField
