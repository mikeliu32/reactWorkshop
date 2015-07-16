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

}

export default alt.createActions(ReservationAction)
