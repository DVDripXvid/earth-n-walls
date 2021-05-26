<script lang="ts">
    import { t } from "../translations/translation";
    import Page from "../components/Page.svelte";
    import { isLarge } from "../stores/mediaQuery";
</script>

<svelte:head>
    <title>{t.page.introduction}{t.fix.title}</title>
</svelte:head>

<Page>
    <section class="container" class:container--large={$isLarge}>
        <div class="profile" class:profile--large={$isLarge}>
            <img src="images/headshot.png" alt="profil" />
            <p class="name" class:name--large={$isLarge}>{t.intro.name}</p>
            <p class="ceo">{t.intro.ceo}</p>
        </div>
        <div class="introtext">{t.intro.introtext}</div>
    </section>
</Page>

<style>
    .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        padding: 1vh;
    }
    .container--large {
        display: flex;
        flex-direction: row;
    }

    .profile {
        display: flex;
        flex-direction: column;
        width: 15vw;
        margin-top: 7vh;
    }
    .profile--large {
        margin-top: 0;
    }
    p {
        margin: 0;
    }
    .name {
        font-weight: 900;
        font-size: 1.1rem;
    }
    .name--large {
        font-size: 1.5rem;
    }
    .introtext {
        margin-left: 10vw;
    }
</style>
