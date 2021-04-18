<script>
    import Button from "../../components/Button.svelte";
    import { t } from "../../translations/translation";

    let services = [
        {
            path: "/services",
            name: t.index.servicesName1,
            description: t.index.servicesDescription1,
        },
        {
            path: "/services",
            name: t.index.servicesName1,
            description: t.index.servicesDescription1,
        },
        {
            path: "/services",
            name: t.index.servicesName1,
            description: t.index.servicesDescription1,
        },
        {
            path: "/services",
            name: t.index.servicesName1,
            description: t.index.servicesDescription1,
        },
        {
            path: "/services",
            name: t.index.servicesName1,
            description: t.index.servicesDescription1,
        },
    ];

    // let largeScreen;
    // onMount(() => {
    //     largeScreen = window.matchMedia("(min-width: 900px)");
    // });
</script>

<div class="section-title">{t.index.servicesTitle}</div>
<article class="services-content">
    <div class="services-content_categories">
        {#each services as service}
            <a
                href="/"
                on:click={() => {
                    service.selected = !service.selected;
                }}
            >
                {service.name}
            </a>

            {#if service.selected}
                <div class="services-content_description">
                    <p>{service.name}</p>
                    <p>
                        {service.description}
                    </p>
                    <Button path={service.path} text={t.button.more} />
                </div>
            {/if}
        {/each}
    </div>
</article>

<style>
    .services-content {
        display: flex;
        background-color: var(--light-background);
        width: 100%;
        height: 300px;
    }
    .services-content_categories {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .services-content_categories a {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--primary-color);
        padding-left: 1rem;
        box-sizing: border-box;
    }
    .services-content_categories a:hover {
        background-color: var(--hovered-color);
        color: var(--light-text-color);
    }
    .services-content_categories a:focus {
        background-color: var(--primary-color);
        color: white;
    }
    .services-content_description {
        width: 60%;
        padding: 1rem;
    }
    .services-content_description > :first-child {
        text-transform: uppercase;
        font-weight: bolder;
        color: var(--primary-color);
        overflow: hidden;
    }

    @media screen and (max-width: 900px) {
        .services-content {
            height: 100%;
            flex-direction: column;
        }
        .services-content_categories {
            width: 100%;
        }
        .services-content_categories a {
            padding: 1rem;
            justify-content: center;
        }
        .services-content_description {
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>
