# 自顶向下学习 React

## 理念篇

### 1.1 如何学习 React 源码

    如何学习React源码&课程介绍&课程收获

### 1.2 设计理念

    Concurrent Mode:异步可中断
    Suspense:延迟显示加载状态

### 1.3 架构的演进史

    React15架构：
        Reconciler（协调器），Renderer（渲染器）
        同步执行
    React16架构：
        Scheduler（调度器），Reconciler（协调器），Renderer（渲染器）；
        异步，可中断的更新
        协调器的更新是一个事务级别的，一次更新全部更新
        同时根据优先级决定更新顺序（在协调器这一个事务完成前，低优先级的可以给高优先级的任务中断）

### 1.4React 新架构 - Fiber

    代数效应
    ![aa](https://react.iamkasong.com/img/process.png)

    代数效应：将函数的副作用从函数中抽离

### 1.5Fiber 架构工作原理

    Fiber 架构
        树的深度优先遍历的后续遍历

    React Fiber:更新可中断和继续，更新可以拥有不同的优先级

    Fiber三层含义：
    ​ 1.React15 使用的是 Stack Reconciler ，React 16 使用 Fiber Reconciler

```js
// 指向父级Fiber节点
this.return = null;
// 指向子Fiber节点
this.child = null;
// 指向右边第一个兄弟Fiber节点
this.sibling = null;
```

    ​ 2.Fiber 作为静态数据，保存着虚拟 dom 数据
    ​ 3.Filber 作为工作单元，保存着组件更新相关信息

    1.双缓存:在内存中构建并直接替换的技术叫双缓存
    2.在React中同时存在最多两个Fiber树（Current Fiber树， WorkInProgress Fiber树），
    React使用两个指针在不同的Fiber树之间切换，来更新Dom

### 1.6 如何调试源码 & 1.7 源码目录结构

    查看文档

## 2架构篇之 render 阶段

    树的深度优先遍历的后续遍历

### 2.1 流程概览

    根节点:FiberRootNode
        rootFiber(current)  rootFiber(workInProgress)
    RenderRootSync
    commitRoot

### 2.2 深入理解JSX

[JSX_DEMO](
https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=DwBwBAdghgtgpgXgEQEY1IHwCgxmFMACwCc4AzZAIygEsATAVwDoBjAexk2AHoptd8RUhSTV6zdpww8-WHiAxA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.17.9&externalPlugins=%40babel%2Fplugin-transform-react-jsx%407.17.3&assumptions=%7B%7D)

定义config,ref等保留属性
React Element: createElement创建的就叫Element

function Component:class 创建的叫class component;function创建的叫function component

Component会作为Element的第一个参数传入CreateElement

defaultProps

### 2.3 “递”阶段mount时的流程

    1.beginWork,completeWork 执行流程（概述）
    2.beginWork执行内容：
        2.1根据不同tag进入不同case
        2.2reconcilerChildren 处理子节点
        2.3 根据是否current ===null 执行 mountChildFibers（false）或者reconcileChildFibers（true）
        2.4ChildReconciler(boolean) (boolean 同上)
            1.追踪副作用,如果需要的话
            2.对child进行处理，不同类型进行不同处理逻辑
        2.5如果是组件Element,reconcilerSingleElement

### 2.4 “归”阶段mount时的流程

    1.深度遍历首先被遍历完成的节点先执行completeWork
    2.首先根据tag执行不同的逻辑
    3.createInstance 创建dom节点
    4.将节点插入到DOM树中
    5.初始化DOM属性
    6.根Fiber节点进入reconcileChildFibers（被赋值effectTag:Placement）

### 2.5 “递”阶段update时的流程

    1.createWorkInProgress
        1.1是否存在workInProgressFiber
    2.双缓存代码实现
        2.1
    3.beginWork
        1.当前Fiber节点是否有变化
        2.bailoutOnAlreadyFinishWork
            2.1cloneChildFibers
        3.执行UpdateFunctionComponent
            执行function 组件，返回JSX对象

### 2.6 “归”阶段update时的流程

    1.completeWork
    2.首先根据tag执行不同的逻辑
    3.执行UpdateFunctionComponent$1(与递阶段的方法不一样)
        prepareUpdate
            diffProperties
                effectTag属性改变，增加UPDATE属性
    4.将有effect的节点放到链表中

![流程图](https://react.iamkasong.com/img/beginWork.png)

![流程图](https://react.iamkasong.com/img/completeWork.png)

## 3架构篇之 commit 阶段

### 3.1流程概览

    1.commitRoot
        commitRootImpl
    2.rootWithPendingPassiveEffects（在开始commit之前，需要先执行所有的useEffect）
    3.更新事件，处理blur，focus
    4.重置render阶段使用的全局变量
    5.处理effectTags的链表
    6.commitBeforeMutation
    7.mutation
    8.layout阶段

### 3.1before Mutation

    1.blur,focus
    2.commitBeforeMutationEffectOnFiber
    3.scheduleCallback(()=> {
        useEffect();
    })

### 3.2Mutation

    遍历EffectTags
    1.重置文本节点
    2.ref更新
    3.是否有Placement | Update | Deletion
        eg: Placement
            1.找到父节点
            2.找到兄弟节点（它的兄弟节点可能是个Component，而不是个HostElement）
            如果兄弟节点存在，执行insertBefore，否则执行appendChild
        eg: Update
            1.commitUpdate
            2.数组的i是改变的属性名，i+1是属性值
        eg: Deletion
            1.找到父级节点
            2.递归的对子树进行删除

### 3.3layout

    1.commitLayoutEffect
        commitLayoutEffectOnFiber
            处理ref

## 4.实现篇 之 diff 算法

    1.222

## 5.实现篇 之 状态更新

    1.触发状态更新的方法
        ReactDOM.render
        this.setState
        this.forceUpate
        useState
        useReducer
    2.流程
        1.创建Update对象
        2.DispathAction
        3.从触发更新的fiber一直向上到rootFiber，并返回rootFiber
        4.根据Scheduler，决定是同步更新还是异步更新
        5.commitRoot
    3.更新方式
        1.使用ReactDOM.render
            根据触发的顺序，顺序更新，没有优先级之说
        2.使用ReactDOM.createRoot
            根据优先级进行更新
    4.Update对象
        1.HostRoot | ClassComponent | FunctionComponent 三种组件可以除法更新

### 5.4ReactDOM.render的完整流程

    1.ReactDOM.render
        创建整个应用的根节点，当前fiber树
        创建Update
        向上遍历整个应用从fiber到root
        调度更新
        render
        commit
        
    2.ReactDOM.createRoot

### 5.5this.setState的完整流程

    与ReactDOM.render类似

## 6.实现篇 之 Hooks

### 6.1 useState实现原理

### 6.2 1

## 7.实现篇 之 Concurrent
