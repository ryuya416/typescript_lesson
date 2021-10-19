/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import Data from "./data.json";
import { TestComponent } from "./TestComponent";

type USERS = typeof Data;

const name = "hello";

let nameChange = "hello";
nameChange = "hwllo2";

let username = "hello";
let dummyNum = 2;
let bool = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };

const func1 = (x: number, y: number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 25,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};

//Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";

let memory: 256 | 512;
memory = 256;

//typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

//keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

//typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

//enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const pc1: PC = {
  id: 1,
  OSType: OS.Mac,
};
const pc2: PC = {
  id: 2,
  OSType: OS.Windows,
};

//型の互換性
const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
// let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

//Generics ジェネリクス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello" };
// const gen1: GEN = { item: "hello" };
const gen2: GEN<number> = { item: 12 };

interface GEN1<T = string> {
  item: T;
}
const gen1: GEN1 = { item: "hello" };

interface GEN2<T extends string | number> {
  item: T;
}
const gen4: GEN2<number> = { item: 11 };

function funcGEN<T>(props: T) {
  return { item: props };
}
const gen6 = funcGEN<string>("test");
const gen7 = funcGEN<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(123)

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}

const gen10 = funcGen3({ price: 10 });

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
};

export default App;
