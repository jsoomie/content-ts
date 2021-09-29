const carMakers = ["honda", "toyota", "bmw", "mercedes"];
const dates = [new Date(), new Date()];

const sportTrimByMake = [["type r"], ["trd"], ["m"], ["amg"]];

// Help with inference when extracting values
const vehicle = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); gives error

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

//  Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2021-10-10");
importantDates.push(new Date());
