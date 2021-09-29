//  public:     This method can be called anywhere, anytime
//  private:    This method can only be called by other methods in this class
//  protected:  This method can be called by other methods in this class or other methods in child classes

//  Parent vehicle class
//  By default all modifiers are public
class MotorVehicle {
  constructor(
    public vehicleColor: string = "white",
    public vehicleSound: string = "vroom vroom!",
    public vehicleHonk: string = "beep beep!"
  ) {}

  color: string = this.vehicleColor;

  protected drive(): void {
    console.log(`${this.vehicleSound}`);
  }

  public honk(): void {
    console.log(`${this.vehicleHonk}`);
  }
}

//  Child car vehicle class
//  cannot remove/change modifiers in child classes
//  Contructor is extended to the child from parent automatically
class MotorCar extends MotorVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("1k per mile driven");
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const bmw = new MotorCar(4, "blue");
bmw.startDrivingProcess();
bmw.honk();
console.log(bmw.color);

//  Child boat vehicle class
class Motorboat extends MotorVehicle {}

// INTERFACES + CLASSES = HOW WE GET REALLY STRONG CODE REUSE IN TS
