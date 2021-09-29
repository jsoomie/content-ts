// creating a new type
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

//
// interface is More generic
interface Reportable {
  report(): string;
}

const oldPhone = {
  name: "iphone6",
  year: new Date(),
  broken: false,
  report(): string {
    return `Name: ${this.name}, Year: ${this.year}, Still works: ${this.broken}`;
  },
};

const drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  report(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printReport = (report: Reportable): void => {
  console.log(report.report());
};

printReport(oldPhone);
printReport(drinks);

// interfaces are more generic and reuseable types that can be set to mulitple items
