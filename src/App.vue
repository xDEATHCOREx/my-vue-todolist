<template>
<div id="app">
	<el-card class="box-card">
	 <div slot="header" class="clearfix header">
    {{mainTitle}} 
  </div>
	<todo-input :editTitle="editTitle" :editDetail="editDetail" :editIndex="editIndex"></todo-input>
	<todo-list :todos="todos" :filter="filter"></todo-list>
	<todo-filter></todo-filter>
	</el-card>
	<p>{{this.editTitle}}</p>
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
			mainTitle: 'My Vue Todo List',
			todos:Storage.getTodoList(),
			filter :'all',
			editTitle:'',
			editDetail:'',
			editIndex:''
		}
	},
	created(){
		eventHub.$on('add-new',this.addNewTodo)
		eventHub.$on('set-filter',this.setFilter)
		eventHub.$on('edit',this.edit)
		eventHub.$on('edit-confirm',this.editConfirm)
		},
	//watch是一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象
    //发现对象内部值的变化，可以在选项参数中指定 deep: true
	watch : {
        todos : {
            deep: true,
            handler: Storage.store

        }
    },
	components:{
		TodoInput,
		TodoList,
		TodoFilter
	},
	methods :{
		addNewTodo(todoTitle,todoDetail,index){
			console.log("now" +index)
			if(index!==''){ //index非空，即點了edit
			this.$set(this.todos,index,{
					title : todoTitle ,
					detail : todoDetail,
					completed : false
				})
			this.editIndex='' //修改完后index置空
		}else if(todoTitle){ //index空，新建
				console.log("test addnew"+todoTitle)
				this.todos.push({
					title : todoTitle ,
					detail : todoDetail,
					completed : false
				})
				Storage.store(this.todos)
				
			}
		},
		setFilter(filter){
			this.filter = filter
			console.log("eventHub recieved set-filter")
		},
		edit(editTitle,editDetail,editIndex){
			console.log("edit123")
			this.editTitle = editTitle
			this.editDetail = editDetail
			this.editIndex = editIndex
		},
		editConfirm(){
			console.log("empty edit")
			this.editTitle = ''
			this.editDetail = ''
			this.editIndex = ''
		},
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