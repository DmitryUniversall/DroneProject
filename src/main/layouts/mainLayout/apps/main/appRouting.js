import UrlPattern from "../../../../../core/routing/urlPattern";
import IndexView from "./views/IndexView/IndexView";


const MainAppUrlPatterns = [
    new UrlPattern({
        name: "index",
        path: "",
        view: IndexView
    })
]

export default MainAppUrlPatterns
