<template> 
	<div>
	<el-popover
  ref="popover4"
  placement="right"
  width="200"
  trigger="click">
   <p>{{todo.detail}}</p>
  </el-table>
</el-popover>
		<li :class="{complete:todo.completed}"  >
		 <el-checkbox v-model="todo.completed" >{{todo.title}} 
		 </el-checkbox>
		
		<i class="el-icon-close delete-icon"  @click="removeItem(index)"></i>
		<i class="el-icon-arrow-up totop-icon" :class="{show:this.filter=='all'}" @click="moveItemToTop(index)"></i>
		 <el-button type="primary" size="mini" class="detail-btn" v-popover:popover4>Detail</el-button>
		<el-button type="primary"  size="mini" icon="edit" class="edit-btn" @click="edit(index)" :class="{show:this.filter=='all'}"></el-button>
		</li>
	</div>
</template>
<script type="text/javascript">
import {eventHub} from './Event-hub.js'
	export default {
		 data() {
      return {
      };
    },
		props : ['todos','todo','index','filter'],
		methods : {
			removeItem(index){
				  this.$confirm('Are you sure to delete this item?', 'Warning', {
			          confirmButtonText: 'Confirm',
			          cancelButtonText: 'Cancel',
			          type: 'warning'
			        }).then(() => {
			        	this.todos.splice(index,1);
			          this.$message({
			            type: 'success',
			            message: 'Deleted'
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: 'Canceled'
			          });          
			        });
			},
			moveItemToTop(index){
				this.todos.unshift(this.todos[index])
				this.todos.splice(index+1,1)
			},
			edit(index){
				console.log(this.todos[index].title)
				console.log(this.todos[index].detail)
				console.log(index)
				eventHub.$emit('edit',this.todos[index].title,this.todos[index].detail,index)
			}
		}
	}
</script>

<style lang="sass" >
li{
		list-style-type: none;	
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        cursor: pointer;
  }
li.complete{
        span{
            text-decoration: line-through;
            color:#ddd;
        }
    }
.totop-icon{
	float:right;
	margin: 0 15px;
	visibility: hidden;
    opacity: 0.5;
}
.show:hover{
         opacity: 1;
     }
  li:hover .show{
     	visibility:visible;     
     }
.delete-icon{
	float: right;
	color:#FF0000;
    visibility: hidden;
    opacity: 0.5;
}
     .delete-icon:hover{
         opacity: 1;
     }
     li:hover .delete-icon{
     	visibility:visible;     
     }
 .detail-btn{
 	float:right;
 	span{
 	text-decoration: none!important;
 	color:#fff!important;
 }
 }
 .edit-btn{
 	visibility: hidden;
 	float:right;
 	margin-right: 10px!important;
 }
</style>