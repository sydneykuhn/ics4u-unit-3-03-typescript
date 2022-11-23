/**
 * This program uses recursion to find an item using binary search.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2022-11-22
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 * Binary Search Function.
 *
 * @param {number[]} numArray - all numbers to be searched through.
 * @param {number} target - number being requested by the user.
 * @param {number} min - lowest point in the array.
 * @param {number} max - highest point in the array.
 * @returns {number} the array index that matches the target.
 */
function binarySearch(
  numArray: number[],
  target: number,
  min: number,
  max: number
): number {
  // base case to prevent infinite loop
  if (min > max) {
    return -1
  }

  const mid = Math.floor((min + max) / 2)

  // true if target equals the matching index
  if (numArray[mid] === target) {
    return mid
    // searches in the lower half if middle > target
  } else if (numArray[mid] > target) {
    return binarySearch(numArray, target, min, mid - 1)
    // searches in the upper half if middle < target
  } else {
    return binarySearch(numArray, target, mid + 1, max)
  }
}

// declares constants
const MIN = 1
const MAX = 999
const ARRAY_SIZE = 250

const randomNumArray = new Array(ARRAY_SIZE)

for (let counter = 0; counter < randomNumArray.length; counter++) {
  randomNumArray[counter] = Math.floor(Math.random() * MAX + MIN)
}

randomNumArray.sort(function(a, b) {
  return a - b
})

console.log('Sorted Array : ')

for (let counter = 0; counter < randomNumArray.length; counter++) {
  process.stdout.write(`${String(randomNumArray[counter])}, `)
}

console.log('\n')

const numInput = Number(
  prompt('What number are you searching for? (0 - 999): ')
)

console.log(
  `Your number is in index ${binarySearch(
    randomNumArray,
    numInput,
    0,
    ARRAY_SIZE - 1
  )}.`
)

console.log('\nDone.')
