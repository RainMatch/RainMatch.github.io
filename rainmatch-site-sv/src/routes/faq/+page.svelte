<script lang="ts">
    import { FAQAccordion } from "$lib";

    const jsonLdFaq = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is RainMatch?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "RainMatch is a curated matchmaking and collaboration platform for sales and business professionals. It connects Sellers (people with products or services to sell) with Partners (experienced professionals who have the right network, credibility, or expertise to help close deals). When deals close, commissions are shared—creating a true win-win model.",
                },
            },
            {
                "@type": "Question",
                name: "Who is RainMatch for?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "RainMatch is designed for sales and business development professionals and leaders, business owners and founders, and consultants and industry experts. If you sell products or services—or have valuable relationships that can help others sell—RainMatch is built for you.",
                },
            },
            {
                "@type": "Question",
                name: "How does matching work?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "RainMatch uses a carefully curated smart matching system that considers industry and domain expertise, network relevance, past success history on RainMatch, and deal preferences and commission expectations. Matches are curated daily to ensure quality over quantity. A connection only happens when both parties express interest.",
                },
            },
            {
                "@type": "Question",
                name: "Is RainMatch free to use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. RainMatch offers a Free plan for both Sellers and Partners. Paid plans unlock additional match likes, advanced profile listing such as URLs and documents, enhanced/featured visibility, advanced analytics, and contract management capabilities. RainMatch is currently free for everyone with unlimited features.",
                },
            },
        ],
    };

    const jsonLdFaqScript =
        `<script type="application/ld+json">${JSON.stringify(jsonLdFaq)}</` +
        `script>`;
</script>

<svelte:head>
    <title>FAQ - RainMatch | Curated Business Partner Matching Platform</title>
    <meta
        name="description"
        content="Frequently asked questions about RainMatch, the curated business partner matching platform. Learn how to find business partners, how matching works, pricing, and more."
    />
    <meta
        name="keywords"
        content="RainMatch FAQ, how to find business partners, business partner matching, commission-based sales, networking app for sales professionals"
    />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://rainmatch.ai/faq" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://rainmatch.ai/faq" />
    <meta
        property="og:title"
        content="FAQ - RainMatch | Curated Business Partner Matching Platform"
    />
    <meta
        property="og:description"
        content="Frequently asked questions about RainMatch. Learn how to find business partners, how matching works, and get started with our curated matching platform."
    />
    <meta
        property="og:image"
        content="https://rainmatch.ai/Logo_store_transparent.png"
    />
    <meta property="og:site_name" content="RainMatch" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="https://rainmatch.ai/faq" />
    <meta
        name="twitter:title"
        content="FAQ - RainMatch | Curated Business Partner Matching Platform"
    />
    <meta
        name="twitter:description"
        content="Frequently asked questions about RainMatch. Learn how to find business partners, how matching works, and get started."
    />
    <meta
        name="twitter:image"
        content="https://rainmatch.ai/Logo_store_transparent.png"
    />

    {@html jsonLdFaqScript}
</svelte:head>

<div class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <p>
        Everything you need to know about RainMatch, the curated business
        partner matching platform.
    </p>
</div>

