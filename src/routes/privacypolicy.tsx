import { Title } from "solid-start";
import "./privacypolicy.css";

export default function Home() {
  return (
    <main class="privacy-policy">
      <Title>Privacy Policy - Matchday</Title>
      <h1 class="page-title">Privacy Policy</h1>

      <section class="content">
        <article class="section">
          <h2 class="section-title">1. Information Collection</h2>
          <p>Matchday collects and stores the following information to provide Push notification services:</p>
          <ul class="list">
            <li>Device tokens for Push notifications</li>
            <li>Your watchlist data (matches you want to follow)</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">2. How We Use Your Information</h2>
          <p>We use the collected information solely for:</p>
          <ul class="list">
            <li>Sending Push notifications about matches in your watchlist</li>
            <li>Maintaining your watchlist preferences</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">3. Data Storage and Security</h2>
          <p>Your watchlist data and device tokens are stored securely on our servers. We do not share this information with third parties and use it only
or providing the app's core functionality.</p>
        </article>

        <article class="section">
          <h2 class="section-title">4. Subscription and Payments</h2>
          <p>For subscription payments, we use:</p>
          <ul class="list">
            <li>Apple's App Store payment system for iOS devices</li>
            <li>Google Play's payment system for Android devices</li>
          </ul>
          <p>Payment information is handled entirely by Apple/Google. We do not collect or store any payment details or financial information. Subscription
management and billing are handled through your App Store or Google Play account.</p>
        </article>

        <article class="section">
          <h2 class="section-title">5. Your Rights</h2>
          <p>You can at any time:</p>
          <ul class="list">
            <li>Disable Push notifications through your device settings</li>
            <li>Clear your watchlist data</li>
            <li>Request deletion of your device data from our servers</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: t.furuya825@gmail.com</p>
        </article>

        <p class="last-updated">Last updated: Marge 22, 2025</p>

      </section>
    </main>
  );
}
