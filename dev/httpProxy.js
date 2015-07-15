import httpProxy from "http-proxy";

let proxy = httpProxy.createProxyServer();

export default function (pathRegex, target){
    return function*(next){
        if (pathRegex.test(this.path)){
            this.respond = false;
            return proxy.web(this.req, this.res, {target});
        }
        yield next;
    };
}