<div class="faq-container">
    <!-- Getting Started Section -->
    <div class="faq-section">
        <h2 class="faq-section-title">Getting Started</h2>

        <FAQAccordion question="What is RainMatch?">
            RainMatch is a curated matchmaking and collaboration platform for
            sales and business professionals. It connects <strong
                >Sellers</strong
            >
            (people with products or services to sell) with
            <strong>Partners</strong> (experienced professionals who have the right
            network, credibility, or expertise to help close deals). When deals close,
            commissions are shared—creating a true win-win model.
        </FAQAccordion>

        <FAQAccordion question="Who is RainMatch for?">
            RainMatch is designed for:
            <ul>
                <li>
                    Sales and business development professionals and leaders
                </li>
                <li>Business owners & founders</li>
                <li>Consultants & industry experts</li>
            </ul>
            If you sell products or services—or have valuable relationships that
            can help others sell—RainMatch is built for you.
        </FAQAccordion>

        <FAQAccordion
            question="What's the difference between a Seller and a Partner?"
        >
            <strong>Sellers</strong> post projects for products or services they
            want help selling.<br /><br />
            <strong>Partners</strong> bring industry expertise, relationships,
            and credibility to help Sellers close deals.<br /><br />
            Many users can act as both Seller and Partner, depending on the opportunity.
        </FAQAccordion>

        <FAQAccordion question="How do I get started?">
            Getting started takes just a few minutes:
            <ul>
                <li>Sign up using LinkedIn, Google, Apple or email</li>
                <li>
                    Choose your role – Seller or Partner (you can add the other
                    role later in your Profile)
                </li>
                <li>
                    Complete your profile – the more details you provide, the
                    higher the chances of getting accurate matches
                </li>
                <li>Post a project (Sellers)</li>
                <li>
                    Explore matches, discover Projects and Partners, chat with
                    them
                </li>
            </ul>
        </FAQAccordion>
    </div>

    <!-- Matching & Connections Section -->
    <div class="faq-section">
        <h2 class="faq-section-title">Matching & Connections</h2>

        <FAQAccordion question="How does matching work?">
            RainMatch uses a carefully curated smart matching system that
            considers:
            <ul>
                <li>Industry and domain expertise</li>
                <li>Network relevance</li>
                <li>Past success history on RainMatch</li>
                <li>Deal preferences and commission expectations</li>
            </ul>
            Matches are curated daily to ensure quality over quantity. A connection
            only happens when both parties express interest.
        </FAQAccordion>

        <FAQAccordion question="How many matches do I get per day?">
            It varies but theoretically it's unlimited. You are more likely to
            get more matches if you share your LinkedIn URL and provide as much
            detail as you can in your profile.
        </FAQAccordion>

        <FAQAccordion question="How many likes can I submit per day?">
            <strong>Free Plan:</strong>
            <ul>
                <li>Sellers can like up to 3 Partner matches per day</li>
                <li>Partners can like up to 5 Seller projects per day</li>
            </ul>
            <strong>Pro Plan:</strong>
            <ul>
                <li>Sellers can like up to 10 Partner matches per day</li>
                <li>Partners can like up to 15 Seller projects per day</li>
            </ul>
            <div class="highlight-box">
                Premium Plan with unlimited likes and other advanced features is
                coming soon. Partners on Pro Plan or higher are eligible to earn
                the "Rainmaker" badge based on their Seller connections, project
                successes, revenue generated, commissions earned, and success
                stories shared.
            </div>
            <strong
                >RainMatch is currently free for everyone with unlimited
                features!</strong
            >
        </FAQAccordion>

        <FAQAccordion
            question="How do I know I can trust the people I work with?"
        >
            RainMatch uses multiple trust and credibility signals, including:
            <ul>
                <li>Verified professional profiles (LinkedIn & Google)</li>
                <li>Ratings and reviews after each collaboration</li>
                <li>Deal completion history</li>
                <li>Success stories and reputation badges</li>
            </ul>
            Over time, top performers earn recognition as Pro/Premium Sellers or
            Pro/Premium Partners.
        </FAQAccordion>
    </div>

    <!-- Commissions & Pricing Section -->
    <div class="faq-section">
        <h2 class="faq-section-title">Commissions & Pricing</h2>

        <FAQAccordion question="How do commissions work?">
            Commissions are agreed upon before collaboration begins. Sellers can
            define in their Projects:
            <ul>
                <li>
                    Percentage-based commissions (based on revenue or profit)
                </li>
                <li>Fixed fees</li>
            </ul>
            RainMatch does not engage in Seller-Partner negotiation and agreement.
            <div class="highlight-box">
                Coming soon: A standardized digital contract will be available
                on RainMatch to facilitate seamless contract execution.
            </div>
        </FAQAccordion>

        <FAQAccordion question="Does RainMatch take a cut of my commissions?">
            RainMatch does not engage in Seller-Partner negotiation and
            agreement, and primarily operates on user subscription plans.
        </FAQAccordion>

        <FAQAccordion question="Is RainMatch free to use?">
            Yes! RainMatch offers a Free plan for both Sellers and Partners.
            Paid plans unlock additional match likes, advanced profile listing
            such as URLs and documents, enhanced/featured visibility, advanced
            analytics, and contract management capabilities.
            <div class="highlight-box">
                <strong
                    >RainMatch is currently free for everyone with unlimited
                    features!</strong
                >
            </div>
        </FAQAccordion>

        <FAQAccordion question="What are the paid plans?">
            <strong>For Sellers:</strong>
            <ul>
                <li>Free</li>
                <li>Pro – $49/month</li>
            </ul>
            <strong>For Partners:</strong>
            <ul>
                <li>Free</li>
                <li>Pro – $29/month</li>
            </ul>
            Exact features may evolve as we launch new capabilities.
            <div class="highlight-box">
                <strong
                    >RainMatch is currently free for everyone with unlimited
                    features!</strong
                >
            </div>
        </FAQAccordion>

        <FAQAccordion
            question="Are Seller-Partner contracts built into the platform?"
        >
            Not yet, but it is coming soon! RainMatch will be adding built-in
            electronic contracts so Sellers and Partners can formalize
            agreements quickly and securely—without needing external tools.
        </FAQAccordion>
    </div>

    <!-- Platform & Features Section -->
    <div class="faq-section">
        <h2 class="faq-section-title">Platform & Features</h2>

        <FAQAccordion question="What platforms does RainMatch support?">
            RainMatch is built as a mobile-first platform with:
            <ul>
                <li>Native iOS and Android apps</li>
            </ul>
            <div class="highlight-box">
                Coming soon: A web dashboard for deeper project and deal
                management, and analytics.
            </div>
        </FAQAccordion>

        <FAQAccordion
            question="Is RainMatch suitable for enterprise B2B sales?"
        >
            Absolutely! Although RainMatch is not limited to enterprise sales or
            any particular industry, it can be especially powerful for:
            <ul>
                <li>Enterprise B2B sales</li>
                <li>SaaS and technology products</li>
                <li>Industry-specific or regulated markets</li>
                <li>High-ticket, relationship-driven deals</li>
            </ul>
            RainMatch is built for any industry where there are Sellers and Partners
            to collaborate. The opportunity is unlimited.
        </FAQAccordion>

        <FAQAccordion
            question="How is RainMatch different from LinkedIn or traditional networking?"
        >
            Unlike traditional networking platforms, RainMatch:
            <ul>
                <li>
                    Focuses on <strong>closing deals</strong>, not just making
                    connections
                </li>
                <li>
                    Aligns incentives through <strong
                        >commission-based collaboration</strong
                    >
                </li>
                <li>
                    <strong>Curates matches</strong> instead of overwhelming you
                    with leads
                </li>
                <li>Offers a <strong>fun and simple</strong> user interface</li>
            </ul>
        </FAQAccordion>

        <FAQAccordion question="Is my data secure?">
            Yes. RainMatch is built with enterprise-grade security, secure
            authentication, and privacy controls. For more details, see our <a
                href="/privacy">Privacy Policy</a
            >.
        </FAQAccordion>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
        <h2>Ready to accelerate your sales?</h2>
        <p>
            Join RainMatch today and start connecting with the right partners to
            close more deals.
        </p>
        <div class="cta-buttons">
            <a
                href="https://play.google.com/store/apps/details?id=com.rainmatch.app"
                target="_blank"
                rel="noopener noreferrer"
                class="primary-btn">Download App</a
            >
            <a href="/contact" class="secondary-btn">Contact Us</a>
        </div>
    </div>
