import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    // this.parent.innerHTML = "";
    const templateElement = document.createElement('template');

    // console.log('collectionview', this.collection.models)

    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      console.log('itemparent', itemParent.innerHTML);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }
}
