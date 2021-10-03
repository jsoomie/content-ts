// Decorator
const logError = (errorMessage: string) => {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;
    desc.value = () => {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
};

const testDecorator = (target: any, key: string) => {
  console.log(key);
};

const parameterDecorator = (target: any, key: string, index: number) => {
  console.log(key, index);
};

const classDecorator = (contructor: typeof Boat) => {
  console.log(contructor);
};

// class
@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Boat was sunk!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("boring");
    }
  }
}
