import MainLayout from "./main/layouts/mainLayout/MainLayout";
import mainLayoutUrlPatterns from "./main/layouts/mainLayout/layoutRouting";
import IsInitializedWrapper from "./core/generics/views/wrappers/IsInitializedWrapper";


const ProjectRouting = {
    layouts: {
        main: {
            name: 'mainLayout',
            path: '/',
            defaultPath: '/',
            urlPatterns: mainLayoutUrlPatterns,
            component: IsInitializedWrapper(
                MainLayout
            )
        }
    }
}

const layout = ProjectRouting.layouts.main


export {
    ProjectRouting,
    layout
}
