

// const Vue = {
// 	$store: null
// 	store: null
// }

const Vue = function(option) {

//  所有的 vue 自身的属性都以 $ 开头
	this.$store = null;
	this.$el = '';

	if (option != null) {
		this.$store = option.store,
		this.$el = option.el
		this.$http = option.http ? option.http : 'default ajax'
		this.$methods = option.methods
	}

}






let vm = new Vue({
	store: 'I am a store',
	el: 'I am an elment',
	http: 'axios',
	methods: {
		func1() {
			console.log(this.$http)
		}
	}
});


console.log(vm.$el)
console.log(vm.$store)
console.log(vm.$methods.func1())


// 什么叫 map（这个 map 不是静态的，而是动态的）
let arr = [
{id: 1, content: 'xxx', done: false},
{id: 2, content: 'yyy', done: true},
{id: 3, content: 'zzz', done: true}
]

let arr2 = [... arr]


arr2.map(elem => {
	if (elem.done == true) {
		elem['priority'] = 5
	} else {
		elem['priority'] = 0
	}
})

