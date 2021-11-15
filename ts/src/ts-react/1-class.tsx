import React, { Component } from "react";

interface propsInterface {
    name: string;
}

interface stateInterface {
    age: number;
}


class A extends Component<propsInterface, stateInterface> {

    render() {
        return <div>111</div>
    }
}

