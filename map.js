console.log("Mapping in process")

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmlhcmEiLCJhIjoiY2xkNG8ybWZlMGRrazN3bWRmZmQ5aHVjNSJ9.1ZI7OPI3i2MKBCteB9V1Ng';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/shiviara/cld4n27ti001101kayi47xyx4', // style URL
    center: [10.203477, 56.168600], // starting position [lng, lat]
    zoom: 12.7 // starting zoom
    });