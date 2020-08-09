import {createElement, h, mount} from  '../render'


function Component1() {
    return (
        <ul>
            <li>0</li>
            {
                [1, 2, 3].map( i => (
                    <li>{i}</li>
                ))
            }
        </ul>
    );
}

let vdom = Component1()

console.log('Component1 vdom is: ', vdom)



export default {
    Component1: vdom
}