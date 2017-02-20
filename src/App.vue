<template>
<div id="app">
	<el-card class="box-card">
	 <div slot="header" class="clearfix header">
    {{title}} 
  </div>

	<todo-input></todo-input>
	<todo-list :todos="todos" :filter="filter"></todo-list>
	<todo-filter></todo-filter>
	</el-card>
</div>
</template>
<script type="text/javascript">
import TodoInput from './components/Todo-input.vue'
import TodoList from './components/Todo-list.vue'
import TodoFilter from './components/Todo-filter.vue'
import {eventHub} from './components/Event-hub.js'
import Storage from './Storage.js'
export default{
	data(){
		return{
			title: 'My Vue Todo List',
			todos:Storage.getTodoList(),
			filter :'all',
		}
	},
	created(){
		eventHub.$on('add-new',this.addNewTodo)
		eventHub.$on('set-filter',this.setFilter)
		},
	components:{
		TodoInput,
		TodoList,
		TodoFilter
	},
	methods :{
		addNewTodo(newItem){
			if(newItem){
				console.log("test addnew"+newItem)
				this.todos.push({
					value : newItem ,
					completed : false
				})
				Storage.store(this.todos)
				console.log(this.todos)
			} else{
				console.log("test addnew null")
			}
		},
		setFilter(filter){
			this.filter = filter
			console.log("eventHub recieved set-filter")
		}
	},
	

}
</script>
<style type="text/css">
#app{
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.header{
		text-align: center;
	}
</style>