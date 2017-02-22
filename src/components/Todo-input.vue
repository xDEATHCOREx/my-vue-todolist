<template>
<div>
	<el-input 
	placeholder ="Write title here" 
	v-model.trim="title"
	@keyup.enter.native="addNew"
	ref="todoInput"
	class="input">{{this.editTitle}}</el-input>
	<el-input 
	placeholder ="Write detail here then press ENTER" 
	v-model.trim="detail"
	@keyup.enter.native="addNew"
	ref="todoInput"
	class="input"
	></el-input>
</div>
</template>
<script type="text/javascript">
import {eventHub} from './Event-hub.js'
	export default{
		data(){
			return{
				title :'',
				detail:'',
				index:''
			}
		},
		props:['editTitle','editDetail','editIndex'],
		watch : {
	        editTitle : {
	            deep: true,
	            handler: function(){
	            this.title = this.editTitle	
	            this.detail = this.editDetail    
	            this.index = this.editIndex           
				console.log(" edit change")
			}
		},
			editDetail : {
	            deep: true,
	            handler: function(){
	             this.title = this.editTitle	  
	            this.detail = this.editDetail   
	            this.index = this.editIndex              
				console.log(" edit change")
			}
	      },
    	},
		methods :{
			addNew(){
				//输入子组件的数据emit提交到eventhub中，根据方法名选择对应的方法函数在父组件进行处理
				if(this.title){
					eventHub.$emit('add-new',this.title,this.detail,this.index)
					this.title=''
					this.detail=''
					this.index = '' //新建todo后需要置空
					this.$message({
	          			message: 'Success',
	         			duration: 1000,
	         			type: 'success'
	       			 });
					this.confirmed()
				} else	{
					this.$message.error('title must be filled')
				}
			},
			confirmed(){
				console.log("enter confirm")
				eventHub.$emit('edit-confirm')
			}
		},
	}
</script>
<style type="text/css">
.input{
	margin-bottom: 5px;
}
</style>