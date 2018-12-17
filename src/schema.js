import {requires, entry} from './utils';

export class Schema {
  constructor(params) {
    requires(params.require);
    this.entry = entry(params.entry);
  }

  generate() {
    const documents = {};
    this.entry(documents);
    return documents;
  }
}
