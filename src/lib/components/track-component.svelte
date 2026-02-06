<script lang="ts">
    import type { Track } from "$lib/types";

    let { entry }: { entry: Track } = $props(); 
</script>

<span class="flex flex-row">
    {entry.title}
</span>
