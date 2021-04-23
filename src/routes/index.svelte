<script lang="ts">
    import { t } from "../translations/translation";
    import IndexAbout from "../components/index/IndexAbout.svelte";
    import IndexServices from "../components/index/IndexServices.svelte";
    import IndexReferences from "../components/index/IndexReferences.svelte";
</script>

<svelte:head>
    <title>{t.page.home}{t.fix.title}</title>
</svelte:head>

<section>
    <IndexAbout />
    <IndexServices />
    <IndexReferences />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        margin: 2vw 20vw;
    }
</style>
