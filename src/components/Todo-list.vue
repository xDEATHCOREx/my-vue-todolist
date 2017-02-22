<template>
<div class="block">
	<ul id="todoList">
		<todo-item
		 v-for="(todo,index) in filteredList" 
		 :todos="todos"
		 :todo="todo" 
		 :filter="filter"
		 :index="index">
		 </todo-item>	
	</ul>
</div>
</template>
<script type="text/javascript">
import TodoItem from './Todo-item.vue'
	let filterSelect ={
		all:function(todos){
			return todos
		},
		todo:function(todos){
			return todos.filter(function(todo){
				return !todo.completed
			})
		},
		completed:function(todos){
			return todos.filter(
				function(todo){
					return todo.completed
				})
		},
	}
	export default{
		props : ['todos','filter','todo'],
		computed :{
			filteredList(){
				return filterSelect[this.filter](this.todos)
			}
		},
		components : {
			TodoItem
		}
	}
</script>
<style type="text/css">
	#todoList{
		padding: 0;
	}
</style>