export function isEmpty(value) {
  return value.trim() === "";
  //   return value.trim().length === 0;
}

export function isEmail(value) {
  const regex = /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const result = regex.test(value);
  return result;
}

export function isText(value) {
  // const regex = /^[a-zA-Z0-9\s]{4,}$/; // allow space -->  \s
  // const regex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s]{4,}$/;
  // حتما باید یک کاراکتر یا عدد بزنه
  // ' 5 ' , 'i  ' , "  fati"   --> valid
  const regex = /^(?=.*[\p{L}\p{N}])[\p{L}\p{N}\s]{4,}$/u; // en fa

  const result = regex.test(value);
  return result;
}
