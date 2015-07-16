import React from "react";
import {RouteHandler, Link} from "react-router";

class Restaurant extends React.Component {
    render(){
        return (
            <div>
                <Link to="list" params={this.props.params}>reservations</Link>
                <br/>
                <Link to="add" params={this.props.params}>+</Link>
                <br/>
                <Link to="quotaModify" params={this.props.params}>Config</Link>
                <RouteHandler />
            </div>
        );
    }
}

export default Restaurant;
