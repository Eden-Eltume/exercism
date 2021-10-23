// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
      return 1.5;
      break;
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
      break;
  }
  throw new Error('Please implement the timeToMixJuice function');
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let count = 0;          
  let wedges = 0;
  let index = 0; 

  while (wedges < wedgesNeeded) {
    switch (limes[index]) {
      case 'small':
        wedges += 6;
        break;
      case 'medium':
        wedges += 8;
        break;
      default:
        wedges += 10;
        break;
    }     
    index++;  
    count++;
  }
  return count > limes.length ? limes.length : count;
  throw new Error('Please implement the limesToCut function');
}



/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeRequired = 0;
  let juices = 0;
  let index = 0;

  while(timeRequired < timeLeft){
    timeRequired += timeToMixJuice(orders[index]);
    index++;
    juices++
  }
  return orders.slice(juices, orders.length);

  throw new Error('Please implement the remainingOrders function');
}
