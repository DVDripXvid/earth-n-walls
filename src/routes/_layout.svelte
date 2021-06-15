<script lang="ts">
    import AppBar from "../components/appBar/AppBar.svelte";
    import Footer from "../components/Footer.svelte";
    import { isLarge } from "../stores/mediaQuery";
</script>

<nav>
    <AppBar />
</nav>

<main>
    <div class="gradient" class:gradient--large={$isLarge} />
    <img src="images/coverimage.jpg" alt="cover" />
    <slot />
</main>

<Footer />

<style>
    img {
        object-fit: cover;
        width: 100%;
        max-height: 70vh;
    }
    .gradient {
        display: none;
    }
    .gradient--large {
        display: block;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: calc(var(--appbar-height) * 2);
        background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0),
            rgb(0, 0, 0, 0.7)
        );
    }
</style>
