
// Problem 6.1 - Max Sum Contiguous Subarray

function maxContiguousSubArray(arr) {
  let current = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i], arr[i] + current);
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxContiguousSubArray([22, -5, 9, 2, 3, -7, -6, -21]));

//TIME COMPLEXITY   o(n)
//SPACE COMPLEXITY  o(1)

//----------------------------------------------------------------------------------------------

//Problem 6.2 Spiral Order Matrix II

function spiralPrint(arr) {
  let i_row_start = 0;
  let i_row_end = arr.length - 1;
  let i_col_start = 0;
  let i_col_end = arr[0].length - 1;
  let i = 0;
  let finalArr = [];

  
  while (i_row_start <= i_row_end && i_col_start <= i_col_end) {

    //Top Row
    for (i = i_col_start; i <= i_col_end; i++) {
      finalArr.push(arr[i_row_start][i]);
    }
    i_row_start++;

    //Last Column
    for (i = i_row_start; i <= i_row_end; i++) {
      finalArr.push(arr[i][i_col_end]);
    }
    i_col_end--;

    //Last Row
    for (let i = i_col_end; i >= i_col_start; i--) {
      finalArr.push(arr[i_row_end][i]);
    }
    i_row_end--;

    //1st column
      for (let i = i_row_end; i >= i_row_start; i--) {
        finalArr.push(arr[i][i_col_start]);
      }
      i_col_start++;
  }

  return finalArr;
}

console.log(
  spiralPrint([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//----------------------------------------------------------------------------------------------

//Problem 6.3 Sort array of 0's,1's and 2's

function sort012(arr) {
  let start = 0;
  let current = 0;
  let end = arr.length - 1;

  while (current <= end) {
    if (arr[current] === 0) {
      let temp = arr[start];
      arr[start] = arr[current];
      arr[current] = temp;
      start++;
      current++;
    } else if (arr[current] === 1) {
      current++;
    } else {
      let temp = arr[end];
      arr[end] = arr[current];
      arr[current] = temp;
      end--;
      current++;
    }
  }
  return arr;
}

console.log(sort012([2, 1, 1, 0, 1, 0, 0, 2, 2, 1, 1]));
//TIME COMPLEXITY   o(n)
//SPACE COMPLEXITY  o(1)

//----------------------------------------------------------------------------------------------

//Problem 6.4 : Best time to buy and sell stock

function maxProfit(arr) {
  let lo = 0;
  let hi = arr.length - 1;

  let difference = 0;
  while (lo < hi) {
    if (arr[hi] - arr[lo] > difference) {
      difference = arr[hi] - arr[lo];
      hi--;
    } else {
      lo++;
    }
  }
  return difference;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//TIME COMPLEXITY   o(n)
//SPACE COMPLEXITY  o(1)

//----------------------------------------------------------------------------------------------

// Problem 6.5: Pair With Given Difference

function findPairWithDifference(arr, diff) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    if (Math.abs(arr[lo] - arr[hi]) < diff) {
      lo++;
    } else if (Math.abs(arr[lo] - arr[hi]) > diff) {
      hi--;
    } else if (Math.abs(arr[lo] - arr[hi]) === diff) {
      return 1;
    }
  }
  return 0;
}

console.log(findPairWithDifference([5, 10, 3, 2, 50, 80], 78));

//TIME COMPLEXITY   o(n)
//SPACE COMPLEXITY  o(1)

//----------------------------------------------------------------------------------------------

// Problem 6.6 : 3 sum

function merge(list1, list2) {
  let arr = [];
  let left_i = 0;
  let right_i = 0;
  while (left_i < list1.length && right_i < list2.length) {
    if (list1[left_i] < list2[right_i]) {
      arr.push(list1[left_i++]);
    } else {
      arr.push(list2[right_i++]);
    }
  }

  while (left_i < list1.length) {
    arr.push(list1[left_i++]);
  }

  while (right_i < list2.length) {
    arr.push(list2[right_i++]);
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let middle = arr.length / 2;

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < middle) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function nearestsum(arr, target) {
  let sortedArray = mergeSort(arr);

  let nearestSum = arr[0] + arr[1] + arr[2];

  for (let i = 0; i < sortedArray.length; i++) {
    let ptr1 = i + 1;
    let ptr2 = sortedArray.length - 1;
    while (ptr1 < ptr2) {
      let sum = arr[i] + sortedArray[ptr1] + sortedArray[ptr2];

      if (Math.abs(target - sum) < Math.abs(target - nearestSum)) {
        nearestSum = sum;
      }

      if (sum > target) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }

  return nearestSum;
}

console.log(nearestsum([-5, -1, 2, 1, -4, 1], 1));
//TIME COMPLEXITY   o(nlog(n))
//SPACE COMPLEXITY  o(1)
