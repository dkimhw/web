import { User } from "./models/User";


const user = new User({ name: 'asdf', age: 20 });
user.on('click', () => {
  console.log('clicked');
});

user.on('click', () => {
  console.log('another clicked');
});

user.on('change', () => {
  console.log('changed');
});

user.trigger('click');
