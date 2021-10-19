import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

export const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 1, name: "yamada" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <h1>{user.name}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1>{inputData}</h1>
    </div>
  );
};
