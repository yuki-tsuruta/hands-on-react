import { useState } from "react";

const Lesson1_1 = () => {
  const [age, setAge] = useState<number>(0);
  const [name, setName] = useState<string>("");

  // 初回表示と状態変数が更新された時にレンダリングされる
  console.log("レンダリングされた");

  const handleAddAge = () => {
    // 最後のsetAgeが実行されるとレンダリングされる
    // 即座にageが更新されるわけではない
    // setAge(age + 1); // 0 + 1 = 1
    // setAge(age + 1); // 0 + 1 = 1
    // setAge(age + 1); // 0 + 1 = 1

    // 三回更新する方法
    // 更新用関数を使用することで処理中のstateを参照できる
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleAddAge}
        className="border p-2 rounded-md bg-red-100"
      >
        Add Age
      </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
