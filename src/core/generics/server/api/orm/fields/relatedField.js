import Field from "../../../../../server/api/orm/fields";


class RelatedField extends Field {
    constructor(foreignModel) {
        super()
        this.foreignModel = foreignModel
    }

    toInternalValue(json) {
        return this.foreignModel.fromJson(json)
    }

    toRepresentation(instance) {
        return instance.serialize()
    }
}


export default RelatedField
