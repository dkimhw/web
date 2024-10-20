import { User } from "./models/User";
import { UserForm } from './views/UserForm';

const root = document.getElementById('root')!;
const userForm = new UserForm(root);
userForm.render();


// const collection = User.buildUserCollection()
// collection.on('change', ()=> {
//   console.log(collection);
// })
// collection.fetch();
