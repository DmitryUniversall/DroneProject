import Field from "../../../../../server/api/orm/fields";


class ListField extends Field {
    constructor(fieldType) {
        super();
        this.fieldType = fieldType
    }

    toRepresentation(instance) {
        return instance.map((item) => this.fieldType.toRepresentation(item))
    }

    toInternalValue(data) {
        return data.map((item) => this.fieldType.toInternalValue(item))
    }
}


export default ListField
