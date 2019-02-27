<template>
    <h3>Я - VUE</h3>
</template>
<script>
export default {
  created: function () {
      // console.log(this.$store.state.age)
  },
  computed: {
      username () {
        // Мы скоро разберём что такое `params`
        return this.$route.params.username
      },
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
