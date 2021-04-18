<script>
    import { t } from "../../translations/translation";

    let images = [
        {
            path: "/references",
            src: "images/reference1.jpg",
            alt: "reference1",
        },
        {
            path: "/references",
            src: "images/reference2.jpg",
            alt: "reference2",
        },
        {
            path: "/references",
            src: "images/reference3.jpg",
            alt: "reference3",
        },
        {
            path: "/references",
            src: "images/reference1.jpg",
            alt: "reference4",
        },
        {
            path: "/references",
            src: "images/reference2.jpg",
            alt: "reference5",
        },
        {
            path: "/references",
            src: "images/reference3.jpg",
            alt: "reference6",
        },
    ];
</script>

<div class="section-title">{t.index.referencesTitle}</div>
<article class="references-content">
    {#each images as image}
        <a href={image.path}> <img src={image.src} alt={image.alt} /> </a>
    {/each}
</article>

<style>
    .references-content {
        display: flex;
    }
    .references-content a {
        width: 20%;
        overflow: hidden;
        border: 1px solid white;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }
    .references-content img {
        height: var(--slideshow-image-height-horizontal);
        width: 100%;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .references-content a:hover {
        width: 900px;
        transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
    }
    .references-content img:hover {
        filter: none;
        transition: 0.8s;
    }

    @media screen and (max-width: 900px) {
        .references-content {
            flex-direction: column;
            height: var(--slideshow-image-height-vertical);
        }
        .references-content a {
            height: 15vh;
            width: 100%;
            overflow: hidden;
            border: 1px solid white;
            transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .references-content a:hover {
            height: 50vh;
            width: 100%;
            transition: 0.8s cubic-bezier(0.37, 0.05, 0.27, 0.99);
        }
    }
    @media screen and (orientation: portrait) {
        .references-content a:hover {
            height: 30vh;
        }
    }
</style>
