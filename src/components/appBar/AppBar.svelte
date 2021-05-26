<script lang="ts">
    import { t } from "../../translations/translation";
    import AppBarDropdown from "./AppBarDropdown.svelte";
    import Fa from "svelte-fa";
    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import { stores } from "@sapper/app";
    import { isLarge, isMedium } from "../../stores/mediaQuery";

    const { page } = stores();

    let scrollY;
    let isDropdownOpen = false;

    const routes = [
        {
            path: "/",
            name: t.page.home,
        },
        {
            path: "/introduction",
            name: t.page.introduction,
        },
        {
            path: "/services",
            name: t.page.services,
        },
        {
            path: "/references",
            name: t.page.references,
        },
        {
            path: "/contact",
            name: t.page.contact,
        },
    ];

    $: activeRoute = routes.find((route) => $page.path === route.path);
</script>

<svelte:window bind:scrollY />

<div
    class="navbar"
    style="background-color: rgba(48, 64, 80, {scrollY / 100})"
    class:navbar--small={!$isLarge}
>
    <a href="/">
        <img
            id="logo"
            class="navbar_logo"
            src="logo_horizontal_white.png"
            alt="logo"
            width="150px"
        />
    </a>
    <div
        class="navbar_menu-container"
        class:navbar_menu-container--large={$isLarge}
    >
        {#each routes as route}
            <div class:selected={activeRoute.path === route.path}>
                <a href={route.path}>{route.name}</a>
            </div>
        {/each}
    </div>
    <div
        class="navbar_menu-icon"
        class:navbar_menu-icon--large={$isLarge}
        on:click={() => {
            isDropdownOpen = !isDropdownOpen;
        }}
    >
        <Fa icon={faBars} size="2x" color="var(--menu-item-color)" />
    </div>
</div>

<div class="slider-wrapper">
    <div
        class="slider"
        class:slider--medium={$isMedium}
        class:slider--large={$isLarge}
    >
        <p>{t.slider.line1}</p>
        <p>{t.slider.line2}</p>
    </div>
</div>

{#if isDropdownOpen}
    <div
        class="dropdown"
        class:dropdown--large={$isLarge}
        on:click={() => {
            isDropdownOpen = !isDropdownOpen;
        }}
    >
        <AppBarDropdown items={routes} activePath={activeRoute.path} />
    </div>
{/if}

<style>
    /* -------NAVBAR------- */
    .navbar {
        position: fixed;
        width: 100%;
        height: var(--appbar-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }
    .navbar--small {
        background-color: var(--primary-color) !important;
    }
    .navbar_logo {
        object-fit: contain;
        margin-left: 5vw;
    }
    .navbar_menu-container {
        display: none;
    }
    .navbar_menu-container--large {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 5vw;
    }

    a {
        height: 100%;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--menu-item-color);
        padding: 0 1vw;
    }

    .selected {
        border-bottom: 3px solid white;
    }
    .navbar_menu-icon {
        display: block;
        cursor: pointer;
        margin-right: 5vw;
    }
    .navbar_menu-icon--large {
        display: none;
    }

    /* -------SLIDER------- */
    .slider-wrapper {
        display: flex;
        justify-content: center;
        user-select: none;
    }
    .slider {
        position: absolute;
        background-color: var(--slider-background);
        color: var(--light-text-color);
        margin-top: 20vh;
    }
    .slider p {
        text-align: center;
        text-transform: uppercase;
        font-size: 8vw;
    }
    .slider--medium p {
        font-size: 6vw;
    }
    .slider--large p {
        font-size: 4vw;
    }
    .slider > :first-child {
        font-weight: 100;
        margin: 1vw 2vw 0 2vw;
    }
    .slider > :last-child {
        font-weight: 900;
        margin: 0 2vw 1vw 2vw;
    }

    /* -------DROPDOWN------- */
    .dropdown {
        display: block;
    }
    .dropdown--large {
        display: none;
    }
</style>
