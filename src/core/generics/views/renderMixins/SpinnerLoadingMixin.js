import React from "react";
import CustomSpinner from "../../components/generics/CustomSpinner/CustomSpinner";


function SpinnerLoadingMixin(fields) {
    function SpinnerLoadingMixinWrapper() {
        if (fields.map((field) => this.state[field] !== undefined).some((element) => !element)) {
            return <CustomSpinner />
        }
    }

    return SpinnerLoadingMixinWrapper
}


export default SpinnerLoadingMixin
