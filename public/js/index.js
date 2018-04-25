var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Very well. Thankyou!'
  });

  socket.emit("createMessage", {
    from: 'mike@example.com',
    text: 'New message from Mike'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
})

socket.on('newEmail', function (email) {
  console.log(email);
});
