<script>
    import { t } from "../translations/translation";
</script>

<section class="container">
    <div class="profile">
        <img src="images/headshot.png" alt="profil" />
        <p class="name">{t.intro.name}</p>
        <p class="ceo">{t.intro.ceo}</p>
    </div>
    <div class="introtext">{t.intro.introtext}</div>
</section>

<style>
    .container {
        display: flex;
        flex-direction: row;
        margin: 2vw 20vw;
    }
    .profile {
        display: flex;
        flex-direction: column;
        width: 20vw;
    }
    p {
        margin: 0;
    }
    .name {
        font-weight: 900;
        font-size: 1.5rem;
    }
    .introtext {
        padding: 3vw;
    }
</style>
