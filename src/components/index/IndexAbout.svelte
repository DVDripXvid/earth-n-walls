<script lang="ts">
    import LinkButton from "../LinkButton.svelte";
    import { t } from "../../translations/translation";
    import SectionTitle from "../SectionTitle.svelte";
    import { isLarge } from "../../stores/mediaQuery";
</script>

<SectionTitle text={t.index.aboutTitle} />
<article class="about-content" class:about-content--large={$isLarge}>
    <div class="about-content_text" class:about-content_text--large={$isLarge}>
        <div>
            {t.index.aboutText}
        </div>
        <LinkButton path="/introduction" text={t.button.more} />
    </div>
    <img
        class="image"
        class:image--large={$isLarge}
        src="images/video.jpg"
        alt="introduction"
    />
</article>

<style>
    .about-content {
        display: flex;
        flex-direction: column;
    }
    .about-content--large {
        flex-direction: row;
    }
    .about-content_text {
        margin-right: 0vw;
    }
    .about-content_text--large {
        margin-right: 5vw;
    }
    .image {
        width: 100%;
        object-fit: cover;
    }
    .image--large {
        width: 30vw;
    }
</style>
