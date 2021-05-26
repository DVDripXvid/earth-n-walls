<script lang="ts">
</script>

<div class="page">
    <slot />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        margin: 4vw 20vw;
    }

    @media screen and (max-width: 900px) {
        .page {
            margin: 2vw 10vw;
        }
    }
</style>
