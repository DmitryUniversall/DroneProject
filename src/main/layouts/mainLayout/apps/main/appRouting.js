import UrlPattern from "../../../../../core/routing/urlPattern";
import IndexView from "./views/IndexView/IndexView";
import WithRouterWrapper from "../../../../../core/generics/views/wrappers/WithRouterWrapper";


const MainAppUrlPatterns = [
    new UrlPattern({
        name: "index",
        path: "",
        view: WithRouterWrapper(
            IndexView
        )
    }),
    new UrlPattern({
        name: "indexBlock",
        path: "block/:blockName/",
        view: WithRouterWrapper(
            IndexView
        )
    })
]

export default MainAppUrlPatterns
