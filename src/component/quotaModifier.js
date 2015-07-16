import React from "react";
import {Navigation, State} from "react-router";

class QuotaModifier extends React.Component{
    constructor(...args){
        super(...args);
    }

    render(){
        const {date} = this.context.router.getCurrentQuery(),
            {quotaId} = this.context.router.getCurrentParams();

        return (
            <div>
                {date} {quotaId}
            </div>
        );
    }
}

QuotaModifier.contextTypes = {
    router: React.PropTypes.func.isRequired,
};

export default QuotaModifier;
