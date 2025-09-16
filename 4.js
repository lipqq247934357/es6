// a b c
// 二叉树有多少个子节点

// 

let object = {
  left: {
    left: {

    },
    right: {

    }

  },
  right: {
    left: {

    }
  }
};

function a(item, lengthObject) {

  if (item.left) {
    a(item.left, lengthObject);
  }

  if (item.right) {
    a(item.right, lengthObject);
  }

  if (!item.left && !item.right) {
    lengthObject.length++;
  }

  return lengthObject.length;

}

console.log(a(object, {length: 0}));

