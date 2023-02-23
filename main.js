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
});

const miguelito = new Student({
    name: 'Miguelito',
    username: 'chanchitofeliz',
    email: 'miguelito@miguelon.com',
    instagram: 'miguelito_chanchito',
});