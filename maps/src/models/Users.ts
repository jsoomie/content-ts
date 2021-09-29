import { address, name as fakename } from "faker";
import { Mappable } from "./index";

export class User implements Mappable {
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
