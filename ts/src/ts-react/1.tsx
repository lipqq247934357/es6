import React from "react";

interface Greeting {
    name: string;
}

// 并没有带来好处，建议使用常规的方式
const Hello: React.FC<Greeting> = props => <div>Hello {props.name}</div>;

export default Hello;
