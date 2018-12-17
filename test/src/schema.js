import {Schema} from '../../src';

const CONFIG = {};

describe('Schema', () => {
  it('should pass', () => {
    const schema = new Schema(CONFIG);
    schema.generate().should.eql(CONFIG);
  });
});
