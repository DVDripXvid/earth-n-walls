<script lang="ts">
    import { isSmall } from "../../stores/mediaQuery";
    import type { ILink } from "../../types";

    export let items: ILink[] = [];
    export let activePath: string;
</script>

<div class="menu-container" class:menu-container-half-width={$isSmall}>
    {#each items as item}
        <div class:selected={activePath === item.path}>
            <a href={item.path}>{item.name}</a>
        </div>
    {/each}
</div>

<style>
    .menu-container {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: column;
        right: 0px;
        text-align: center;
        background-color: var(--primary-color);
        margin-top: var(--appbar-height);
        z-index: 1;
        opacity: 90%;
    }

    .menu-container-half-width {
        width: 50%;
    }

    a:hover:hover,
    .selected {
        background-color: var(--hovered-color);
    }

    a {
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
</style>
