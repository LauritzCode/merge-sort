# Merge Sort in JavaScript

This project is my first real attempt at writing a sorting algorithm. I decided to implement merge sort to get a better understanding of recursion and the divide-and-conquer strategy. It was a fun challenge, and I learned a lot about how to split arrays and merge sorted pieces back together.....I'm so sorry you had to read that. Okay let's continue...

## How It Works

The code is split into two main functions:

### `mergeSort`

This function takes an array and recursively splits it into halves until it reaches arrays of one element, which are naturally sorted. Then it merges these small arrays back together into a sorted array.

```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  const merged = mergeArrays(sortedLeft, sortedRight);

  return merged;
};
```

### `mergeArrays`

This helper function takes two sorted arrays and merges them into one sorted array using two pointers. It goes through both arrays, compares their current values, and builds a new sorted array. When one array is finished, it appends the rest of the other array.

```js
const mergeArrays = (arr1, arr2) => {
  let sortedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
};
```

## Example Usage

Here's a quick example to see merge sort in action. You can change the input array to try it out with different sets of numbers:

```js
const array = [1, 4, 7, 3, 65, 23, 66, 34, 22];
console.log(mergeSort(array));
// Expected output: [1, 3, 4, 7, 22, 23, 34, 65, 66]
```

---

Wow! Unbelievable. This project isn't meant to be anything life-changing (It so totally is!!) -- just a learning experience to understand how sorting algorithms work. Enjoy ! 
