// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

const arr = [0, 1, 0, 3, 12]

// 函数
function update(array, index, length) {

  while (array[index] === 0 && index < length) {
    array[index] = array[index + 1];
    array[index + 1] = 0;
    index = index + 1;
  }
}

for (let i = arr.length - 1; i > 0; i--) {
  update(arr, i, arr.length);
}

console.log(arr);

// 示例 1:

// 输入: nums = [0, 1, 0, 3, 12]
// 输出: [1, 3, 12, 0, 0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]

先有个大致逻辑，再处理边缘问题和性能问题