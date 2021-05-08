<script lang="ts">
    import LinkButton from "../LinkButton.svelte";
    import { t } from "../../translations/translation";
    import { onMount } from "svelte";
    import SectionTitle from "../SectionTitle.svelte";
    import { services } from "../../data/services";

    let largeScreen: boolean;
    onMount(() => {
        const mediaQuery = window.matchMedia("(min-width: 900px)");
        largeScreen = mediaQuery.matches;
        mediaQuery.addEventListener("change", function (ev) {
            largeScreen = ev.matches;
        });
    });

    let selectedService = services[0];
</script>

<SectionTitle text={t.index.servicesTitle} />
<article class="services-content">
    <div class="services-content_categories">
        {#each services as service}
            <div
                id="categories-list"
                role="button"
                class:selected={selectedService === service}
                on:click={() => {
                    selectedService =
                        selectedService === service && !largeScreen
                            ? null
                            : service;
                }}
            >
                {service.title}
            </div>

            {#if service === selectedService && !largeScreen}
                <div class="services-content_description">
                    <p>{service.title}</p>
                    <p>
                        {service.description}
                    </p>
                    <LinkButton
                        path={service.path.concat("#" + selectedService.id)}
                        text={t.button.more}
                    />
                </div>
            {/if}
        {/each}
    </div>
    {#if selectedService && largeScreen}
        <div class="services-content_description">
            <p>{selectedService.title}</p>
            <p>
                {selectedService.description}
            </p>
            <LinkButton
                path={selectedService.path.concat("#" + selectedService.id)}
                text={t.button.more}
            />
        </div>
    {/if}
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
    #categories-list {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-transform: uppercase;
        color: var(--primary-color);
        padding-left: 1rem;
        box-sizing: border-box;
        cursor: pointer;
    }
    #categories-list:hover {
        background-color: var(--hovered-color);
        color: var(--light-text-color);
    }
    .selected {
        background-color: var(--primary-color);
        color: var(--light-text-color) !important;
    }
    .selected:hover {
        background-color: var(--primary-color) !important;
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
        #categories-list {
            padding: 1rem;
            justify-content: center;
        }
        .services-content_description {
            width: 100%;
            box-sizing: border-box;
            flex-direction: column;
        }
    }
</style>
