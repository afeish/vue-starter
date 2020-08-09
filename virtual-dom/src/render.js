function flatten(arr) {
    return [].concat.apply([], arr);
}

function h(tag, props, ...children) {
    return {
        tag, 
        props: props || {}, 
        children: flatten(children) || []
    };
}

function createElement(vdom) {
	if (typeof vdom == 'string' || typeof vdom == 'number') {
		return document.createTextNode(vdom)
	}

	const {tag, props, children} = vdom

	// create element
	const element = document.createElement(tag)

	setProps(element, props)

	children.map(createElement).forEach(element.appendChild.bind(element))

	return element
}

function mount(el, element) {
	el.appendChild(element)
}


function setProps(element, props) {
	for (let key in props) {
		element.setAttribute(key, props[key])
	}
}

export {
	createElement,
	h,
	mount
}
