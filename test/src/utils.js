import _ from 'lodash';
import sinon from 'sinon';
import {resolve} from 'path';

import {entry, requires} from '../../src/utils';

const RELATIVE_PATH = './name';
const NODE_MODULES_PATH = 'name';
const EXPORT_NAME = 'export name';
const EXPORT = 'export';
const ENTRY = {
  [EXPORT_NAME]: EXPORT,
};

describe('utils', () => {
  describe('entry', () => {
    const variations = {
      'with a string': {
        'should support a relative path': {
          entry: RELATIVE_PATH,
          ret: ENTRY,
          req: resolve(RELATIVE_PATH),
        },
        'should support a node_modules path': {
          entry: NODE_MODULES_PATH,
          ret: ENTRY,
          req: NODE_MODULES_PATH,
        },
      },
      'with an object': {
        'should support a relative path': {
          entry: {path: RELATIVE_PATH},
          ret: ENTRY,
          req: resolve(RELATIVE_PATH),
        },
        'should support a node_modules path': {
          entry: {path: NODE_MODULES_PATH},
          ret: ENTRY,
          req: NODE_MODULES_PATH,
        },
      },
      'with an object and export': {
        'should support a relative path': {
          entry: {path: RELATIVE_PATH, export: EXPORT_NAME},
          ret: EXPORT,
          req: resolve(RELATIVE_PATH),
        },
        'should support a node_modules path': {
          entry: {path: NODE_MODULES_PATH, export: EXPORT_NAME},
          ret: EXPORT,
          req: NODE_MODULES_PATH,
        },
      },
    };

    _.forEach(variations, (variation, name) => {
      describe(name, () => {
        _.forEach(variation, (test, name) => {
          it(name, () => {
            const req = sinon.spy(() => ENTRY);
            const ret = entry(test.entry, req);
            req.should.have.been.calledOnce;
            req.should.have.been.calledWith(test.req);
            ret.should.eql(test.ret);
          });
        });
      });
    });
  });

  describe('requires', () => {
    describe('when undefined', () => {
      it('should not require anything', () => {
        const req = sinon.spy();
        requires(undefined, req);
        req.should.not.have.been.called;
      });
    });

    describe('when a string', () => {
      it('should support a relative path', () => {
        const req = sinon.spy();
        requires(RELATIVE_PATH, req);
        req.should.have.been.calledOnce;
        req.should.have.been.calledWith(resolve(RELATIVE_PATH));
      });

      it('should support a node_modules path', () => {
        const req = sinon.spy();
        requires(NODE_MODULES_PATH, req);
        req.should.have.been.calledOnce;
        req.should.have.been.calledWith(NODE_MODULES_PATH);
      });
    });

    describe('when an array', () => {
      it('should require all', () => {
        const req = sinon.spy();
        requires([RELATIVE_PATH, NODE_MODULES_PATH], req);
        req.should.have.been.calledTwice;
        req.should.have.been.calledWith(resolve(RELATIVE_PATH));
        req.should.have.been.calledWith(NODE_MODULES_PATH);
      });
    });
  });
});
