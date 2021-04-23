<script lang="ts">
    export let path: string;
    export let text: string;
</script>

<a href={path} class="button">{text}</a>

<style>
    .button {
        display: inline-block;
        text-decoration: none;
        font-variant: small-caps;
        background-color: var(--primary-color);
        color: var(--light-text-color);
        margin: 1rem 0;
        padding: 0.5rem;
        transition-duration: 0.2s;
    }

    .button:hover {
        background-color: var(--hovered-color);
    }
</style>
