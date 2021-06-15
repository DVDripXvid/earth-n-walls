<script lang="ts">
    import { isLarge } from "../stores/mediaQuery";
</script>

<div class="page" class:page--large={$isLarge}>
    <slot />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;
        padding: 2vw 10vw;
    }
    .page--large {
        padding: 1vw 20vw;
    }
</style>
