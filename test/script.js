let root = document.getElementById('root');
const add = (a, b) => a + b;

function pow(x, n) {
  if (n<0) { return NaN;}
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

describe("pow", function () {
  // before(() => alert('Starting Test'));
  // after(() => alert('ending test'));

  // beforeEach(() => alert("Before a test – enter a test"));
  // afterEach(() => alert("After a test – exit a test"));


  describe("raises x to power 3", () => {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
    it('for negative n the result is NaN', () => {
      return assert.isNaN(pow(2, -1));
    });
    it('for non-negative n the result is Nan', () => {
      return assert.isNaN(pow(2, 1.5));
    });

  });

  // ... more tests to follow here, both describe and it can be added
});

mocha.run();