<script lang="ts">
    import { stores } from "@sapper/app";

    const { page } = stores();

    export let text: string;
    export let link: string;

    let highlightPath = false;

    $: highlightPath = $page.path && $page.path === link;
</script>

<a class:selected={highlightPath} href={link}>{text}</a>

<style>
    a {
        height: 100%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--menu-item-color);
        padding: 0 1vw;
    }
    a:hover {
        text-decoration: underline;
    }
    .selected {
        text-decoration: underline;
    }

    @media screen and (max-width: 900px) {
        a:hover {
            text-decoration: none;
        }
        .selected {
            text-decoration: none;
            background-color: var(--hovered-color);
        }
    }
</style>
