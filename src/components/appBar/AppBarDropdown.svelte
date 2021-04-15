<script lang="ts">
    import type { Link } from "../../types";
    export let items: Link[] = [];
</script>

<div class="menu-container">
    {#each items as item}
        <a href={item.path} class="menu-item">{item.name}</a>
    {/each}
</div>

<style>
    .menu-container {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: var(--appbar-height);
        z-index: 1;
    }

    .menu-item:hover {
        background-color: var(--hovered-color);
    }

    .menu-item {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        background-color: var(--primary-color);
        color: var(--menu-item-color);
        padding: 2vw 3vw;
        opacity: 90%;
    }

    @media screen and (orientation: portrait) {
        .menu-item {
            width: 100%;
        }
    }
</style>
