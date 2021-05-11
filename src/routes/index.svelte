<script lang="ts">
    import { t } from "../translations/translation";
    import IndexAbout from "../components/index/IndexAbout.svelte";
    import IndexServices from "../components/index/IndexServices.svelte";
    import IndexReferences from "../components/index/IndexReferences.svelte";
    import Page from "../components/Page.svelte";
</script>

<svelte:head>
    <title>{t.page.home}{t.fix.title}</title>
</svelte:head>

<Page>
    <IndexAbout />
    <IndexServices />
    <IndexReferences />
</Page>
