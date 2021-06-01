<script lang="ts">
</script>

<div class="page">
    <slot />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        padding: 4vw 20vw;
    }

    @media screen and (max-width: 900px) {
        .page {
            padding: 2vw 10vw;
        }
    }
</style>
