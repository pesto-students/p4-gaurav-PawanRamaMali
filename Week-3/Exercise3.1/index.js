const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    let strKey = args.join(",");
    if (!cache.has(strKey)) {
      cache.set(strKey, func.apply(this, args));
      return func.apply(this, args);
    }
    return cache.get(strKey);
  };
};

const add = (...args) => {
  return args.reduce((s, e) => {
    return (s += e);
  }, 0);
};

const memoizeAdd = memoize(add);

const debugMemoiz = (...args) => {
  console.time();
  memoizeAdd(...args);
  console.timeEnd();
};

debugMemoiz(100, 100); // returns 200, since the key i.e "100,100" is not already in cache it's computed & added in
debugMemoiz(100); // returns 100, since the key i.e "100" is not already in cache it's computed & added in
debugMemoiz(100, 200); // returns 300, since the key i.e "100,200" is not already in cache it's computed & added in
debugMemoiz(100, 100); // returns 200, since the key i.e "100,100" is in cache the value is returned directly instead of computing it again
debugMemoiz(200, 100); // returns 300, since the key i.e "100,200" is in cache the value is returned directly instead of computing it again
