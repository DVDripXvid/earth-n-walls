<script lang="ts">
    export let text: string;
</script>

<p>{text}</p>

<style>
    p {
        color: var(--primary-color);
        text-transform: uppercase;
        font-weight: 300;
        font-size: 2rem;
        margin: 3rem 0;
    }
</style>
