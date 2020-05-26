import stories from '.pages/sightings.js'

const router = new Navigator(null, true, '#');

export default class RouterHandler{
    constructor (){
        this.createRoutes();
    }

    createRoutes(){
        const routes = [
            {path:'/', page: sightings}
        ];
        routes.forEach(route => {
            router.onLine(route.path, () => {
                route.page();
            }).resolve();
        })
    }
}