class Lesson {
  constructor(students = [], teacher) {
    this.students = students;
    this.teacherName = teacher.name;
    this.teacherSubject = teacher.subject;
  }

  start() {
    console.log(`${this.teacherName}:Let's start ${this.teacherSubject}`);

    for (const student of this.students) {
      console.log(`Hello, Mr.${this.teacherName}! I'm ${student.name}.`);
    }
  }

  setTeacher(teacherName, teacherSubject) {
    this.teacherName = teacherName;
    this.teacherSubject = teacherSubject;
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
}

const students = [
  new Student("Taro 1"),
  new Student("Taro 2"),
  new Student("Taro 3"),
];

const teacher = { name: "Teacher 1", subject: "English" };
const lesson = new Lesson(students, teacher);
lesson.start();
lesson.setTeacher("Teacher 2", "Math");
lesson.start();

// Teacher 1:Let's start English
// Hello, Mr.Teacher 1! I'm Taro 1.
// Hello, Mr.Teacher 1! I'm Taro 2.
// Hello, Mr.Teacher 1! I'm Taro 3.
// Teacher 2:Let's start Math
// Hello, Mr.Teacher 2! I'm Taro 1.
// Hello, Mr.Teacher 2! I'm Taro 2.
// Hello, Mr.Teacher 2! I'm Taro 3.
```