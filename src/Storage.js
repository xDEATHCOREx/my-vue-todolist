export default {
	getTodoList(){
		return JSON.parse(localStorage.getItem('todo-list'||'[]'))
	},
	store(todoItems){
		localStorage.setItem('todo-list',JSON.stringify(todoItems))
	}
}