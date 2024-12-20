import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-name': this.onSetNameClick,
      'click:.set-age': this.onSetAgeClick.bind(this),
      'click:.save-model': this.onSaveClick.bind(this),
    }
  }

  onSaveClick(): void {
    this.model.save();
  }

  onSetAgeClick(): void {
    console.log("clicked");
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({name})
    }
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }


}
