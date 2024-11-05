# ts开发中遇到的问题

## 前言

  1.ts是一种辅助性质的语法，但是如果单纯记忆概念，就感觉特别的费劲
  2.ts的绝大部分功能我已经了解了，主要是一些实战我还需要再去搞起来；
    比如:我在react中的什么场景下怎么使用ts,或者如何处理不同组件之间共享声明等

## react中的一些场景

  1.由于我目前主要做的react项目，所以先从react开始总结

### props的定义

1.使用`React.FC<MyComponentProps>`这样就是使用泛型，把props的类型通过泛型传进去

```tsx
import React from 'react';

interface MyComponentProps = {
  title: string;
  count?: number;  // 可选属性
};

const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0 }) => (
  <div>
    <h1>{title}</h1>
    <p>Count: {count}</p>
  </div>
);

export default MyComponent;

```

2.直接给props定义,就是把props当成一个普通对象处理

```tsx
type MyComponentProps = {
  title: string;
  count?: number;
};

const MyComponent = ({ title, count = 0 }: MyComponentProps) => (
  <div>
    <h1>{title}</h1>
    <p>Count: {count}</p>
  </div>
);

export default MyComponent;
```

### forwardRef

```tsx
import React, { forwardRef } from 'react';

type InputProps = {
  label: string;
};

// 使用泛型定义 ref 类型
const CustomInput = forwardRef<HTMLInputElement, InputProps>(({ label }, ref) => (
  <div>
    <label>{label}</label>
    <input ref={ref} />
  </div>
));

export default CustomInput;

```