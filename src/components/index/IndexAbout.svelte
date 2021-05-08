<script lang="ts">
    import LinkButton from "../LinkButton.svelte";
    import { t } from "../../translations/translation";
    import SectionTitle from "../SectionTitle.svelte";
</script>

<SectionTitle text={t.index.aboutTitle} />
<article class="about-content">
    <div class="about-content_text">
        <div>
            {t.index.aboutText}
        </div>
        <LinkButton path="/introduction" text={t.button.more} />
    </div>
    <img src="images/video.jpg" alt="introduction" />
</article>

<style>
    .about-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .about-content_text {
        margin-right: 5vw;
    }

    img {
        width: 30vw;
        object-fit: cover;
    }

    @media screen and (max-width: 900px) {
        .about-content {
            flex-direction: column;
        }

        .about-content_text {
            margin-right: 0vw;
        }

        img {
            width: 100%;
        }
    }
</style>
