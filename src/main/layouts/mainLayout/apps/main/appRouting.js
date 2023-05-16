import UrlPattern from "../../../../../core/routing/urlPattern";
import IndexView from "./views/IndexView/IndexView";


const MainAppUrlPatterns = [
    new UrlPattern({
        name: "index",
        path: "",
        view: IndexView
    }),
    new UrlPattern({
        name: "reviews",
        path: "reviews/",
        view: () => <div>reviews</div>
    })
]

export default MainAppUrlPatterns
