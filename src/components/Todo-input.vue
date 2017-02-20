<template>
<div>
	<input 
	placeholder ="heyy test" 
	v-model.trim="todoItem"
	@keyup.enter="addNew"
	ref="todoInput"
	></input>
</div>
</template>
<script type="text/javascript">
import {eventHub} from './Event-hub.js'
	export default{
		data(){
			return{
				todoItem :''
			}
		},
		methods :{
			addNew(){
				//输入子组件的数据emit提交到eventhub中，根据方法名选择对应的方法函数在父组件进行处理
				eventHub.$emit('add-new',this.todoItem)
				this.todoItem=''
			}
		},
	}
</script>
<style type="text/css">
	
</style>