const Employee = require ("./employee");

class Intern extends Employee {
    constructor (name, id, email, linkedin){
        super (name, id email);
        this.linkedin=this.linkedin;
};

getSchool() {
    return this.linkedin
}

getRole() {
    return "Intern";
};
};
module.exports = Intern;