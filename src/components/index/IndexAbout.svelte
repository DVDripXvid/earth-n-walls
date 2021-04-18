<script>
    import Button from "../../components/Button.svelte";
    import { t } from "../../translations/translation";
</script>

<div class="section-title">{t.index.aboutTitle}</div>
<article class="about-content">
    <div class="about-content_text">
        <div>
            {t.index.aboutText}
        </div>
        <Button path="/introduction" text={t.button.more} />
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
        margin-right: 6vw;
    }

    img {
        width: 30vw;
        object-fit: cover;
    }

    @media screen and (max-width: 900px) {
        .about-content {
            flex-direction: column;
        }

        img {
            width: 100%;
        }
    }
</style>
