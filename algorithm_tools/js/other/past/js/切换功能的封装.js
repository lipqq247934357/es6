/**
 *切换插件
 * 思路：就是将几个类似的元素进行修改，让他们只有一个可以拥有某个样式，表示这个东西被选中了，
 *       然后展示这个东西对应的信息
 */
function turnBar(array1, array2, f) {
    $(array1.join(',')).on("click", function () {
        var $this = $(this);
        if ($this.hasClass(array2[0]))return;
        for (var item of array1) {
            var $item = $(item);
            if ($item.hasClass(array2[0])) {
                for (sty of array2) {
                    $item.removeClass(sty);
                    $(this).addClass(sty);
                }
                break;
            }
        }
        for (var item of array1) {
            if ($this.attr("class").indexOf(item.substr(1)) != -1) {
                f(item);
            }
        }
    });
}

/**
 * 
 * 参数说明：
 * 1.第一个参数是class名称组成的数组： 例如：['.a1','.a2']
 * 2.需要切换的class数组 比如：['class1','class2']
 * 3.一个方法，传入的参数是被点击的class 比如：'.a1',方法体的内容是将所有的内容变为未激活态，然后将这个指定的class的对应内容设置成激活状态
 */
turnBar([".list1", ".list2", ".list3", ".list4"], ["active"], function (item) {
    for (var i = 0; i < 4; i++) {
        $(".listCont" + i).hide();
    }
    $(".listCont" + item.substr(item.length - 1)).show();
});
