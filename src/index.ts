import { User } from './models/User'

const user = User.buildUser({
  name: 'hello',
  age: 12,
});

user.on('save', () => {
  console.log(user)
});

user.save();
