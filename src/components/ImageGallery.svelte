<script lang="ts">
    import { isLarge } from "../stores/mediaQuery";
    import type { IGalleryImage } from "../types";

    export let images: IGalleryImage[];

    let selectedPath: string | undefined;
</script>

<article class="gallery" class:gallery--large={$isLarge}>
    {#each images as image}
        <div
            class="container"
            class:container--selected={selectedPath === image.path}
            on:touchend={(ev) => {
                if (selectedPath !== image.path) {
                    ev.stopPropagation();
                    ev.preventDefault();
                }
                selectedPath = image.path;
            }}
            on:mouseover={() => {
                selectedPath = image.path;
            }}
            on:mouseleave={() => {
                selectedPath = undefined;
            }}
            class:container--large={$isLarge}
        >
            <img src={image.src} alt={image.name} />
            {#if image.path && selectedPath === image.path}
                <div class="link">
                    <a href={image.path}>{image.name}</a>
                </div>
            {/if}
        </div>
    {/each}
</article>

<style>
    .gallery {
        display: flex;
        flex-direction: column;
        height: var(--slideshow-image-height-vertical);
    }

    .gallery--large {
        flex-direction: row;
        height: var(--slideshow-image-height-horizontal);
    }

    .container {
        position: relative;
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
        border: 1px solid white;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }

    .gallery img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .container--selected {
        flex: 3;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }

    .container--selected > img {
        filter: none;
        transition: 0.8s;
    }

    .link {
        z-index: 999;
        display: flex;
        align-items: flex-end;
        position: absolute;
        width: 100%;
        height: 3rem;
        justify-content: center;
        bottom: 0;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        );
    }

    a {
        color: var(--light-text-color);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
