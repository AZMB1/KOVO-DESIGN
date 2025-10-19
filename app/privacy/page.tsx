import type { Metadata } from 'next'
import { Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Privacy Policy - Kovo Design',
  description: 'Privacy policy for Kovo Design. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: October 19, 2025</p>

          <h2>Introduction</h2>
          <p>
            Kovo Design ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Fill out a contact form</li>
            <li>Request a quote or consultation</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Project details and requirements</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on pages</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Process your requests and deliver our services</li>
            <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze usage patterns and trends</li>
            <li>Prevent fraud and enhance security</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering our services (e.g., hosting providers, email services).</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict certain processing of your information</li>
            <li>Withdraw consent for marketing communications at any time</li>
          </ul>
          <p>To exercise these rights, please contact us at hello@kovo-design.io.</p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: hello@kovo-design.io</li>
            <li>Website: kovo-design.io/contact</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
