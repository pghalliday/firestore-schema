import {Init} from '../../src/init';

const PARAMS = {};

describe('Init', () => {
  it('should pass', () => {
    const init = new Init(PARAMS);
    init.create().should.eql(PARAMS);
  });
});
