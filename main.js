class Comment {

    constructor({
        content,
        studentName,
        studentRole = 'student',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0
    }

    publish() {
        console.log(this.studentName + ' (' + this.studentRole + ')');
        console.log(this.likes + ' likes');
        console.log(this.content);
    }
}




function videoPlay(id) {
    const secretURL = 'https://platziultrasecretomasquelanasa.com/' + id;
    console.log('Se está reproduciendo la url ' + secretURL);
}

function videoStop(id) {
    const secretURL = 'https://platziultrasecretomasquelanasa.com/' + id;
    console.log('Pausamos la url ' + secretURL);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    play() {
        videoPlay(this.videoID)
    }

    pause() {
        videoStop(this.videoID);
    }
}


class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'Spanish',
    }) {
        this._name = name; // convention to indicate that a method is private
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName === 'Curso Malo de Programación Básica') {
            console.error('Wey... noooooo!!!!')
        } else {
            this._name = newName;
        }
    }
    /* changeName(newName) {
        this._name = newName
    } */
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    classes: [],
    isFree: true,

});

/*
cursoProgBasica._name = "";
cursoProgBasica.changeName('New name')
*/
// Curso Gratis de Programación Básica

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS',
    courses: [],
});

const cursoPracticoHTML = new Course({
    name: 'Curso Práctico de HTML y CSS',
    classes: [],
    lang: 'English',
});

const cursoIntroDePython = new Course({
    name:'Curso Introductorio de Python',
    classes:[],
});

const cursoBasicoMySQL = new Course({
    name: 'Curso Básico de MySQL',
    classes: []
});

const cursoAnalisisDatosPython = new Course({
    name: 'Curso de Análisis de Datos con Python',
    classes: [],
});

const cursoIntroDevJuegos = new Course({
    name: 'Curso Introductorio al Desarrollo de Videojuegos',
    classes: [],
});
const cursoDisenoPersonajes = new Course({
    name: 'Curso de Diseño de Personajes',
    classes: []
})
const cursoCSharpUnity = new Course({
    name: 'Curso de C# para Unity',
    classes: [],
})
        

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
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPaths({
    pathName: 'Escuela de Data Science',
    
    courses: [
        cursoIntroDePython,
        cursoBasicoMySQL,
        cursoAnalisisDatosPython,
    ],
});

const escuelaVgs = new LearningPaths({
    pathName: 'Escuela de Videojuegos',
    
    courses: [
        cursoIntroDevJuegos,
        cursoDisenoPersonajes,
        cursoCSharpUnity,
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

    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publish();
    }
}


class FreeStudent extends Student {

    constructor(props) {
        super(props); // calls  the parent's constructor
    }


    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`We're sorry ${this.name}, you can only attend open courses with your subscription`);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.lang !== 'English') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`We're sorry ${this.name}, you can only attend 'Spanish courses' with your subscription.`);
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publishComment(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'professor'
        });
        comment.publish();
    }
}



const jona2 = new FreeStudent({
    name: 'Jonathan Meixueiro',
    username: 'JonaMx13',
    email: 'jonathan@meixueiro.com',
    twitter: 'jonamx13',
    learningPaths: [
        escuelaWeb,
        escuelaVgs
    ],
});

const miguelito = new BasicStudent({
    name: 'Miguelito',
    username: 'chanchitofeliz',
    email: 'miguelito@miguelon.com',
    instagram: 'miguelito_chanchito',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});

const freddy = new TeacherStudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'f@gep.com',
    instagram: 'freddiervega',
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});


// Challenge 

/*
*   With the given class:
?   Band Class with the properties:
    · name - string
    · genres - Array
    · members - Array

   TODO: create a class named 'Member' with the properties:
   · name - string
   · instrument - string

*   Write the logic to add a member to the class *Band*
*   into the function *addMember*.
!   This function mustn't let add more than one drummer, 
!   so it has to validate that it can only add just one member with the
?   drums //!instrument.

    TODO: Solution should have the following input and output

    ?Input:
    const data = {
    name: "The Jacks",
    genres: ["rock", "pop", "post-punk"],
    members: [],
    }
    const band = new Band(data)
    band.addMember(new Member({ name: "Erik", instrument: "Guitar" }))
    banda.addMember(new Member({ name: "Paul", instrument: "Drums" }))

    ?Output:
    {
    "name":"The Jacks",
    "genres":["rock","pop","post-punk"],
    "members":[
        {"name":"Erik","instrument":"Guitar"},
        {"name":"Paul","instrumento":"Drums"}
    ]}
*/

// Band Class
class Band {
    constructor({
      name,
      genres = [],
    }) {
      this.name = name;
      this.genres = genres;
      this.members = [];
    }
    addMember(newMember) {
        const bandHasDrummer = this.members.some(o => o.instrument == 'Drums');
        const newMemberIsDrummer = Object.values(newMember).includes('Drums');

        if(bandHasDrummer && newMemberIsDrummer) {
            console.log('We already have a drummer');
            return;
        }

      this.members.push(newMember);
  
    }
  }
  
  //Create Member Class
  class Member {
    #capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    constructor({
      name,
      instrument,
    }) {
      this.name = this.#capitalizeFirstLetter(name);
      this.instrument = this.#capitalizeFirstLetter(instrument);
    }
  }
  
  
  //? Input
  const data = {
    name: "The Jacks",
    genres: ["rock", "pop", "post-punk"],
    members: [],
  };

  const band = new Band(data)

  band.addMember(new Member({ name: "Erik", instrument: "Guitar" }));
  
  band.addMember(new Member({ name: "Paul", instrument: "Drums" }));

  //!Testing correct format for names
  band.addMember(new Member({ name: "bILl", instrument: "baSs" }));

  //!Testing to reject another drummer with upper and lower case variations
  band.addMember(new Member({ name: "Dyson", instrument: "drUmS" }));

console.table(band);
console.table(band.members);
console.table(band.members);

let randomMember = new Member({ name: "Dyson", instrument: "drUmS" });

//? capitalizeFirstLetter() method not accesible outside class Member
// randomMember.capitalizeFirstLetter();