// @Component
// @Selector
// @useState('dasdas')

// Factory
// function Logger(prefix: string) {
//   return (target) => {
//     console.log(`${prefix} - ${target}`);
//   }
// }

// @Logger("awesome")
// class Foo {}

// Class decorator

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

function setAPIVersion(apiVersion: string) {
  return (constructor: Type<any>) => {
    return class extends constructor {
      version = apiVersion;
    }
  }
}

// decorator - write down api version
@setAPIVersion('2.0.0')
class API {}

console.log(new API());

// Property decorator

function minLength(length: number) {
  return (target: any, key: string) => {
    let val = target[key];

    const getter = () => val;

    const setter = (value: string) => {
      if(value.length < length) {
        console.log(`Error: the length shouldn't be smaller than ${length}.`)
      } else {
        val = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    })
  }
}

class Movie {
  // validation - smaller than 5 - error
  @minLength(5)
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

const movie = new Movie('Interstellar');
console.log(movie.title);

// Method decorator

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any) {
      console.log(`Waiting ${ms}...`);
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    }

    return descriptor;
  }
}

class Greeter {
  greeting: string;

  constructor(g: string) {
    this.greeting = g;
  }

  // wait a time and run the method (ms)
  @delay(1000)
  greet() {
    console.log(`Hello! ${this.greeting}`);
  }
}

const personA = new Greeter('person');
personA.greet();

// Parameter decorator
// Acessor decorator