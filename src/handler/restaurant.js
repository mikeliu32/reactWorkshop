import React from "react";
import {RouteHandler} from "react-router";
import Colors from '../util/colors';

class Restaurant extends React.Component {
    constructor(...args) {
        super(...args);
        this._handleBack = this._handleBack.bind(this);
    }

    _handleBack() {
        this.context.router.goBack() || this.context.router.transitionTo('list', this.props.params);
    }

    render(){
        return (
            <div>
                <RouteHandler onBack={this._handleBack}/>
            </div>
        );
    }
}

Restaurant.contextTypes = {
    router: React.PropTypes.func.isRequired,
};

export default Restaurant;
