/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */



function initMap(): void {
  
  /* Data points defined as a mixture of WeightedLocation and LatLng objects */
var heatMapData = [
  {location: new google.maps.LatLng(37.782, -122.447), weight: 1},
  new google.maps.LatLng(37.782, -122.445),
  {location: new google.maps.LatLng(37.782, -122.443), weight: 1},
  {location: new google.maps.LatLng(37.782, -122.441), weight: 1},
  {location: new google.maps.LatLng(37.782, -122.439), weight: 1},
  new google.maps.LatLng(37.782, -122.437),
  {location: new google.maps.LatLng(37.782, -122.435), weight: 1},

  {location: new google.maps.LatLng(37.785, -122.447), weight: 1},
  {location: new google.maps.LatLng(37.785, -122.445), weight: 1},
  new google.maps.LatLng(37.785, -122.443),
  {location: new google.maps.LatLng(37.785, -122.441), weight: 1},
  new google.maps.LatLng(37.785, -122.439),
  {location: new google.maps.LatLng(37.785, -122.437), weight: 1},
  {location: new google.maps.LatLng(37.785, -122.435), weight: 1},
  {location: new google.maps.LatLng(43.085, -77.672), weight: 1},
];

  const myLatLng = { lat: 43.085, lng: -77.672 };

  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 20,
      center: myLatLng,
      mapTypeId: 'terrain',
      
    }
  );

  var markers = [
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
      clickable: true,
      animation:google.maps.Animation.DROP
    })
  ];

  google.maps.event.addListener(map, 'click', function(e) {        
    var marker = new google.maps.Marker({
      position: e["latLng"],
      title: "Hello world!"
    });       
    marker.setMap(map);
    markers.push(marker);
  });  

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatMapData,
    map: map,
    gradient: gradient,
    maxIntensity: 10,
    dissipating: false,
    radius: .001
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
