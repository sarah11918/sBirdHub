//For -Recent
var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "{{x-ebirdapitoken}}");

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
myHeaders.append("X-eBirdApiToken", "{{x-ebirdapitoken}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable?detail=full", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

//FOR ROOT - Species List in a location
var myHeaders = new Headers();
myHeaders.append("X-eBirdApiToken", "{{x-ebirdapitoken}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.ebird.org/v2/product/spplist/{{locId}}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));