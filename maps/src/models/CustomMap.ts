export class CustomMap {
  constructor(
    private googleMap: google.maps.Map = new google.maps.Map(
      <Element>document.getElementById("map"),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    )
  ) {}
}
