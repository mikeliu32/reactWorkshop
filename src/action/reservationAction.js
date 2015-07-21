import alt from '../alt'
import api from '../api/reservation'

class ReservationAction {
    // get reservation action
    getReservations(query) {
        this.dispatch(query);

        api.getReservations(query)
            .then((res) => {
                this.actions.getReservationsFinished(res);
            }, (err) => {
                this.actions.getReservationsFailed(err);
            });
    }

    getReservationsFinished (res) {
        this.dispatch(res);
    }

    getReservationsFailed (err) {
        this.dispatch(err);
    }
    //////

    // get reservation action
    getReservation(id) {
        this.dispatch(id);

        api.getReservation(id)
            .then((res) => {
                res.data.notes = res.data.restaurant_extra.notes || '';
                this.actions.getReservationFinished(res);
            }, (err) => {
                this.actions.getReservationFailed(err);
            });
    }

    getReservationFinished (res) {
        this.dispatch(res);
    }

    getReservationFailed (err) {
        this.dispatch(err);
    }
    //////
}

export default alt.createActions(ReservationAction)
