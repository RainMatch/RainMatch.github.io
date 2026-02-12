<script lang="ts">
    import SocialLinks from "./SocialLinks.svelte";
</script>

<footer>
    <div>
        <h3>RainMatch</h3>
        <p class="tagline">Turn your network into revenue</p>
        <SocialLinks />
        <p class="nav-links">
            <a href="/">Home</a> |
            <a href="/faq">FAQ</a> |
            <a href="/privacy">Privacy Policy</a> |
            <a href="/contact">Contact Us</a>
        </p>
        <p class="copyright">
            &copy; 2025 Rainmakers LLC. All rights reserved.
        </p>
    </div>
</footer>

<style>
    footer {
        color: white;
        padding: 3rem 2rem;
        text-align: center;
    }

    footer p {
        color: rgba(255, 255, 255, 0.7);
    }

    footer a {
        color: #fbbf24;
        text-decoration: none;
        margin: 0 0.5rem;
    }

    footer a:hover {
        text-decoration: underline;
    }

    h3 {
        font-size: 1.5rem;
        color: white;
    }

    .tagline {
        margin-bottom: 1rem;
    }

    .copyright {
        margin-top: 1rem;
    }
</style>
