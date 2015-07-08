import fs from "fs";
import Iso from "iso";
import _ from "underscore";

_.templateSettings = {interpolate: /\{\{(.+?)\}\}/g};

export default function(){
    return function*(next){
        let iso = new Iso();
        if (this.react){
            let template = fs.readFileSync(`${__dirname}/../index.html`, {encoding: "utf8"}),
                {innerHTML, snapshot} = this.react,
                isoStuff = iso.add(innerHTML, snapshot).render();
            this.body = _.template(template)({isoStuff});
        }
        yield next;
    };
};
