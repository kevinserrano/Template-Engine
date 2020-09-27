class Engineer {
    constructor(name, ID, github, email) {
        this.name = name;
        this.ID = ID;
        this.github = github;
        this.email = email;
    }
    getEmail() {
        return this.email
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
module.exports = Engineer;