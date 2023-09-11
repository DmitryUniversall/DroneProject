import BaseView from "../../../../core/generics/views/base/BaseView";
import {scrollTo} from "../../../utils/scroll";


class BlockView extends BaseView {
    constructor(props) {
        super(props);

        this.lastBlockName = undefined;
    }

    scrollCheck() {
        if (this.props.params.blockName && this.props.params.blockName !== this.lastBlockName) {
            this.lastBlockName = this.props.params.blockName
            scrollTo(this.props.params.blockName)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollCheck()
    }

    componentDidMount() {
        this.scrollCheck()
    }
}


export default BlockView
