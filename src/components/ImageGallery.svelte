<script lang="ts">
    import type { IGalleryImage } from "../types";
    export let images: IGalleryImage[];
</script>

<article class="gallery">
    {#each images as image}
        <a href={image.path}>
            <img src={image.src} alt={image.alt} />
        </a>
    {/each}
</article>

<style>
    .gallery {
        height: var(--slideshow-image-height-horizontal);
        display: flex;
    }
    .gallery a {
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

    .gallery a:hover,
    .gallery a:active {
        flex: 3;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }
    .gallery img:hover {
        filter: none;
        transition: 0.8s;
    }

    @media screen and (max-width: 900px) {
        .gallery {
            flex-direction: column;
            height: var(--slideshow-image-height-vertical);
        }
        .gallery a {
            width: 100%;
        }
    }
</style>
