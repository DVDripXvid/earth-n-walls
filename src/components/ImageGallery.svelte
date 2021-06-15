<script lang="ts">
    import type { IGalleryImage } from "../types";
    import { isLarge } from "../stores/mediaQuery";
    export let images: IGalleryImage[];
</script>

<article class="gallery" class:gallery--large={$isLarge}>
    {#each images as image}
        <div class="container" class:container--large={$isLarge}>
            <img src={image.src} alt={image.name} />
            {#if image.path}
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

    .container:hover,
    .container:active {
        flex: 3;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }
    .gallery img:hover {
        filter: none;
        transition: 0.8s;
    }

    .link {
        display: none;
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
    .container:active .link,
    .container:hover .link {
        display: flex;
        align-items: flex-end;
    }

    a {
        color: var(--light-text-color);
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
