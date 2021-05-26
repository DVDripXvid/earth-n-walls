<script lang="ts">
    import Fa from "svelte-fa";
    import { faFacebook } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
    import { isLarge } from "../stores/mediaQuery";
</script>

<div class="footer">
    <a
        class="link"
        href="https://www.facebook.com/Gipszkartonozom"
        target="_blank"
    >
        <Fa icon={faFacebook} size="2x" color="white" />
        {#if $isLarge}
            <div>facebook/earthandwalls</div>
        {/if}
    </a>

    <a class="link" href="mailto:info@earthandwalls.com"
        ><Fa icon={faEnvelope} size="2x" color="white" />
        {#if $isLarge}
            <div>info@earthandwalls.com</div>
        {/if}
    </a>
    <a class="link" href="tel:+36703077997"
        ><Fa icon={faPhone} size="2x" color="white" />
        {#if $isLarge}
            <div>+36 70 307 7997</div>
        {/if}
    </a>
</div>

<style>
    .footer {
        display: flex;
        justify-content: space-around;
        height: 10vh;
        background-color: var(--primary-color);
        padding: 1rem;
    }

    .link {
        display: flex;
        gap: 1rem;
        align-items: center;
        color: white;
        text-decoration: none;
    }
</style>
