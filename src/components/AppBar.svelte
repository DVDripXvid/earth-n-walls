<script>
    import { t } from "../translations/translation";

    if (typeof window !== "undefined") {
        window.addEventListener(
            "scroll",
            () => {
                document.body.style.setProperty(
                    "--scroll",
                    window.pageYOffset /
                        (document.body.offsetHeight - window.innerHeight)
                );
            },
            false
        );
    }
</script>

<div class="bar">
    <img src="logo_horizontal_white.png" alt="logo" width="150px" />
    <div class="menu-container">
        <a href=" " class="menu-item">{t.page.home}</a>
        <a href="Introduction" class="menu-item">{t.page.introduction}</a>
        <a href="Services" class="menu-item">{t.page.services}</a>
        <a href="References" class="menu-item">{t.page.references}</a>
        <a href="Contact" class="menu-item">{t.page.contact}</a>
    </div>
</div>

<style>
    img {
        margin-left: 5vw;
        object-fit: contain;
    }
    .bar {
        width: 100%;
        background-color: rgba(48, 64, 80, 1);
        display: flex;
        flex-direction: row;
        position: fixed;
        animation: fadeInRGBA 1s linear 1;
        /* animation-play-state: paused; */
        animation-delay: calc(var(--scroll) * -1s);
    }
    @keyframes fadeInRGBA {
        0% {
            background-color: rgba(48, 64, 80, 0);
        }

        100% {
            background-color: rgba(48, 64, 80, 1);
        }
    }
    .menu-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        margin: 0 5vw;
    }
    .menu-item {
        height: 100%;
        display: flex;
        text-decoration: none;
        color: var(--menu-item-color);
        padding: 0 1vw;
        text-transform: uppercase;
        align-items: center;
    }
    .menu-item:hover {
        background-color: var(--hovered-color);
    }

    /* @media screen and (max-width: 900px) {
        .menu-container {
            display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1vh;
    } */
</style>
