// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
function StudentList(filteredStudents) {
  return (
    <ul>
      {filteredStudents.map((student, index) => {
        return (
          <div>
            <li key={index}>{student.name}</li>
            <li>{student.age}</li>
            <li>{student.grade}</li>
          </div>
        );
      })}
    </ul>
  );
}

export default StudentList;
