let dog;
console.log(dog);

const countFunc = () => {
  let count = 0;
  return () => {
    return count += 1;
  };
};

const c = countFunc();
let cv = c();
cv = c();
cv = c();
cv = c();
console.log(cv);

const d = countFunc();
console.log(d());
console.log(d());
console.log(d());

document.write("<h2>heeello</h2>");