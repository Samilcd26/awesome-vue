module.exports= class User {
    constructor(id,userName, password) {
      this.id = id;
      this.userName = userName;
      this.password = password;
    }
    toString() {
      return this.id + ' ' + this.userName + ' ' + this.password;
    }
    toJson() {
      return {
        id: this.id,
        userName: this.userName,
        password: this.password
      }
    }
  }