<script>
    import AppBar from "../components/AppBar.svelte";
</script>

<nav>
    <AppBar />
</nav>
<main>
    <img src="images/boritokep.jpg" alt="borítókép" />
    <slot />
</main>

<style>
    main {
        height: 100vh;
    }
    img {
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
</style>
