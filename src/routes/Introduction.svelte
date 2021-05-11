<script lang="ts">
    import { t } from "../translations/translation";
    import Page from "../components/Page.svelte";
</script>

<svelte:head>
    <title>{t.page.introduction}{t.fix.title}</title>
</svelte:head>

<Page>
    <section class="container">
        <div class="profile">
            <img src="images/headshot.png" alt="profil" />
            <p class="name">{t.intro.name}</p>
            <p class="ceo">{t.intro.ceo}</p>
        </div>
        <div class="introtext">{t.intro.introtext}</div>
    </section>
</Page>

<style>
    .container {
        display: flex;
        flex-direction: row;
    }

    .profile {
        display: flex;
        flex-direction: column;
        width: 15vw;
    }
    p {
        margin: 0;
    }
    .name {
        font-weight: 900;
        font-size: 1.5rem;
    }
    .introtext {
        margin-left: 10vw;
    }

    @media screen and (max-width: 900px) {
        .container {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            padding: 1vh;
        }
        .profile {
            margin-top: 7vh;
        }
        .name {
            font-size: 1.1rem;
        }
    }
</style>
