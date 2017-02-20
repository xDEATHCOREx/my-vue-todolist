<template> 
	<div>
		<li :class="{complete:todo.completed}">
		<input type="checkbox" v-model="todo.completed"></input>
		<span>{{todo.value}} {{todo.completed}} index{{index}}</span>
		<i @click="removeItem(index)">delete</i>
		</li>
		
	</div>
</template>
<script type="text/javascript">
	export default {
		props : ['todos','todo','index'],
		methods : {
			removeItem(index){
				this.todos.splice(index,1)
			}
		}
	}
</script>

<style lang="sass">
li{
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
i{
	float: right;
	margin-right: 15px;
	color:#f7BC3A;
    display: none;
    opacity: 0.5;
}
     i:hover{
         opacity: 1;

     }
     li:hover i{
         display: inline-block;
     }
</style>