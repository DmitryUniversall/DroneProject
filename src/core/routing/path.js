import {layout} from "../../projectRouting";


function include(name, path, patterns) {
    return patterns.map((pattern) => {
        pattern.path = `${path}${pattern.path}`
        pattern.name = `${name}=>${pattern.name}`

        return pattern
    })
}


function pathSearch(name, params) {
    try {
        let path = `/${layout.urlPatterns.find((pattern) => pattern.name === name).path}`

        let m

        do {
            m = /:(\w+)/g.exec(path);
            if (m) {
                path = path.replace(m[0], params[m[1]])
            }
        } while (m)

        return path
    } catch (error) {
        if (error.constructor === TypeError) {
            throw new Error(`Endpoint '${name}' not found`)
        } else {
            throw error
        }
    }
}


export {
    include,
    pathSearch,
}
