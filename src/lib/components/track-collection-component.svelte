<script lang="ts">
    import type { TrackCollection } from "$lib/types";
    import TrackComponent from "./track-component.svelte";
    import TrackListEntry from "./track-list-entry.svelte";

    let { entry }: { entry: TrackCollection } = $props();
</script>

<span class="flex flex-col">
    <span class="flex flex-row">
        {entry.title}
    </span>
    <span class="flex flex-col ml-2">
        {#each entry.children as child }
            <TrackListEntry track={child}/>
        {/each}
    </span> 
</span>
