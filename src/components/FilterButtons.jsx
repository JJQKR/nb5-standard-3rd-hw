// TODO: FilterButtons 컴포넌트를 작성하세요. 필터링 옵션을 선택하는 버튼들을 포함해야 합니다.

function FilterButtons({
  initialStudents,
  filteredStudents,
  setFilteredStudents,
}) {
  const filterByAge = (minAge) => {
    setFilteredStudents(
      filteredStudents.filter((student) => student.age >= minAge)
    );
  };
  const filterByGrade = (grade) => {
    setFilteredStudents(
      filteredStudents.filter((student) => student.grade === grade)
    );
  };
  const resetFilter = (initialStudents) => {
    setFilteredStudents(initialStudents);
  };
  //필터 초기화가 아닌 필터된 학생 초기화

  return (
    <div>
      {/* 여기에 필터링 버튼들을 완성하세요. */}
      <button type="button" onClick={() => filterByAge(minAge)}>
        18세 이상
      </button>
      <button type="button" onClick={() => filterByAge(grade)}>
        A등급
      </button>
      <button type="button" onClick={resetFilter}>
        필터 초기화
      </button>
    </div>
  );
}

export default FilterButtons;
