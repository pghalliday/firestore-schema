import FirestoreSchema from '../../src';
import chai from 'chai';

chai.should();

describe('FirestoreSchema', () => {
  it('should pass', () => {
    const schema = new FirestoreSchema({
      entryPoint: 'hello',
    });
    schema.should.be.ok;
    schema.generate();
  });
});
