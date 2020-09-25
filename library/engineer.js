class Engineer {
    constructor(name, ID, github) {
        this.name = name;
        this.ID = ID;
        this.github = github;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.ID;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}
module.exports = Employee;