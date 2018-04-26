class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var usersWithSameName = this.users.filter((user) => (user.name === name && user.room == room));
    if (usersWithSameName.length > 0) {
      return ;
    }

    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room.toUpperCase() === room.toUpperCase());
    return users.map((user) => user.name);
  }
}

module.exports = {Users};

//addUser(id, name, room)

//removeUser(id)

//getUser(id)

//getUserList(room)
