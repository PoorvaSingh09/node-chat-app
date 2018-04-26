const expect = require('expect');

const {Users} = require('./users');

describe('Users class', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1234',
      name: 'Andrew',
      room: 'The Office Fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for Node course', () => {
    var userList = users.getUserList('Node course');
    expect(userList.length).toBe(2);
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for React course', () => {
    var userList = users.getUserList('React course');
    expect(userList.length).toBe(1);
    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var user = users.removeUser('2');
    expect(user).toExist();
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var user = users.removeUser('4');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.getUser('2');
    expect(user).toEqual({id: '2', name: 'Jen', room: 'React course'});
  });

  it('should not find a user', () => {
    var user = users.getUser('4');
    expect(user).toNotExist();
  });
});
