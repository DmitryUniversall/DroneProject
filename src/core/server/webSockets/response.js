import Model from "../api/orm/models";
import {StringField} from "../../generics/server/api/orm/fields/baseTypeFields";
import Serializer from "../api/orm/serializers";
import JsonField from "../../generics/server/api/orm/fields/jsonField";


// Dataclass
class WSMessage extends Model {
    static serializer = new Serializer(WSMessage)
    static fields = {
        type: new StringField(),
        action: new StringField(),
        action_message: new StringField(),
        data: new JsonField()
    }
}


export default WSMessage
