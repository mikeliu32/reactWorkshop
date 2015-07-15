export function fetch ({routes, params, query}){
    let asyncRoute = routes.filter(r => r.handler.fetchData && r.handler.configStore);
    return {
        promise: Promise.all(asyncRoute.map(r => r.handler.fetchData({params, query}))),
        asyncRoute: asyncRoute
    };
}

export function config (ingredient, asyncRoute){
    ingredient.forEach((data, idx)=>{
        if (data){
            asyncRoute[idx].handler.configStore(data);
        }
    });
}
