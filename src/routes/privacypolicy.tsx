import { Title } from "solid-start";

export default function Home() {
  return (
    <main class="max-w-3xl mx-auto px-4 py-8">
      <Title>Privacy Policy - Matchday</Title>
      <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section class="space-y-6">
        <article class="space-y-4">
          <h2 class="text-xl font-semibold">1. Information Collection</h2>
          <p>Matchday collects and stores the following information to provide Push notification services:</p>
          <ul class="list-disc pl-6">
            <li>Device tokens for Push notifications</li>
            <li>Your watchlist data (matches you want to follow)</li>
          </ul>
        </article>

        <article class="space-y-4">
          <h2 class="text-xl font-semibold">2. How We Use Your Information</h2>
          <p>We use the collected information solely for:</p>
          <ul class="list-disc pl-6">
            <li>Sending Push notifications about matches in your watchlist</li>
            <li>Maintaining your watchlist preferences</li>
          </ul>
        </article>

        <article class="space-y-4">
          <h2 class="text-xl font-semibold">3. Data Storage and Security</h2>
          <p>Your watchlist data and device tokens are stored securely on our servers. We do not share this information with third parties and use it only for providing the app's core functionality.</p>
        </article>

        <article class="space-y-4">
          <h2 class="text-xl font-semibold">4. Subscription and Payments</h2>
          <p>For subscription payments, we use:</p>
          <ul class="list-disc pl-6">
            <li>Apple's App Store payment system for iOS devices</li>
            <li>Google Play's payment system for Android devices</li>
          </ul>
          <p>Payment information is handled entirely by Apple/Google. We do not collect or store any payment details or financial information. Subscription management and billing are handled through your App Store or Google Play account.</p>
        </article>

        <article class="space-y-4">
          <h2 class="text-xl font-semibold">5. Your Rights</h2>
          <p>You can at any time:</p>
          <ul class="list-disc pl-6">
            <li>Disable Push notifications through your device settings</li>
            <li>Clear your watchlist data</li>
            <li>Request deletion of your device data from our servers</li>
          </ul>
        </article>

        <article class="space-y-4">
          <h2 class="text-xl font-semibold">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p>Email: t.furuya825@gmail.com</p>
        </article>

        <p class="text-sm text-gray-600">Last updated: Marge 22, 2025</p>
      </section>
    </main>
  );
}
