<script lang="ts">
    import AppBar from "../components/appBar/AppBar.svelte";
    import { t } from "../translations/translation";
</script>

<nav>
    <AppBar />
</nav>

<main>
    <div class="gradient" />
    <img src="images/coverimage.jpg" alt="cover" />
    <slot />
</main>

<footer>{t.footer.text}</footer>

<style>
    img {
        object-fit: cover;
        width: 100%;
        max-height: 70vh;
    }
    .gradient {
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

    footer {
        height: 10vh;
        text-align: center;
        font-size: 1.2rem;
        background-color: var(--primary-color);
        color: var(--light-text-color);
        padding: 1rem;
    }

    @media screen and (max-width: 900px) {
        /* ezeknél a 900px lehetne változó */

        .gradient {
            display: none;
        }
    }
</style>
