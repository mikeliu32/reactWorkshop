import alt from "../alt";
import makeHot from "alt/utils/makeHot";
import reservationAction from '../action/reservationAction';
import _ from 'underscore';

class ReservationStore {
    constructor(){
        this.bindActions(reservationAction);

        Object.assign(this, {
            reservations: [],
            reservation: [],
            loading: false,
            loaded: false,
            reservationLoaded: false,
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

    onGetReservation(query) {
        this.loading = true;
        this.reservationLoaded = false;
        this.err = null;
    }

    onGetReservationFinished (res) {
        this.loading = false;
        this.reservationLoaded = true;
        this.reservation.push(res.data);
    }

    onGetReservationFailed (err) {
        this.loading = false;
        this.err = err;
    }
}

export default makeHot(alt, ReservationStore, "ReservationStore");
