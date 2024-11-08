import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { Collection } from "./models/Collection";
import { UserProps } from "./models/User";
import { UserList } from "./views/UserList";
import { UserShow } from "./views/UserShow";

const root = document.getElementById('root');

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);


users.on('change', () => {
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// const user = User.buildUser({ 'name': "blah", age: 20 });
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
// } else {
//   throw new Error('Root element not found');
// }
