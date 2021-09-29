import faker from "faker";

export class User {
  constructor(
    public name: string = faker.name.firstName(),
    public location: { lat: number; lng: number } = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  ) {}
}
