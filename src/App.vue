<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
  import Layout from "./views/Layout.vue"

  export default {
    components: {
      Layout
    }
  }
</script>

<style>
#app{
  text-align: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background: black;
}
</style>
