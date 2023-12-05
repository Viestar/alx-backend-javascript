// weakMap
let apiCalls = 0;

export const weakMap = new WeakMap();
export default function queryAPI(endpoint) {
  apiCalls += 1;
  if (apiCalls >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, apiCalls);
}
