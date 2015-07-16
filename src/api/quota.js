import api from "./base";

export default {
    quotaSetting: function({mealtime, date}){
        return api.get({
            path: "/v3/manager/restaurants/753/quotas/setting",
            query: {mealtime, date}
        });
    }
};
