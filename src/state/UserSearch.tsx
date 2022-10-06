import { useState } from "react";

const userList = [
  { name: "John", age: 20 },
  { name: "Paul", age: 25 },
  { name: "Selena", age: 30 },
  { name: "Justin", age: 28 },
  { name: "Avicii", age: 27 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number }>();

  const onClick = () => {
    const foundUser = userList.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      User Search:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name} <br />
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
