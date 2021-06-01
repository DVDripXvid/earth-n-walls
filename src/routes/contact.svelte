<script lang="ts">
    import { t } from "../translations/translation";
    import Page from "../components/Page.svelte";
    import SectionTitle from "../components/SectionTitle.svelte";
    import Fa from "svelte-fa";
    import { faFacebook } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
    <title>{t.page.contact}{t.fix.title}</title>
</svelte:head>

<Page>
    <section>
        <SectionTitle text={t.contact.title} />
        <div class="info">
            <p>
                <Fa icon={faFacebook} size="2x" color="#304050" />
                <a
                    href="https://www.facebook.com/Gipszkartonozom"
                    target="_blank">facebook/earthandwalls</a
                >
            </p>
            <p>
                <Fa icon={faEnvelope} size="2x" color="#304050" />
                <a href="mailto:info@earthandwalls.com"
                    >info@earthandwalls.com</a
                >
            </p>
            <p>
                <Fa icon={faPhone} size="2x" color="#304050" />
                <a href="tel:+36703077997">+36 70 307 7997</a>
            </p>
        </div>
    </section>
</Page>

<style>
    .info {
        display: flex;
        flex-direction: column;
        gap: 5vh;
    }
    p {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    a {
        color: #304050;
        text-decoration: none;
        font-size: clamp(1rem, 2.5vw, 2rem);
    }
</style>
