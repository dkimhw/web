
import { View } from "./View";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  onRender(): void {
    // pass in the element that we mapped via regionsMap() here along with user model
    const userShow = new UserShow(this.regions.userShow, this.model);
    userShow.render();

    const userForm = new UserForm(this.regions.userForm, this.model);
    userForm.render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show">blah</div>
        <div class="user-form">fsdf</div>
      </div>
    `
  }
}
