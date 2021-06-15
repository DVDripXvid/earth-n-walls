<script lang="ts">
    import { t } from "../translations/translation";
    import { services } from "../data/services";
    import Page from "../components/Page.svelte";
    import { isLarge } from "../stores/mediaQuery";
</script>

<svelte:head>
    <title>{t.page.services}{t.fix.title}</title>
</svelte:head>

<Page>
    <section>
        {#each services as service}
            <div
                class="service"
                class:service--large={$isLarge}
                id={service.id}
            >
                <img
                    src={service.image}
                    alt=""
                    class="img"
                    class:img--large={$isLarge}
                />
                <div
                    class="service_texts"
                    class:service_texts--large={$isLarge}
                >
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
        flex-direction: column-reverse;
        padding-top: calc(var(--appbar-height) + 1rem);
    }
    .service--large {
        flex-direction: row;
    }
    .service:nth-child(even) {
        flex-direction: column-reverse;
    }
    .service--large:nth-child(even) {
        flex-direction: row-reverse;
    }
    .service:nth-child(even) div {
        margin-right: 0rem;
    }
    .service--large:nth-child(even) div {
        margin-right: 2rem;
        margin-left: 0rem;
    }
    .img {
        width: 100%;
        height: 20vh;
        object-fit: cover;
        margin-bottom: 2rem;
    }
    .img--large {
        width: 20vw;
    }
    .service_texts {
        margin-left: 0rem;
    }
    .service_texts--large {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
    .service_texts > :first-child {
        font-weight: bolder;
        text-transform: uppercase;
        color: var(--primary-color);
    }
</style>
