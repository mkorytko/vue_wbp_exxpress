<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script>
  export default {
    components: {
      Layout: () => import("./views/Layout.vue"),
    }
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
