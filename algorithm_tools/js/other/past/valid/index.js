/**
 * author:247934357@qq.com
 * githubAddress:https://github.com/lipqq247934357
 * @param id  传入的元素id
 * @param verify 验证规则
 * @param error  失败处理方案
 * @param auto  是否是对该元素进行动态监控
 * @param tag  所属类型
 *
 */

var content = {
    list:new Array(),
    remove:function(){//当list删除一个元素的时候

    },
    add:function(){//当list添加一个元素的时候
        tag = tag || id;
        var  obj = {
            id:id,
            verify:verify,
            error:error,
            auto:auto,
            tag:tag
        };

        this.list.concat(obj);
    },
    valid:function(bj){

    },
    isOk:function(param) {
        //如果是以#开头的，表示是传进来的是id，否则是tag

        if (!this.valid()) {

        }
    },
    paramType:function(param){//判断类型
        return /^#/
    }
};
