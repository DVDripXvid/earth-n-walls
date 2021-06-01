<script lang="ts">
    import { t } from "../../translations/translation";
    import SectionTitle from "../SectionTitle.svelte";
    import ImageGallery from "../ImageGallery.svelte";
    import { references } from "../../data/references";

    const images = references.map((reference) => ({
        src: reference.images[0],
        path: reference.path + "#" + reference.id,
        name: reference.title,
    }));
</script>

<SectionTitle text={t.index.referencesTitle} />

<ImageGallery {images} />
