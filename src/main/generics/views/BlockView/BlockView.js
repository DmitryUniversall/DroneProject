import BaseView from "../../../../core/generics/views/base/BaseView";
import {scrollTo} from "../../../utils/scroll";


class BlockView extends BaseView {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.params.blockName) {
            scrollTo(this.props.params.blockName)
        }
    }

    componentDidMount() {
        if (this.props.params.blockName) {
            scrollTo(this.props.params.blockName)
        }
    }
}


export default BlockView
