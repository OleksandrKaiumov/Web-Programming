class Course
{
  constructor(name)
  {
    this.name = name;
    this.students = [];
  }

  addStudent(student)
  {
    if (!this.students.includes(student))
    {
      this.students.push(student);
    }

    if (!student.courses.includes(this))
    {
      student.courses.push(this);
    }
  }
}
