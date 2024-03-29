import { Comment } from "./PlaygroundClasses/Comment.mjs";
import { Student } from "./PlaygroundClasses/Student.mjs";
/* class Course {

    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
        return this._name;
    }
  
    set name(newName) {
        typeof newName !== 'string'
        ? console.error('You must enter a string value')
        : this._name = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
    }
  }

  const courseName1 = "curso de prograMacIon basIca";
  const capitalizedName1 = new Course({
    name: courseName1,
  });

  const courseName2 = 2;
  const capitalizedName2 = new Course({
    name: courseName2,
  });

  capitalizedName1.name;
  capitalizedName2.name; */

class TeacherStudent extends Student {
    constructor(props, skills = []) {
      super(props);
      this.skills = skills;
    }
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: `profesor de ${skills.join(', ')}`
      });
      return comment.publicar();
    }
  }
  
const skills = ['js', 'python', 'mongodb']
const props = {
    name: 'Erik Ochoa',
    username: 'elyager'
  }

const profesor = new TeacherStudent(props, skills);
profesor.publicarComentario('Mi primer comentario :)')