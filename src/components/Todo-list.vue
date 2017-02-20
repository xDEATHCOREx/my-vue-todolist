<template>
<div>
	<ul id="todoList">
		<todo-item
		 v-for="(todo,index) in filteredList" 
		 :todos="todos"
		 :todo="todo" 
		 :index="index"></todo-item>
		<li v-if="">All things done!!</li>
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
	
</style>