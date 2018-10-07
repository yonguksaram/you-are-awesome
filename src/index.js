// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
  return propertyName
};
const createNotEnumerableProperty = (propertyName) => {
  return Symbol(propertyName);
};
const createProtoMagicObject = () => {

 let object = new Function;
   object.prototype = Object.getPrototypeOf(object);

   return object;
};
const incrementor = () => {
  p++;
  function t(){
    p++;
    return t;
  }
  t.toString = function() {
    return p;
  };
  return t;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;