import {createElement, h, mount} from  './render'
import * as C1 from './component/Component1'

let {Component1} = C1.default
console.log(Component1)

function render() {
    return (
        <div>
            Hello World
            <ul>
                <li id="1" class="li-1">
                    第1
                </li>

            </ul>
            <hr/>
            <Component1/>
        </div>
    );
}

let vdom = render()

console.log(vdom)

let $el = createElement(vdom)

mount(document.querySelector('#app'), $el)

