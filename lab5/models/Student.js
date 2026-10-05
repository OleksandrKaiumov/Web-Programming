class Student extends Person
{
  constructor(name)
  {
    super(name);
    this.courses = [];
  }

  viewCourses()
  {
    return this.courses.map((course) => course.name);
  }
}
