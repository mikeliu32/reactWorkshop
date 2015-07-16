import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import reservationStore from '../store/reservationStore';
import ReservationPanel from '../component/reservationPanel';

class Reservation extends React.Component {
    static getStores() {
        return [reservationStore];
    }

    static getPropsFromStores() {
        return Object.assign(reservationStore.getState());
    }

    componentWillRecieveProps(nextProps) {
        // console.log(nextProps)
    }

    render(){
        return (
            <ReservationPanel {...this.props}/>
        )
    }
}

export default connectToStores(Reservation);