</div>

<style>
    .faq-header {
        text-align: center;
        padding: 4rem 2rem 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .faq-header h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1rem;
    }

    .faq-header p {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.8;
    }

    .faq-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
    }

    .faq-section {
        margin-bottom: 3rem;
    }

    .faq-section-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fbbf24;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(251, 191, 36, 0.3);
    }

    .cta-section {
        text-align: center;
        padding: 4rem 2rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 20px;
        margin: 2rem auto;
        max-width: 800px;
    }

    .cta-section h2 {
        font-size: 2rem;
        color: white;
        margin-bottom: 1rem;
    }

    .cta-section p {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 2rem;
        font-size: 1.1rem;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-buttons a {
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
    }

    .cta-buttons .primary-btn {
        background: hsl(210, 97%, 51%);
        color: white;
    }

    .cta-buttons .primary-btn:hover {
        background: hsl(210, 97%, 45%);
        transform: translateY(-2px);
    }

    .cta-buttons .secondary-btn {
        background: transparent;
        color: #fbbf24;
        border: 2px solid #fbbf24;
    }

    .cta-buttons .secondary-btn:hover {
        background: #fbbf24;
        color: #1f2937;
    }

    :global(.highlight-box) {
        background: linear-gradient(
            135deg,
            rgba(251, 191, 36, 0.1) 0%,
            rgba(251, 191, 36, 0.05) 100%
        );
        border-left: 4px solid #fbbf24;
        padding: 1rem 1.25rem;
        border-radius: 0 8px 8px 0;
        margin: 1rem 0;
        color: rgba(255, 255, 255, 0.9);
    }

    @media (max-width: 768px) {
        .faq-header h1 {
            font-size: 2rem;
        }

        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }

        .cta-buttons a {
            width: 100%;
            max-width: 280px;
            text-align: center;
        }
    }
</style>
