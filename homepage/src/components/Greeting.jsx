import { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Nhập tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          placeholder="Nhập tuổi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <p>
        Xin chào, {name} - {age}
      </p>
    </div>
  );
}
