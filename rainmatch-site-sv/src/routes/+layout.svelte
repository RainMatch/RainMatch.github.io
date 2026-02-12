<script lang="ts">
    import { Header, Footer } from "$lib";
    import "../app.css";

    let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
