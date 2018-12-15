export default class FirestoreSchema {
  constructor(params) {
    this.entryPoint = params.entryPoint;
  }

  generate() {
    console.log(this.entryPoint);
  }
}
