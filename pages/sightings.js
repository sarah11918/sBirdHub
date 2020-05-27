import view from '../utils/view.js'

export default async function Sightings(path) {
    const sightings = await getSightings(path);
    view.innerHTML = `<div> ${sightings.map(sighting =>JSON.stringify(sighting))}</div>`;
}

async function getSightings(path) {

    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    if (path === '/notable') {
    const response = await fetch("https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/notable?detail=full", requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
    } else if (path === '/recent') {
    const response = await fetch("https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/", requestOptions);
    const data = await response.json();
    console.log(data);
    return data;  
    } else if (path === '/') {
    const response = await fetch("https://api.ebird.org/v2/product/lists/CA-PE-PR", requestOptions);
    const data = await response.json();
    console.log(data);
    return data;      
    }
    
    
    //return sightings;
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
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

//     const response = await fetch (`https://api.ebird.org/v2${path}`,{headers:{'X-eBirdApiToken': '2ifbkhv7g8ct'}});
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
