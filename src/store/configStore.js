import alt from "../alt";
import makeHot from "alt/utils/makeHot";

class ConfigStore {
    constructor(){
        Object.assign(this, {
            accessToken: process.env.ACCESS_TOKEN || "test",
            apiHost: process.env.API_HOST || "https://api.eztable.com"
        });
    }
}

export default makeHot(alt, ConfigStore, "ConfigStore");
