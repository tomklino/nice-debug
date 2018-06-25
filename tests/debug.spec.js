const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

chai.use(sinonChai);

const expect = chai.expect;
chai.should();

describe('basic usage of nice_debug', () => {
  let initialEnvVar
  beforeEach(() => {
    initialEnvVar = process.env.THE_TEST_DEBUG_SYMBOL;
    sinon.spy(console, 'log');
  })
  afterEach(() => {
    process.env.THE_TEST_DEBUG_SYMBOL = initialEnvVar;
    console.log.restore();
  })

  it(`write to console when debugger level is at least as required`, () => {
    process.env.THE_TEST_DEBUG_SYMBOL = 1

    const debug = require('../nice_debug')("THE_TEST_DEBUG_SYMBOL");

    debug(1, "message one", "message two");

    expect(console.log).to.have.been
      .calledWith("DEBUG:", "THE_TEST_DEBUG_SYMBOL", "message one", "message two");
  })

  it(`does not write to log when environment variable for debug symbol is not set`, () => {
    const debug = require('../nice_debug')("THE_TEST_DEBUG_SYMBOL");

    debug(1, "message one", "message two");

    expect(console.log).not.to.have.been.called;
  })

  it(`does not write to log because level is 2 and environment variable is only 1`, () => {
    process.env.THE_TEST_DEBUG_SYMBOL = 1

    const debug = require('../nice_debug')("THE_TEST_DEBUG_SYMBOL");

    debug(2, "message one", "message two");

    expect(console.log).not.to.have.been.called;
  })
})
