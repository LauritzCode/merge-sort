const array = [
  1, 4, 7, 3, 65, 23, 66, 555, 543, 11, 13, 43, 343, 234567, 34, 22,
];

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

console.log(mergeSort(array));
