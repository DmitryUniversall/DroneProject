import ErrorView from "../../../../main/layouts/mainLayout/apps/main/views/ErrorView/ErrorView";
import React from "react";


function ErrorHandlerMixin() {
    function ErrorHandlerMixinWrapper() {
        if (this.state.error !== undefined) {
            return <ErrorView message={this.state.error} />
        }
    }

    return ErrorHandlerMixinWrapper
}


export default ErrorHandlerMixin
