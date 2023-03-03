class Course {
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
        if( typeof newName !== 'string' ) {
            console.error('You must enter a string value');
        } else {
            
            this._name = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
        }
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

  capitalizedName1.name
  capitalizedName2.name