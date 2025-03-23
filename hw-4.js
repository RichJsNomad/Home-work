// Никита, я решал задачи в разной последовательности, дополнительно комментами в коде отметил что где

function log(...args) {
  console.log(...args);
} // Это просто функция, которую я всегда пишу в своем коде, чтобы долго не печатать консоль лог, мне так больше нравится, удобнее

//  задача 4

function reverseStr(str) {
  return str.split("").reverse().join("");
}

log(reverseStr("никита"));
log(reverseStr("максим"));

// задача 2

function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
    return "First parameter must be array!";
  } else if (
    arr.every((item) => {
      typeof item !== "number";
    })
  ) {
    return "There are not only numbers in the array";
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "Incorrect input parameters";
  }

  const minNumber = Math.min(a, b);
  const maxNumber = Math.max(a, b);

  return arr
    .filter((num) => num >= minNumber && num <= maxNumber)
    .sort((a, b) => a - b);
}

log(selectFromInterval([1, 8, 10, 4], 3, 20));

// задача 3

const arr = [
  { name: "Bob", age: "25" },
  { name: "Ann", age: "30" },
  { name: "Tom", age: "35" },
];

const fn = (prop) => {
  return (item) => {
    console.log(item[prop]);
  };
};

arr.forEach(fn("name"));

arr.forEach(fn("age"));

// задача 1 функция глубокого копирования

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const arr3 = [1, 3, 5, [3, 4, "abc"]];

const arr4 = deepCopy(arr3);
log(arr4);

arr3.push("hi");
log(arr3);

const obj2 = {
  name: "Aleks",
  age: 30,
};

const obj3 = deepCopy(obj2);

obj2.name = "Igor";

log(obj3);
