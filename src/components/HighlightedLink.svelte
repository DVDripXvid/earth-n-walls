<script>
    import { stores } from "@sapper/app";

    const { page } = stores();

    export let highlight;
    export let segment;
    export let text = "text here";
    export let link;
    export let target;

    let highlightPath = false;

    $: highlightPath =
        $page.path &&
        highlight &&
        ($page.path.includes(highlight) || $page.path.includes(link));
</script>

<a class:selected={highlightPath} href={link}>{text}</a>

<style>
    .selected {
        position: relative;
        display: inline-block;
        text-decoration: none;
    }
    .selected::after {
        position: absolute;
        content: "";
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
    }
    a {
        padding-left: 10px;
    }
</style>
