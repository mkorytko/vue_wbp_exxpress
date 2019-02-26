<template>
    <div>
        Header<br/>
        <NavigateMenu />
    </div>
</template>
<script>
    export default {
        components: {
            NavigateMenu: () => import("../components/NavigateMenu.vue"),
        }
    }
</script>
<style scoped>

</style>



