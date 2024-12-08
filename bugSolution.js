function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-objects
  }
  return x.length; 
}