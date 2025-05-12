export function isEmpty(value) {
  return value.trim() === "";
  //   return value.trim().length === 0;
}

export function isEmail(value) {
  const regex = /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9_.]+\.[a-zA-Z]{2,}$/;
  const result = regex.test(value);
  return result;
}

export function isText(value) {
  const regex = /^[a-zA-Z0-9\s]{4,}$/; // allow space -->  \s
  const result = regex.test(value);
  return result;
}
