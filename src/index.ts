import { User } from "./models/User";
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'hello name', age: -15 });
const root = document.getElementById('root')!;
const userForm = new UserForm(root, user);
userForm.render();


// const collection = User.buildUserCollection()
// collection.on('change', ()=> {
//   console.log(collection);
// })
// collection.fetch();
