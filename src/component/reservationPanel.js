import React from 'react';
import reservationAction from '../action/reservationAction';
import moment from 'moment';
import _ from 'underscore';

class ReservationPanel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleGetReservations = this._handleGetReservations.bind(this);
        // this._handleClickReservation = this._handleClickReservation.bind(this);
    }

    componentWillMount() {
        if (!this.props.loading && !this.props.loaded) {
            setTimeout(this._handleGetReservations, 0);
        }
    }

    _handleGetReservations() {
        reservationAction.getReservations({
            restaurantId: this.props.params.restaurantId,
            startDatetime: moment().format('YYYY-MM-DD 00:00:00'),
            endDatetime: moment().format('YYYY-MM-DD 23:59:59'),
        });
    }

    _handleClickReservation(reservationId) {
        this.context.router.transitionTo('info', {
            restaurantId: this.props.params.restaurantId, 
            reservationId: reservationId,
        })
    }

    render() {
        var {reservations} = this.props;

        var list = _.map(reservations, (reservation) => {
            return (
                <div
                    onClick={this._handleClickReservation.bind(this, reservation.id)}
                    key={reservation.id}>
                    {reservation.id}
                </div>
            );
        })

        return (
            <div>
                <button onClick={this._handleGetReservations}>reload</button>
                <br/>
                list:
                {list}
            </div>
        )
    }
}

ReservationPanel.contextTypes = {
    router: React.PropTypes.func.isRequired,
};

export default ReservationPanel;
