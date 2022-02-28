/**
 * 将data转化成树结构
 * 支持子节点排序和
 * @param data
 * @returns {Array}
 */

export const treeUtil = function (data) {

    let i = 0;
    let tree = [];
    let pos = [];
    while (data.length !== 0) {
        let item = data[i];
        item.children = [];
        let parentId = item['parentMenuId'].trim();
        if (parentId === '') { //一级菜单
            tree.push(item);
            pos[item['menuId']] = tree[tree.length - 1];
            data.splice(i, 1);
        } else { // 子节点
            let obj = pos[parentId];
            if (obj !== undefined) {
                obj.children.push(item);
                pos[item['menuId']] = obj.children[obj.children.length - 1];
                sort(obj.children);
                data.splice(i, 1);
            } else {
                i++;
            }
        }
        if (i > data.length - 1) {
            i = 0;
        }
    }

    function sort(obj) {
        obj.sort(function (a, b) {
            return a.menuOrder - b.menuOrder
        })
    }

    return tree;
}
