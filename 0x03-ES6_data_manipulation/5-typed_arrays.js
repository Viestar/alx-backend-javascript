// a function named createInt8TypedArray that returns a new ArrayBuffer 
// with an Int8 value at a specific position
export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }
  const bufferArray = new ArrayBuffer(length);
  const apiView = new DataView(bufferArray);
  apiView.setInt8(position, value);
  return apiView;
}
