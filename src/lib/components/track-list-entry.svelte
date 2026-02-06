<script lang="ts">
    import { PlaylistEntry, Track, TrackCollection } from "$lib/types";
    import TrackCollectionComponent from "./track-collection-component.svelte";
    import TrackComponent from "./track-component.svelte";
    let { track }: { track: PlaylistEntry } = $props();
    console.log(typeof(track));
</script>

{#if track instanceof Track}
    <TrackComponent entry={track}/>
{:else if track instanceof TrackCollection}
    <TrackCollectionComponent entry={track}/>
{:else}
    <p><i>???</i></p>
{/if}
