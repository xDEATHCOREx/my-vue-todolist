<template> 
	<div class="filter">
		<el-button-group>
		<el-button @click="setFilter('all')">All</el-button>
		<el-button @click="setFilter('todo')">Todo</el-button>
		<el-button @click="setFilter('completed')">Completed</el-button>
		</el-button-group>
	</div>
</template>
<script type="text/javascript">
import {eventHub} from './Event-hub.js'
	export default {
		methods : {
			setFilter(filter){
				console.log("filter "+filter+" clicked")
				eventHub.$emit('set-filter',filter)
			}
		}
	}
</script>
<style type="text/css"></style>