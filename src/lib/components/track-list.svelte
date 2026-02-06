<script lang="ts">
    import { PlaylistEntry, Track, TrackCollection } from "$lib/types";
    import TrackListEntry from "./track-list-entry.svelte";

    const tracks: PlaylistEntry[]  = [
        new TrackCollection("list1", 0, [
            new Track("child1", 1),
            new TrackCollection("list2", 1, [
                new Track("child21", 0),
                new Track("child22", 1)
            ])
        ]),
        new Track("track2", 1),
        new Track("track3", 2) 
    ];
</script>

<span class="flex flex-col">
    {#each tracks as track}
        <TrackListEntry {track} />    
    {/each}
</span>
