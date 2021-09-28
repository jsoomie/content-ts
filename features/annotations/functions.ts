// Will never get type inference for arguments!
const add = (a: number, b: number): number => {
  return a + b;
};

// does not return error / always add annotations for function returns!
const subtract = (a: number, b: number) => {
  // must add return
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  //  can return null;
  //  can return undefined;
};

// never will be returned
const throwError = (message: string): never => {
  throw new Error(message);
};
