// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numberOrString = number | string;

function useState<S extends numberOrString = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

// newState.setState(true);
// console.log(newState.getState());

newState.setState('foo');
console.log(newState.getState());

// newState.setState(123); => error
// console.log(newState.getState());

newState.setState('bla');
console.log(newState.getState());