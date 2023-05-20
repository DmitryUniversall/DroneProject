import Model from "../api/orm/models";
import Serializer from "../api/orm/serializers";
import {StringField} from "../../generics/server/api/orm/fields/baseTypeFields";
import JsonField from "../../generics/server/api/orm/fields/jsonField";
import OptionalField from "../../generics/server/api/orm/fields/optionalField";

class WSRequest extends Model {
    static serializer = new Serializer(WSRequest)
    static fields = {
        method: new StringField(),
        data: new OptionalField(
            new JsonField()
        )
    }
}


export default WSRequest
