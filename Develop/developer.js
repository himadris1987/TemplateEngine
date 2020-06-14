const Employee = require ("./employee");

class Developer extends Employee {
    constructor (name, id, email github){
        super (name, id email);
        this.github=github;
    };
    get Github(){
        return this.github;
    };

    getRole (){
        return "Developer";
    };
};
module.exports=Developer;