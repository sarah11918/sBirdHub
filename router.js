import Sightings from './pages/sightings.js'


const router = new Navigo(null, true, '#');

export default class RouterHandler{
    constructor () {
        this.createRoutes()
    }

  createRoutes() {
    const routes = [
            {path: '/', page: Sightings},
            {path: '/recent', page: Sightings},
            {path: '/notable', page: Sightings}
        ];
  
        routes.forEach(({ path, page }) => {
            router.on(path, () => {
                page(path); 
            }).resolve();
        })
    }
}