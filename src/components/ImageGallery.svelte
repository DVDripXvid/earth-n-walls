<script lang="ts">
    import type { IGalleryImage } from "../models/gallery";
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
        display: flex;
    }
    .gallery a {
        flex: 1;
        overflow: hidden;
        border: 1px solid white;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }
    .gallery img {
        height: var(--slideshow-image-height-horizontal);
        width: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .gallery a:hover {
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
            height: 15vh;
            width: 100%;
            overflow: hidden;
            border: 1px solid white;
            transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .gallery a:hover {
            height: 50vh;
            width: 100%;
            transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
        }
    }
    @media screen and (orientation: portrait) {
        .gallery a:hover {
            height: 30vh;
        }
    }
</style>
