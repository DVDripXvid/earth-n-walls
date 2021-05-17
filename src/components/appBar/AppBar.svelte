<script lang="ts">
    import { t } from "../../translations/translation";
    import AppBarDropdown from "./AppBarDropdown.svelte";
    import Fa from "svelte-fa";
    import { faBars } from "@fortawesome/free-solid-svg-icons";
    import HighlightedLink from "../HighlightedLink.svelte";

    import { stores } from "@sapper/app";

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

<div class="navbar" style="background-color: rgba(48, 64, 80, {scrollY / 100})">
    <a href="/">
        <img
            id="logo"
            class="navbar_logo"
            src="logo_horizontal_white.png"
            alt="logo"
            width="150px"
        />
    </a>
    <div class="navbar_menu-container">
        {#each routes as route}
            <HighlightedLink text={route.name} link={route.path} />
        {/each}
    </div>
    <div
        class="navbar_menu-icon"
        on:click={() => {
            isDropdownOpen = !isDropdownOpen;
        }}
    >
        <Fa icon={faBars} size="2x" color="var(--menu-item-color)" />
    </div>
</div>

<div class="slider-wrapper">
    <div class="slider" style="transform: translateY({scrollY * 0.4}px)">
        <p>{t.slider.line1}</p>
        <p>{t.slider.line2}</p>
    </div>
</div>

{#if isDropdownOpen}
    <div
        class="dropdown"
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
    .navbar_logo {
        object-fit: contain;
        margin-left: 5vw;
    }
    .navbar_menu-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 5vw;
    }

    .navbar_menu-icon {
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
        display: none;
    }

    /* --------------BREAKPOINT-------------- */

    @media screen and (max-width: 900px) {
        /* -------NAVBAR------- */
        .navbar {
            background-color: var(--primary-color) !important;
        }
        .navbar_menu-container {
            display: none;
        }

        .navbar_menu-icon {
            display: block;
            cursor: pointer;
            margin-right: 5vw;
        }

        /* -------SLIDER------- */
        .slider p {
            font-size: 6vw;
        }

        /* -------DROPDOWN------- */
        .dropdown {
            display: block;
        }
    }

    /* --------------BREAKPOINT-------------- */

    @media screen and (orientation: portrait) {
        .slider {
            margin-top: 15vh;
        }

        .slider p {
            font-size: 8vw;
        }
    }
</style>
