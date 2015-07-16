import alt from "../alt";
import makeHot from "alt/utils/makeHot";
import reservationAction from '../action/reservationAction'

class ReservationStore {
    constructor(){
        this.bindActions(reservationAction);

        Object.assign(this, {
            reservations: [],
            loading: false,
            loaded: false,
            err: null,
        });
    }

    onGetReservations(query) {
        this.loading = true;
        this.loaded = false;
        this.err = null;
    }

    onGetReservationsFinished (res) {
        this.loading = false;
        this.loaded = true;
        this.reservations = res.reservations;
    }

    onGetReservationsFailed (err) {
        this.loading = false;
        this.err = err;
    }
}

export default makeHot(alt, ReservationStore, "ReservationStore");
