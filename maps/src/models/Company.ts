import { company, address } from "faker";

export class Company {
  constructor(
    public name: string = company.companyName(),
    public catchPhrase: string = company.catchPhrase(),
    public location: { lat: number; lng: number } = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    }
  ) {}
}
