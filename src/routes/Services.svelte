<script lang="ts">
    import { t } from "../translations/translation";
    import { services } from "../data/services";
    import Page from "../components/Page.svelte";
</script>

<svelte:head>
    <title>{t.page.services}{t.fix.title}</title>
</svelte:head>

<Page>
    <section>
        {#each services as service}
            <div class="service" id={service.id}>
                <img src={service.image} alt="" />
                <div class="service_texts">
                    <p>{service.title}</p>
                    <p>{service.text}</p>
                </div>
            </div>
        {/each}
    </section>
</Page>

<style>
    .service {
        display: flex;
        padding-top: calc(var(--appbar-height) + 1rem);
    }

    .service:nth-child(even) {
        flex-direction: row-reverse;
    }

    .service:nth-child(even) div {
        margin-right: 2rem;
        margin-left: 0rem;
    }

    img {
        width: 20vw;
        margin-bottom: 2rem;
        object-fit: cover;
    }
    .service_texts {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }

    .service_texts > :first-child {
        font-weight: bolder;
        text-transform: uppercase;
        color: var(--primary-color);
    }

    @media screen and (max-width: 900px) {
        .service {
            flex-direction: column-reverse;
        }
        .service:nth-child(even) {
            flex-direction: column-reverse;
        }
        .service:nth-child(even) div {
            margin-right: 0rem;
        }
        .service_texts {
            margin-left: 0rem;
        }
        img {
            width: 100%;
            height: 20vh;
        }
    }
</style>
