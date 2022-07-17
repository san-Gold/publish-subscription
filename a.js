const events = {};
function $on(id, fun) {
  if (!events[id]) events[id] = [];
  events[id].push(fun);
}

function $emit(id, val) {
  events[id].forEach((item) => item(val));
}
