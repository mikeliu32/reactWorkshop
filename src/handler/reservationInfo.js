import React from "react";
import connectToStores from 'alt/utils/connectToStores';
import _ from 'underscore';
import p from '../util/polyglot';
import Colors from '../util/colors';

import reservationAction from '../action/reservationAction';
import reservationStore from '../store/reservationStore';
import EZForm from '../component/EZForm';
import EZBottomButton from '../component/EZBottomButton';

class ReservationInfo extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {reservation: null};
    }
    static getStores() {
        return [reservationStore];
    }

    static getPropsFromStores() {
        return Object.assign(reservationStore.getState());
    }

    findReservationFromProps(props) {
        return _.find(props.reservations, (reservation) => reservation.id == props.params.reservationId) || _.find(props.reservation, (reservation) => reservation.id == props.params.reservationId);
    }

    getReservationFromStore(nextProps) {
        if (!nextProps.params.reservationId) {
            return;
        }

        if (!nextProps.loading && !nextProps.reservationLoaded) {
            // empty store
            setTimeout(() => {
                reservationAction.getReservation(nextProps.params.reservationId);
            }, 0);
        } else if (!nextProps.loading && nextProps.reservationLoaded && (!this.state.reservation || (nextProps.params.reservationId != this.state.reservation.id))) {
            // if loaded some data
            // try to get reservation from store
            var reservation = this.findReservationFromProps(nextProps);
            // if still not, fetch again
            if (!reservation) {
                setTimeout(() => {
                    reservationAction.getReservation(nextProps.params.reservationId);    
                }, 0);
            } else {
                this.setState({reservation});
            }
        }
    }

    componentWillMount() {
        this.getReservationFromStore(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.getReservationFromStore(nextProps)
    }

    render() {
        var {reservation} = this.state;
        var form = [
            {
                type: 'hero'
            },
            {
                type: 'dropdown',
                name: 'status',
                label: p.t('reservation_form_status'),
                style: 'tag'
            },
            {
                type: 'text',
                name: 'seat_number',
                label: p.t('reservation_form_table'),
                style: 'tag',
            },
            {
                type: 'hr',
                label: p.t('reservation_form_info')
            },
            {
                type: 'date',
                name: 'datetime',
                label: p.t('reservation_form_date')
            },
            {
                type: 'dropdown',
                name: 'people',
                label: p.t('reservation_form_people')
            },
            {
                type: 'time',
                name: 'datetime',
                label: p.t('reservation_form_time')
            },
            {
                type: 'hr',
                label: p.t('reservation_form_note')
            },
            {
                type: 'textarea',
                name: 'note'
            },
            {
                type: 'hr',
                label: p.t('reservation_form_request')
            },
            {
                type: 'textarea',
                name: 'content'
            },
        ]

        return (
            <div>
                {reservation ? <EZForm {...this.props} form={form} content={reservation}/> : null}
                <EZBottomButton onClick={this.props.onBack} label={p.t('back_to_reservation_list')}/>
            </div>
        )
    }
}

export default connectToStores(ReservationInfo);
