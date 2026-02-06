<script lang="ts">
    const trackTitle = "Track title";
    const artistName = "Artist name";
    const albumName = "Album name";
    const totalTrackCount = 67;
    const currentTrack = 21;
    const currentTime = "04:20";
    const trackLength = "13:37";
</script>

<span class="flex flex-col">
    <h2>{trackTitle}</h2>
    <h3>{artistName}</h3>
    <span class="flex flex-row">
        <h3>{albumName}</h3>
        <p>{currentTrack}/{totalTrackCount}</p>
    </span>
    <span class="flex flex-col">
        <p>
            Progress bar
            ----------------------------
        </p>
        <span class="flex flex-row">
            <p>{currentTime}</p>
            <p>{trackLength}</p>
        </span>
    </span>
    <span class="flex flex-row">
        <button>SHL</button>
        <button>PRV</button>
        <button>PLY</button>
        <button>NXT</button>
        <button>REP</button>
    </span>
</span>

