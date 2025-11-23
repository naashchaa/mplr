<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    let { children } = $props();
    import "../app.css";
</script>

{@render children()}
