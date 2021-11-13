// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {

  let arr1String = ''
  let arr2String = ''

  for(let index = 0; index < array1.length; index++){ arr1String += array1[index]};
  for(let index = 0; index < array2.length; index++){ arr2String += array2[index]};

  let result = Number(arr1String) + Number(arr2String);
  
  return result

  throw new Error('Implement the twoSum function');
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {

  let valueArr = Array.from(String(value));

  let valueIntArr = valueArr.map( numStr => Number(numStr));

  let value2 = Number(valueIntArr.reverse().join(""));

  return value === value2;

  throw new Error('Implement the luckyNumber function');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === "" || input === null || input === undefined){
    return 'Required field'
  }else if(isNaN(Number(input)) || parseInt(input) === 0){
    return 'Must be a number besides 0'
  }else{
    return ''
  }

  throw new Error('Implement the errorMessage function');
}
