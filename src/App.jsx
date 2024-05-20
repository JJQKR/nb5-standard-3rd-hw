import { useState } from "react";

function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
    { name: "Elmo", age: 20, grade: "E" },
    { name: "Fiona", age: 21, grade: "F" },
    { name: "Gabe", age: 22, grade: "A" },
    { name: "Hannah", age: 23, grade: "B" },
    { name: "Irene", age: 24, grade: "C" },
    { name: "Jenny", age: 25, grade: "D" },
    { name: "Kevin", age: 26, grade: "E" },
    { name: "Linda", age: 27, grade: "F" },
  ];

  const [minAge, setMinAge] = useState(18);
  const filteredStudents = students.filter((student) => student.age >= minAge);

  return (
    <div>
      <h1>학생 목록</h1>
      다음 나이 이상의 학생목록만 출력해요 :{" "}
      <input
        value={minAge}
        type="number"
        onChange={(event) => setMinAge(event.target.value)}
      />{" "}
      살 이상
      <ul>
        {filteredStudents.map((student) => {
          return (
            <>
              <p>
                {student.name}
                {" - Age: "}
              </p>
              <p>
                {student.age}
                {", Grade: "}
              </p>
              <p>{student.grade}</p>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
