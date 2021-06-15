<script lang="ts">
    import { slide } from "svelte/transition";
    import { services } from "../../data/services";
    import { isLarge } from "../../stores/mediaQuery";
    import { t } from "../../translations/translation";
    import LinkButton from "../LinkButton.svelte";
    import SectionTitle from "../SectionTitle.svelte";

    let selectedService = services[0];
</script>

<SectionTitle text={t.index.servicesTitle} />
<article class="services-content" class:services-content--large={$isLarge}>
    <div
        class="services-content_categories"
        class:services-content_categories--large={$isLarge}
    >
        {#each services as service}
            <div
                class="categories-list"
                role="button"
                class:selected={selectedService === service}
                class:categories-list--large={$isLarge}
                on:click={() => {
                    selectedService =
                        selectedService === service && !$isLarge
                            ? null
                            : service;
                }}
            >
                {service.title}
            </div>

            {#if service === selectedService && !$isLarge}
                <div
                    class="services-content_description"
                    class:services-content_description--large={$isLarge}
                    transition:slide={{ duration: 500 }}
                >
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
    {#if selectedService && $isLarge}
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
        height: 100%;
        flex-direction: column;
    }
    .services-content--large {
        flex-direction: row;
        height: 300px;
    }
    .services-content_categories {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .services-content_categories--large {
        width: 40%;
    }
    .categories-list {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 1rem;
        justify-content: center;
        text-transform: uppercase;
        color: var(--primary-color);
        box-sizing: border-box;
        cursor: pointer;
    }
    .categories-list--large {
        justify-content: flex-start;
        padding-left: 1rem;
    }
    .categories-list:hover {
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
        width: 100%;
        box-sizing: border-box;
        padding: 1rem;
    }
    .services-content_description--large {
        width: 60%;
    }

    .services-content_description > :first-child {
        text-transform: uppercase;
        font-weight: bolder;
        color: var(--primary-color);
        overflow: hidden;
    }
</style>
