const person = new Person("Тарас");
const teacher = new Teacher("Олена Коваль");
const firstStudent = new Student("Андрій Петренко");
const secondStudent = new Student("Марія Шевченко");
const javascriptCourse = new Course("JavaScript");
const webCourse = new Course("Вебпрограмування");

teacher.addCourse(javascriptCourse);
teacher.addCourse(webCourse);
javascriptCourse.addStudent(firstStudent);
javascriptCourse.addStudent(secondStudent);
webCourse.addStudent(firstStudent);

console.log("Особа:", person.getInfo());
console.log("Викладач:", teacher.getInfo());
console.log("Курси викладача:", teacher.courses.map((course) => course.name));

for (const course of teacher.courses)
{
  console.log(`Студенти курсу «${course.name}»:`, course.students.map((student) => student.name));
}

for (const student of [firstStudent, secondStudent])
{
  console.log("Студент:", student.getInfo());
  console.log(`Курси студента ${student.name}:`, student.viewCourses());
}
