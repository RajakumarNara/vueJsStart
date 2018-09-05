<template>
  <div id="app">
<button v-on:click="loadPosts">OData</button>    
    <ul>
    <li v-for="post in posts.value">
    {{post}}
    </li>
    </ul>
    <hr/>
    <ul>
    <li v-for="(v,k,i) in posts">
    {{i}}: {{k}} - {{v}}
    </li>
    </ul>
<hr/>
 

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import appService from './app.service.js';
export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data(){
    return{
      posts:[]
    }
  },
  methods:{
    loadPosts:function(){
      
      appService.getPosts().then(data =>{
        this.posts=data
      })
      
      alert(posts);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
