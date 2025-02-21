function foo(a) {
  return (a ?? []).length; //or
  return (typeof a !== 'undefined' && Array.isArray(a)) ? a.length : 0;
}