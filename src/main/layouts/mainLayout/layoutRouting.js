import UrlPattern from "../../../core/routing/urlPattern";
import IndexView from "./apps/main/views/IndexView/IndexView";
import {include} from "../../../core/routing/path";
import MainAppUrlPatterns from "./apps/main/appRouting";


const mainLayoutUrlPatterns = [
    ...include("main", "", MainAppUrlPatterns),
]


export default mainLayoutUrlPatterns
