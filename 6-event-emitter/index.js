const EventEmitter = require("events");

// emit is used to trigger an event
// on is used to add a callback function that's going to be executed when the event is triggered

class Auth extends EventEmitter {
  login(username) {
    console.log(`${username} is logging in...`);
    this.emit("login", username);
  }
  logout(username) {
    console.log(`${username} is logging out...`);
    this.emit("logout", username);
  }
}

const auth = new Auth();

auth.on("login", (user) => {
  console.log(`${user} is loged in welcome`);
});

auth.on("logout", (user) => {
  console.log(`${user} is loged out .`);
});

auth.login("asjad ali");
