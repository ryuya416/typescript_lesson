/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
