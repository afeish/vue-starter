
function display() {

}

let name = "window scope"

let Person = {
	name: 'person object scope',
	display() {
		console.log(`${this.name} is running`)
	},
	display2: () => {
		console.log(`${this.name} is running at display2 ...`)
	}
}

let Animal = {
	name: 'I am an Animal, should not display'
}

// 第一种，对象.function() ，所以 this 对象为 Person
Person.display()

Animal.display = Person.display

Animal.display()

let runFunc = Person.display

// 第二种，在 windows 对象里调用function，所以 this 对象为 window
runFunc()

// 第三种， this 对象仍为 window
Person.display.call()

// 可以使用 call(obj)： 指定当函数发生调用时，的 this 指向了谁
// 相当于 在调用这个函数的时候，指定上下文 this
Person.display.call(Person)

let runFunc2 = Person.display
runFunc2.call(Person)


Person.display.call()
let newDisplay = Person.display.bind(Person)
newDisplay.call()

runFunc2()
runFunc2.call()
runFunc2.bind(Person)
runFunc2()




