import { Title } from "solid-start";
import "./termsofservice.css";

export default function Home() {
  return (
    <main class="terms-of-service">
      <Title>Terms of Service - Matchday</Title>
      <h1 class="page-title">Terms of Service</h1>

      <section class="content">
        <article class="section">
          <h2 class="section-title">Acceptance of Terms</h2>
          <p>By downloading, installing, or using the Matchday app ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you do not have permission to access the Service.</p>
        </article>

        <article class="section">
          <h2 class="section-title">Subscription Service</h2>
          <p>Matchday offers subscription-based services with the following conditions:</p>
          <ul class="list">
            <li>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
            <li>You can manage your subscription and turn off auto-renewal by going to your Account Settings after purchase</li>
            <li>No refund will be provided for the unused portion of any term</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">Use License</h2>
          <p>We grant you a limited, non-transferable, non-exclusive license to use the Service for your personal, non-commercial purposes. You may not:</p>
          <ul class="list">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained in Matchday</li>
            <li>Transfer the materials to another person or 'mirror' the materials on any other server</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">User Content</h2>
          <p>Any data or preferences you store within the app remains your property. However, you grant us the right to use this data to provide and improve our services.</p>
        </article>

        <article class="section">
          <h2 class="section-title">Modifications to Service</h2>
          <p>We reserve the right to:</p>
          <ul class="list">
            <li>Modify or discontinue, temporarily or permanently, the Service with or without notice</li>
            <li>Change subscription fees upon reasonable notice</li>
            <li>Update these Terms of Service at any time</li>
          </ul>
        </article>

        <article class="section">
          <h2 class="section-title">Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at:</p>
          <p>Email: t.furuya825@gmail.com</p>
        </article>

        <p class="last-updated">Last updated: March 22, 2025</p>
      </section>
    </main>
  );
}
