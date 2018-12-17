import {Schema} from '../../src';

const CONFIG = {
  entry: {
    path: './test/scenarios/basic',
    export: 'default',
  },
  require: [
    '@babel/register',
  ],
};

describe('Schema', () => {
  it('should pass', () => {
    const schema = new Schema(CONFIG);
    schema.generate().should.eql({});
  });
});
