import { address, name as fakename } from "faker";

export class User {
  constructor(
    public name: string = fakename.firstName(),
    public location: { lat: number; lng: number } = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    }
  ) {}

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
