import Field from "../../../../../server/api/orm/fields";
import {formatDateH} from "../../../../../utils/date";


class StringField extends Field {
    toRepresentation(instance) {
        return instance
    }

    toInternalValue(data) {
        return data
    }
}


class IntegerField extends Field {
    toRepresentation(number) {
        return number.toString()
    }

    toInternalValue(data) {
        return parseInt(data)
    }
}


class FloatField extends Field {
    toRepresentation(float) {
        return float.toString()
    }

    toInternalValue(data) {
        return parseFloat(data)
    }
}


class BooleanField extends Field {
    toRepresentation(instance) {
        return instance
    }

    toInternalValue(data) {
        return data
    }
}


class DateField extends Field {
    toRepresentation(instance) {
        return formatDateH(instance)
    }

    toInternalValue(data) {
        return new Date(data)
    }
}


class ObjectField extends Field {
    toRepresentation(instance) {
        return JSON.stringify(instance)
    }

    toInternalValue(data) {
        return data
    }
}


export {
    StringField,
    IntegerField,
    FloatField,
    BooleanField,
    DateField,
    ObjectField
}