export class CustomMap {
  constructor(
    private divId: string,
    private googleMap: google.maps.Map = new google.maps.Map(
      <Element>document.getElementById(divId),
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
