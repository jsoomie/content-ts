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

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.name}</h1>
        <h3>Catchprhase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
