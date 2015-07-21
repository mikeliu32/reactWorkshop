import api from "./base";

export default {
    getReservations: ({restaurantId, startDatetime, endDatetime}) => {
        return api.get({
            path: '/v3/manager/reservations/', 
            query: {
                restaurant_id: restaurantId,
                status: 'ok,new,canceled,changed,no-show',
                start_datetime: startDatetime,
                end_datetime: endDatetime,
                name: '',
                tel: '',
                keyword: '',
                start: 0,
                n: 30,
                order: 'desc',
                sort: 'id'
            }
        });
    },
    getReservation: (reservationId) => {
        return api.get({
            path: `/v2/manager_reservation/get_info/${reservationId}`
        });
    }
};
