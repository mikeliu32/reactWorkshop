import "isomorphic-fetch";
import qs from "qs";
import _ from "underscore";
import _debug from "debug";
import configStore from "../store/configStore";

const {
    accessToken,
    apiHost
} = configStore.getState();

let debug = _debug("smartphone:api"),
    isoFetch = global.fetch,
    api, getApi;

getApi = () => {
    if (api) {
        return api;
    }

    return api = {
        build: (path, query) => {
            query = _.extend(query || {}, {
                access_token: accessToken
            });
            var url = `${apiHost}${path}?${qs.stringify(query)}`;
            debug(url);
            return url;
        },
        get: ({path, query}) => {
            return new Promise((resolve, reject) => {
                isoFetch(api.build(path, query))
                .then((response) => {
                    if (response.status >= 400) {
                        reject(response.json());
                    } else {
                        resolve(response.json());
                    }
                });
            });
        },
        post: ({path, query, body}) => {
            return new Promise((resolve, reject) => {
                isoFetch(api.build(path, query), {
                    method: "post",
                    body: JSON.stringify(body)
                }).then((response) => {
                    if (response.status >= 400) {
                        reject(response.json());
                    } else {
                        resolve(response.json());
                    }
                });
            });
        }
    };
};

module.exports = getApi();
