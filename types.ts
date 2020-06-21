// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 20.3;

// array (type[])
let items: number[]
items = [1, 2, 3];

let values: Array<number>
values = [1, 2, 3];

// tuple ()
let title: [number, string, string];
title = [1, 'foo', 'string'];

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any (anything, don't use this)
let something: any;
something = true;
something = 'true';
something = [1];

// void (empty)
function logger(): void {
  console.log('foo');
}

// null | undefined
type bla = string | undefined;

// never
function error(): never {
  throw new Error('error');
}

// object ()
let cart: object;
cart = {
  key: 'fi'
}