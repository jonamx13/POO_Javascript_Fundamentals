class LearningPaths {
    constructor({
        pathName,
        courses = [],
    }) {
        this.pathName = pathName;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    pathName: 'Escuela de Desarrollo web',
    
    courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso de Frontend Developer',
    ],
});

const escuelaData = new LearningPaths({
    pathName: 'Escuela de Data Science',
    
    courses: [
        'Curso Introductorio de Python',
        'Curso Básico de MySQL',
        'Curso de Análisis de Datos con Python',
    ],
});

const escuelaVgs = new LearningPaths({
    pathName: 'Escuela de Videojuegos',
    
    courses: [
        'Curso Introductorio al Desarrollo de Videojuegos',
        'Curso de Diseño de Personajes',
        'Curso de C# para Unity'
    ],
});

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const jona2 = new Student({
    name: 'Jonathan Meixueiro',
    username: 'JonaMx13',
    email: 'jonathan@meixueiro.com',
    twitter: 'jonamx13',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ],
});

const miguelito = new Student({
    name: 'Miguelito',
    username: 'chanchitofeliz',
    email: 'miguelito@miguelon.com',
    instagram: 'miguelito_chanchito',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});