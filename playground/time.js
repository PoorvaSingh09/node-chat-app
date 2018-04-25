var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var date = moment(1234);
// console.log(date.format('MMM Do, YYYY'));
//
// date.add(1, 'years').subtract(9, 'months');
//
// console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
console.log(moment().valueOf());
console.log(new Date().getTime());
