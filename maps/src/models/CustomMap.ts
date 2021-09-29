import { User, Company } from ".";

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

  // Add User marker
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  }

  // Add Company marker
  addCompanyMarker(company: Company): void {}
}
