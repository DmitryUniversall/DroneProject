import UrlPattern from "../../../../../core/routing/urlPattern";
import IndexView from "./views/IndexView/IndexView";
import WithRouterWrapper from "../../../../../core/generics/views/wrappers/WithRouterWrapper";
import InstructionView from "./views/InstructionView/InstructionView";
import {Navigate} from "react-router-dom";
import {pathSearch} from "../../../../../core/routing/path";


const MainAppUrlPatterns = [
    new UrlPattern({
        name: "index",
        path: "",
        view: function (_) {
            return <Navigate to={pathSearch("main=>indexBlock", {blockName: "home"})} />
        }
    }),
    new UrlPattern({
        name: "indexBlock",
        path: "index/:blockName/",
        view: WithRouterWrapper(
            IndexView
        )
    }),
    new UrlPattern({
        name: "instruction",
        path: "instruction/",
        view: WithRouterWrapper(
            InstructionView
        )
    })
]

export default MainAppUrlPatterns
