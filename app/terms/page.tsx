import type { Metadata } from 'next'
import { Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Terms of Service - Kovo Design',
  description: 'Terms of Service for Kovo Design. Read our terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: October 19, 2025</p>

          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the Kovo Design website ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
          </p>

          <h2>Description of Service</h2>
          <p>
            Kovo Design provides professional web design and development services, including but not limited to:
          </p>
          <ul>
            <li>Custom website design and development</li>
            <li>E-commerce solutions</li>
            <li>Website maintenance and support</li>
            <li>Web consulting services</li>
          </ul>

          <h2>Client Responsibilities</h2>
          <p>When engaging our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Provide necessary content, materials, and access in a timely manner</li>
            <li>Respond promptly to requests for feedback and approvals</li>
            <li>Make payments according to the agreed schedule</li>
            <li>Use our services only for lawful purposes</li>
          </ul>

          <h2>Project Scope and Changes</h2>
          <p>
            The scope of work will be defined in a separate project agreement or proposal. Any changes to the agreed scope may result in additional fees and timeline adjustments. We will discuss and agree upon any scope changes before proceeding.
          </p>

          <h2>Payment Terms</h2>
          <ul>
            <li>Payment schedules will be outlined in your project agreement</li>
            <li>Invoices are due within the specified timeframe (typically net 15 days)</li>
            <li>Late payments may incur interest charges</li>
            <li>Work may be paused or suspended for overdue payments</li>
            <li>All fees are non-refundable unless otherwise specified</li>
          </ul>

          <h2>Intellectual Property Rights</h2>
          <h3>Upon Full Payment</h3>
          <p>
            Once all payments have been received in full, you will own the final deliverables, including design files and custom code created specifically for your project.
          </p>

          <h3>Pre-existing Materials</h3>
          <p>
            We retain ownership of any pre-existing code, frameworks, templates, or tools used in your project. You receive a license to use these materials as part of your website.
          </p>

          <h3>Third-party Materials</h3>
          <p>
            Any third-party software, plugins, fonts, or images used in your project remain the property of their respective owners and are subject to their licensing terms.
          </p>

          <h2>Warranties and Guarantees</h2>
          <p>
            We guarantee that the work delivered will be of professional quality and free from defects. We will fix any bugs or issues discovered during the agreed support period at no additional cost. However, we do not guarantee:
          </p>
          <ul>
            <li>Specific search engine rankings or traffic levels</li>
            <li>Compatibility with future browser or platform updates</li>
            <li>Uptime or performance of third-party services</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Kovo Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities arising from your use of our services.
          </p>

          <h2>Termination</h2>
          <p>Either party may terminate the service agreement with written notice. Upon termination:</p>
          <ul>
            <li>You remain responsible for payment for work completed up to the termination date</li>
            <li>We will deliver all completed work upon receipt of payment</li>
            <li>Incomplete work remains our property until full payment is received</li>
          </ul>

          <h2>Confidentiality</h2>
          <p>
            We will treat all client information and project details as confidential. We will not share or use your confidential information except as necessary to complete the project or as required by law.
          </p>

          <h2>Website Content</h2>
          <p>
            All content on the Kovo Design website, including text, graphics, logos, and images, is our property or the property of our content suppliers and is protected by copyright laws.
          </p>

          <h2>External Links</h2>
          <p>
            Our Service may contain links to third-party websites or services that are not owned or controlled by Kovo Design. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect. Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Kovo Design operates, without regard to its conflict of law provisions.
          </p>

          <h2>Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or your use of our Service shall first be addressed through good faith negotiations. If negotiations fail, disputes will be resolved through binding arbitration or small claims court.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible, and the remaining provisions will continue in full force and effect.
          </p>

          <h2>Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>Email: hello@kovo-design.io</li>
            <li>Website: kovo-design.io/contact</li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
