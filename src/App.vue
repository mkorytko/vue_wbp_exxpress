<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
  }
</script>

<style lang="scss">
#app{
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $colorMain;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
