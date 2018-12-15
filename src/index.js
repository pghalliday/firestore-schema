export default class Schema {
  constructor(params) {
    this.entryPoint = params.entryPoint;
  }

  generate() {
    return this.entryPoint;
  }
}
