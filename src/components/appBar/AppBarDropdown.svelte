<script lang="ts">
    import type { Link } from "../../types";
    export let items: Link[] = [];
    export let activePath: string;
</script>

<div class="menu-container">
    {#each items as item}
        <div class="menu-item" class:selected={activePath === item.path}>
            <a href={item.path}>{item.name}</a>
        </div>
    {/each}
</div>

<style>
    .menu-container {
        position: fixed;
        width: 50%;
        display: flex;
        flex-direction: column;
        right: 0px;
        text-align: center;
        background-color: var(--primary-color);
        margin-top: var(--appbar-height);
        z-index: 1;
        opacity: 90%;
    }

    .menu-item:hover,
    .selected {
        background-color: var(--hovered-color);
    }

    .menu-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--menu-item-color);
        padding: 2vw 3vw;
    }

    @media screen and (orientation: portrait) {
        .menu-container {
            width: 100%;
        }
    }
</style>
