import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("hello")} />
    </div>
  );
};

export default Parent;
