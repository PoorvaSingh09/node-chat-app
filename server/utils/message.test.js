var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Admin';
    var text = 'Welcome to chat app'
    var res = generateMessage(from, text);
    expect(res.from).toBe(from);
    expect(res.text).toBe(text);
    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 28.9;
    var longitude = 11.1;

    var res = generateLocationMessage(from, latitude, longitude);
    var url = 'https://www.google.com/maps?q=28.9,11.1';
    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  });
});
