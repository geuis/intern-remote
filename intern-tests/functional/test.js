const {registerSuite} = intern.getPlugin('interface.object');

registerSuite('Test Suite', {
  tests: {
    'basic test': () => {
      console.log('##', this.remote); // undefined
      return this.remote.get('http://localhost:3000');
    }
  }
});

//const {describe, it} = intern.getPlugin('interface.bdd');
//const expect = intern.getPlugin('chai.expect');
//const assert = intern.getPlugin('chai.assert');

//describe('Basic Intern test', () => {
//  it('is a basic test', () => {
//    console.log('###', this.remote);
//    expect(true).to.equal(true);
//  });
//
//  it('is a second test', () => {
//    expect(false).to.equal(false);
//  });
//});
