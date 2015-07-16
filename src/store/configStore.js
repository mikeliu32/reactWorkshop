import alt from "../alt";
import makeHot from "alt/utils/makeHot";

class ConfigStore {
    constructor(){
        Object.assign(this, {
            accessToken: process.env.ACCESS_TOKEN || "hcE09Us8iVadYS5sNwSG9cMsC13GaU6AJU4y5yjo",
            apiHost: process.env.API_HOST || "https://api.eztable.com",
            nodeEnv: process.env.NODE_ENV || "development"
        });
    }
}

export default makeHot(alt, ConfigStore, "ConfigStore");
