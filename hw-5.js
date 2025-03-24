//exercise 1
function memoize(callback) {
  const cache = {};
  return function (...args) {
    const sortedArgs = [...args].sort((a, b) => {
      const strA = JSON.stringify(a);
      const strB = JSON.stringify(b);
      return strA.localeCompare(strB);
    });
    const key = JSON.stringify(sortedArgs);

    console.log("Key:", key);

    if (key in cache) {
      console.log("Get from cache");
      return cache[key];
    }

    console.log("First calculation");
    const result = callback(...args);
    cache[key] = result;
    return result;
  };
}

const sum = (...nums) => nums.reduce((acc, num) => acc + num, 0);
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, -4, 5));
console.log(memoizedSum(-4, 2, 5));

//exercise 3
function add(a) {
  const sum = (b) => add(a + b);

  sum.valueOf = () => a;
  sum.toString = () => String(a);

  return sum;
}

console.log(add(1)(2)(3));
console.log(add(5)(-1)(2));
console.log(add(10)(20)(30)(40));

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const boundLogger = logger.bind(obj);

boundLogger();

//exercise 4

Function.prototype.myBind = function (context, ...bindArgs) {
  const originalFunc = this;

  if (typeof originalFunc !== "function") {
    throw new TypeError("myBind can only be called on a function");
  }

  return function (...callArgs) {
    const isNewCall = this instanceof originalFunc;

    const thisContext = isNewCall ? this : context;

    const args = bindArgs.concat(callArgs);

    return originalFunc.apply(thisContext, args);
  };
};
