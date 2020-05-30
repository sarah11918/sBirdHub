import view from '../utils/view.js'
import Sighting from '../utils/Sighting.js'


export default async function Sightings(path) {
    const sightings = await getSightings(path);
if (path === ('/species_back')) {
    const speciesLineItems = sightings.map((item) => `<li>${item}</li>` );
    view.innerHTML = `<div> <ol>${speciesLineItems.join('')}</ol> </div>`;
    //const uniqueBirdList = [...new Set(sightings)];
    //let innerText = document.querySelector('#later-stuff');
    //innerText.innerHTML = `<div> ${uniqueBirdList} </div>`;
 
} else if (path === ('/species_front')) {
    const speciesLineItems = sightings.map((item) => `<li>${item}</li>` );
    view.innerHTML = `<div> <ol>${speciesLineItems.join('')}</ol> </div>`;  
} else {
    const sightingDivs = sightings.map((sighting, i) => Sighting({ ...sighting, index: i + 1 }));
    view.innerHTML = `<div>${sightingDivs.join('')}</div>`;
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
    } else if (path === '/species_front'){
    const response = await fetch("https://api.ebird.org/v2/product/spplist/L7305530", requestOptions);
    const data = await response.json();
    console.log(data);
    return data; 
    } else if (path === '/species_back'){
    const response = await fetch("https://api.ebird.org/v2/product/spplist/L8929685", requestOptions);
    const data = await response.json();
    console.log(data);
    return data; 
    }
}
}




// North Market LocId: L8929685
// Shipyard Harbour LocId: L7305530


//Recent - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent
//Notable - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable
//Recent of a species - https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/{{speciesCode}}
//Recent nearby - https://api.ebird.org/v2/data/obs/geo/recent?lat={{lat}}&lng={{lng}}
//Recent nearby of a species - https://api.ebird.org/v2/data/obs/geo/recent/{{speciesCode}}?lat={{lat}}&lng={{lng}}
//Recent nearby notable - https://api.ebird.org/v2/data/obs/geo/recent/notable?lat={{lat}}&lng={{lng}}
//Species List at a location - https://api.ebird.org/v2/product/spplist/{{locId}
