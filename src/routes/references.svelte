<script lang="ts">
    import { t } from "../translations/translation";
    import { references } from "../data/references";
    import SectionTitle from "../components/SectionTitle.svelte";
    import ImageGallery from "../components/ImageGallery.svelte";
    import Page from "../components/Page.svelte";
</script>

<svelte:head>
    <title>{t.page.references}{t.fix.title}</title>
</svelte:head>

<Page>
    <section>
        {#each references as ref}
            <div class="reference" id={ref.id}>
                <SectionTitle text={ref.title} />
                <p class="reference_text">{ref.text}</p>
                <ImageGallery
                    images={ref.images.map((src) => ({ src, alt: ref.id }))}
                />
            </div>
        {/each}
    </section>
</Page>

<style>
    .reference {
        display: flex;
        flex-direction: column;
    }
</style>
