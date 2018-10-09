// @flow

function compose(...funcs: Function[]) {
  return funcs.reduce(
    (a, b) => (...args: any[]) => a(b(...args)),
    (arg: any) => arg
  );
}

export default compose;
