import UrlPattern from "../../../../../core/routing/urlPattern";
import IndexView from "./views/IndexView/IndexView";
import WithRouterWrapper from "../../../../../core/generics/views/wrappers/WithRouterWrapper";
import InstructionView from "./views/InstructionView/InstructionView";
import {Navigate} from "react-router-dom";
import {pathSearch} from "../../../../../core/routing/path";
import {WithThemeContextWrapper} from "../../../../../themes";


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
            WithThemeContextWrapper(
                IndexView
            )
        )
    }),
    new UrlPattern({
        name: "instruction",
        path: "instruction/",
        view: WithRouterWrapper(
            WithThemeContextWrapper(
                InstructionView
            )
        )
    })
]

export default MainAppUrlPatterns
