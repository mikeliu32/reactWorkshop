import React from 'react';
import reservationAction from '../action/reservationAction';
import moment from 'moment';
import _ from 'underscore';
import Colors from '../util/colors';

class ReservationNavBar extends React.Component {    
    _handleTransitionTo(to, e) {
        e.preventDefault();
        this.props.onTransitionTo(to);
    }

    render() {
        var styles = {
            root: {
                width: '100%',
                height: 30,
                borderTop: `1px solid ${Colors.backgroundGray}`,
                borderBottom: `1px solid ${Colors.backgroundGray}`,
                backgroundColor: Colors.menuGray,
            },
            button: {
                color: Colors.lightBlack,
                float: 'left',
                fontSize: 14,
                padding: 0,
                width: '20%',
                marginTop: 2,
                backgroundColor: Colors.menuGray,
                borderWidth: 0,
                lineHeight: '20px',
                fontWeight: 100,
            }
        };
        return (
            <div style={styles.root}>
                    <button style={styles.button} onTouchTap={this._handleTransitionTo.bind(this, 'add')}>
                        <i className="material-icons">add</i>
                    </button>
                    <button style={_.extend(_.clone(styles.button), {
                        width: '60%',
                        marginTop: 5,
                    })} onTouchTap={this.props.onSelectDate}>
                        {moment().format('YYYY/MM/DD')}
                    </button>
                    <button style={styles.button} onTouchTap={this._handleTransitionTo.bind(this, 'quotaModify')}>
                        <i className="material-icons">local_dining</i>
                    </button>
            </div>
        )
    }
}

class ReservationPanel extends React.Component {
    constructor(...args) {
        super(...args);
        this._handleGetReservations = this._handleGetReservations.bind(this);
        this._handleSelectDate = this._handleSelectDate.bind(this);
        this._handleTransitionTo = this._handleTransitionTo.bind(this);
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
        });
    }

    _handleSelectDate(e) {
        e.preventDefault();
    }

    _handleTransitionTo(to) {
        this.context.router.transitionTo(to, this.props.params);
    }

    render() {
        var {reservations} = this.props;
        var list = _.map(reservations, (reservation) => {
            return (
                <div style={{height: 60, width: '100%', backgroundColor: '#f7f7f7'}}
                    onTouchTap={this._handleClickReservation.bind(this, reservation.id)}
                    key={reservation.id}>
                    {reservation.datetime} {reservation.id} {reservation.name}
                </div>
            );
        })

        return (
            <div>
                <ReservationNavBar onTransitionTo={this._handleTransitionTo} onSelectDate={this._handleSelectDate}/>
                <button onTouchTap={this._handleGetReservations}>reload</button>
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
