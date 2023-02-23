// literal object

const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    },
};

// prototype

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'Curso de Introducción a la Producción de Videojuegos',
        'Curso de Creación de Personajes',
    ],
);

// Prototypes with classes syntax
class Student2 {
    constructor({
        name,
        age,
        email,
        approvedCourses = [],
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.approvedCourses = approvedCourses;

    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const miguelito = new Student2({
    email: 'miguelito@platzi.com',
    age: 28,
    name: 'Miguel',
});