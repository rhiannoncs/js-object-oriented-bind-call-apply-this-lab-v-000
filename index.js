function justInvoke (fn) {
  return fn.call();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  const bob = fn.apply(thisValue, [args]);
  return bob;
}