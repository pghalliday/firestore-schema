import FirestoreSchema from '../../src';
import chai from 'chai';

chai.should();

describe('FirestoreSchema', () => {
  it('should pass', () => {
    const schema = new FirestoreSchema();
    schema.should.be.ok;
  });
});
