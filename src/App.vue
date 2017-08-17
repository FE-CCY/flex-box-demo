<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/">Flexible Box Layout</router-link>
      <router-link to="/example">Mobile Example</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
*{
  padding: 0; 
  margin: 0;
}
input,select,button{
  outline:none
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 18px;

}
.nav{
  height: 48px;
  background: #f1f1f1;
  display: flex;
  a{
    text-decoration: none;
    flex: 1;
    text-align: center;
    color: #555;
    line-height: 48px;
    &.router-link-exact-active{
      color: #ea6b18;
    }
  }
}
</style>
