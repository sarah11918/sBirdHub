import view from '../utils/view.js'

export default function Sightings() {
    view.innerHTML = `<div> ${path} </div>`;
    //const sightings = await getSightings(path);
    //const hasSightings = sightings.length > 0;
    //view.innerHTML = `<div>${hasSightings ? sightings.map(sighting => JSON.stringify(sighting)) : 'No sightings.'}</div>`;
}

// async function getSightings(path) {
//     const isHomeRoute = path === '/';
//     const isRecentRoute = path === '/recent';
//     const isNotableRoute = path === '/notable';
//     if (isHomeRoute) {
//         path = '/product/spplist/CA-PE-PR';
//     } else if (isRecentRoute) {
//         path = '/data/obs/CA-PE-P/recent';
//     } else if (isNotableRoute) {
//         path = 'data/obs/CA-PE-P/recent/notable'
//     }

//     const response = await fetch (`https:/https://api.ebird.org/v2${path}`,{headers:{'X-eBirdApiToken': '2ifbkhv7g8ct'}});
//     const sightings = await response.json();
//     return sightings;
// }

//Recent - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent
//Notable - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable
//Recent of a species - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/{{speciesCode}}
//Recent nearby - https://api.ebird.org/v2/data/obs/geo/recent?lat={{lat}}&lng={{lng}}
//Recent nearby of a species - https://api.ebird.org/v2/data/obs/geo/recent/{{speciesCode}}?lat={{lat}}&lng={{lng}}
//Recent nearby notable - https://api.ebird.org/v2/data/obs/geo/recent/notable?lat={{lat}}&lng={{lng}}
// Species List at a location - https://api.ebird.org/v2/product/spplist/{{locId}}
