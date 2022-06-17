# 自顶向下学习 React

## 第一章 React 理念

    Concurrent Mode:异步可中断
    Suspense:

### 架构演进史

#### Stack 架构（React15）

#### React Fiber 架构（React16）

    Scheduler（调度器），Reconciler（协调器），Renderer（渲染器）；
    Fiber 架构
    树的深度优先遍历的后续遍历

![aa](https://react.iamkasong.com/img/process.png)

    代数效应：将函数的副作用从函数中抽离
    React Fiber:更新可中断和继续，更新可以拥有不同的优先级

### Fiber 实现原理

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

### Fiber 工作原理

    1.双缓存:在内存中构建并直接替换的技术叫双缓存
    2.在React中同时存在最多两个Fiber树，React使用两个指针在不同的Fiber树之间切换，来更新Dom

## 架构篇

### 3.render阶段

#### 流程概览

    1.rendr阶段开始于performSyncWorkOnRoot或者performConcurrentWorkOnRoot
    2.performUnitOfWork
    3.递阶段
        从rootFiber深度优先遍历，调用beginWork，创建子Fiber，将子Fiber和自身关联起来
    4.归阶段
        调用completeWork
    5.最终归到rootFiber，至此render阶段结束

#### beginWork

    111

### commit阶段

## 实现篇

### diff算法

    1.222

### 状态更新

    1.触发状态更新的方法
        ReactDOM.render
        this.setState
        this.forceUpate
        useState
        useReducer
    2.流程
        1.创建Update对象
        2.从触发更新的fiber一直向上到rootFiber，并返回rootFiber
        3.根据Scheduler，决定是同步更新还是异步更新
    3.更新方式
        1.使用ReactDOM.render
            根据触发的顺序，顺序更新，没有优先级之说
        2.使用ReactDOM.createRoot
            根据优先级进行更新
    4.Update对象
        1.HostRoot | ClassComponent | FunctionComponent 三种组件可以除法更新
