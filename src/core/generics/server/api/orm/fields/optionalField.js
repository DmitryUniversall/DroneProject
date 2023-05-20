import Field from "../../../../../server/api/orm/fields";

class OptionalField extends Field {
    constructor(field) {
        super();
        this.field = field
    }

    toRepresentation(instance) {
        if (instance) {
            return this.field.toRepresentation(instance)
        }
    }

    toInternalValue(data) {
        if (data) {
            return this.field.toInternalValue(data)
        }
    }
}


export default OptionalField
