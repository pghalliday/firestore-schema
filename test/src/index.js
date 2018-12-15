import Schema from '../../src';
import chai from 'chai';

chai.should();

describe('Schema', () => {
  it('should pass', () => {
    const schema = new Schema({
      entryPoint: 'hello',
    });
    schema.generate().should.eql('hello');
  });
});
