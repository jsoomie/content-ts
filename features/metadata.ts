import "reflect-metadata";

// const plane = {
//   color: "red",
// };

/**
 * @key "note"
 * @value "test"
 * @target plane
 * @targetProperty color
 */
// Reflect.defineMetadata("note", "New test of property", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");
// console.log(note);

// Reflect.defineMetadata("note", "Hello there", plane);
// Reflect.defineMetadata("height", 10, plane);

// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);

// console.log(note);
// console.log(height);

@controller
class Plane {
  private color: string = "white";
  private broken: boolean = false;

  @get("/login")
  fly(): void {
    console.log("This plane is flying");
  }

  @get("/logout")
  land(): void {
    console.log("This plane is landing");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("pathname", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("pathname", target.prototype, key);
    console.log(path, key);

    // const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    // router.get(path, middleware, target.prototype[key]) to fun function within context of express
  }
}
