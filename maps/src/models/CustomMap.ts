//  Instructions to every other class
//  on how they can be an argument to "addMarker"
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

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

  // Add marker
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
