class Intern {
    constructor(name, ID, email, school) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.school = school
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getEmail() {
        return this.email;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}
module.exports = Intern;