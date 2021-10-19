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

  return (
    <div>
      <h1>{props.text}</h1>
      {count}
      {user.name}
    </div>
  );
};
