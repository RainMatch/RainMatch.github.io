<script lang="ts">
    import { Footer } from "$lib";
    import "../../app.css";

    let { children } = $props();
</script>

{@render children()}
<Footer />
