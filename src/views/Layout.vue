<template>
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <router-view />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<script>

    export default {
        components:{
            Header: () => import("../components/Header.vue"),
            Footer: () => import("../components/Footer.vue"),
        }
        
    }
</script>
<style scoped>

</style>
