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
<<<<<<< HEAD
import appService from '../app.service.js'
=======
import appService from './app.service.js';
>>>>>>> 60d56cffc52dfbe5f8003948a924c169131fb3ce
export default {
  name: 'app',
  components: {
    HelloWorld,
  },
<<<<<<< HEAD
  methods:{
    loadPosts(){
      appService.getPosts().then
      (data =>{
        this.posts=data
      })
=======
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
>>>>>>> 60d56cffc52dfbe5f8003948a924c169131fb3ce
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
