import Field from "../../../../../server/api/orm/fields";

class DefaultField extends Field {
    constructor(field, default_internal_value, default_external_value) {
        super();

        this.field = field
        this.default_internal_value = default_internal_value
        this.default_external_value = default_external_value
    }

    toRepresentation(instance) {
        if (!instance) {
            if (typeof this.default_external_value === "function") {
                return this.default_external_value()
            }
            return this.default_external_value
        }
        return this.field.toRepresentation(instance)
    }

    toInternalValue(data) {
        if (!data) {
            if (typeof this.default_internal_value === "function") {
                return this.default_internal_value()
            }
            return this.default_internal_value
        }
        return this.field.toInternalValue(data)
    }
}


export default DefaultField
