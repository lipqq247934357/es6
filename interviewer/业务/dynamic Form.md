整体逻辑:
    1.页面的逻辑由两部分控制:数据和事件,反显的逻辑主要根据事件的逻辑动态生成
    2.用户的操作会触发事件，然后根据操作修改对应数据，展示效果

新增：
    数据层：
        1.后端给的展示的数据格式（一般用树结构）
        2.动态生成存储的数据格式（一般是对象）
    事件层：
        根据依赖关系，如果前置条件没有选择，那么他肯定是不展示的
        如果它的祖宗级元素触发时间，让它祖宗的子元素发生变化，给他提供数据等

反显：
    数据层：
        数据是不变的
    事件层：
        由于反显是不触发事件的，所以需要手动执行逻辑生成
    data触发：
        根据事件的触发机制，然后手动给节点赋值