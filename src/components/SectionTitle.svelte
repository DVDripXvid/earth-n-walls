<script lang="ts">
    export let text: string;
</script>

<p>{text}</p>

<style>
    p {
        color: var(--primary-color);
        text-transform: uppercase;
        font-weight: 300;
        font-size: clamp(1.3rem, 4vw, 2rem);
        margin: 3rem 0;
    }
</style>
