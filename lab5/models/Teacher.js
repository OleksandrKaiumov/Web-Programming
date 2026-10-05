class Teacher extends Person
{
  constructor(name)
  {
    super(name);
    this.courses = [];
  }

  addCourse(course)
  {
    if (!this.courses.includes(course))
    {
      this.courses.push(course);
    }
  }
}
