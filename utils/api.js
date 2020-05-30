//For -Recent
var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.ebird.org/v2/data/obs/CA-PE-PR/recent", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//FOR - Notable:
var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/notable?detail=full", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//FOR ROOT - Species List in a location
const getMyBackBirds = function(){
    
    var myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.ebird.org/v2/product/spplist/L8929685", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }

const getMyFrontBirds = function() {
    
    var myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.ebird.org/v2/product/spplist/L7305530", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

//Async-await functions

const getFrontBirds = async function() {
    
    var myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    const response = await fetch("https://api.ebird.org/v2/product/spplist/L7305530", requestOptions);
    const data = await response.json();
    console.log(data);
    return data; 
}

const getBackBirds = async function() {
    
    var myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    const response = await fetch("https://api.ebird.org/v2/product/spplist/L8929685", requestOptions);
    const data = await response.json();
    console.log(data);
    return data; 
}

// North Market LocId: L8929685
// Shipyard Harbour LocId: L7305530