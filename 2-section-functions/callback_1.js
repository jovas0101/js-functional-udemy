function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoterminal = (x, y) => console.log(x + y);
const subtrairNoterminal = (x, y) => console.log(x - y);

exec(somarNoterminal, 56, 38);
exec(subtrairNoterminal, 182, 27);

// ------------------------------------

setInterval(() => console.log("Exec 2..."), 1000);
