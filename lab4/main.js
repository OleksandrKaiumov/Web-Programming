// 1
function CalculateSum(n)
{
  var sum = 0;

  for (var i = 1; i <= n; i += 1)
  {
    sum += i;
  }

  return sum;
}

// 2
var Multiply = function (a, b)
{
  return a * b;
};

// 3
var Power = (a, b) =>
{
  return a ** b;
};

// 4
function HarmonicSeries(n)
{
  if (n <= 0)
  {
    return 0;
  }

  return 1 / n + HarmonicSeries(n - 1);
}

// 5
function CreateMultiplier(multiplier)
{
  return function Multiplier(i)
  {
    return i * multiplier;
  };
}

// 6
function ApplyFunction(value, func)
{
  return func(value);
}

var doubledNumber = ApplyFunction(5, (i) => i * 2);
var squaredNumber = ApplyFunction(5, (i) => i ** 2);

// 7
function ProcessSet(set, callback)
{
  var processedSet = new Set();

  for (var i of set)
  {
    processedSet.add(callback(i));
  }

  return processedSet;
}

console.log("Сума чисел від 1 до 5:", CalculateSum(5));
console.log("Добуток 4 і 3:", Multiply(4, 3));
console.log("2 у степені 4:", Power(2, 4));
console.log("Перші 5 членів гармонічного ряду:", HarmonicSeries(5));

var triple = CreateMultiplier(3);
console.log("6, помножене на 3:", triple(6));
console.log("Подвоєне число 5:", doubledNumber);
console.log("Квадрат числа 5:", squaredNumber);

var numbers = new Set([1, 2, 3, 4]);
console.log("Квадрати елементів Set:", ProcessSet(numbers, (i) => i ** 2));
