import React from "react";


class BaseView extends React.Component {
    static mixins = []

    constructor(props) {
        super(props);

        this.state = {}
    }

    renderView() {}

    render() {
        let mixins = Object.getPrototypeOf(this).constructor.mixins

        for (let mixin of mixins) {
            let mixinResult = mixin.bind(this)()

            if (mixinResult !== undefined) {
                return mixinResult
            }
        }

        return (
            <>
                {
                    this.renderView()
                }
            </>
        )
    }
}


export default BaseView
