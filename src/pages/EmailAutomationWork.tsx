import React from 'react';
import { ArrowLeft, Mail, Workflow, BarChartBig, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailAutomationWork = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-md p-4">
        <Link to="/work" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <ArrowLeft size={20} />
          Back to My Work
        </Link>
      </div>

      {/* Hero Section */}
      <section className="text-center my-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building an Automated Email Marketing System Using n8n
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Lead Nurturing, Follow-ups, and Trigger-Based Campaigns
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8">
            Email remains one of the most effective channels for customer engagement, especially when messages are timely, personalized, and relevant. Manually sending follow-ups, nurturing leads, or distributing event-based messages is inefficient and prone to inconsistency. To solve this, I built a fully automated email campaign system using n8n, Google Sheets, and SMTP—designed to send targeted emails, follow-up sequences, and personalized content with zero manual intervention.
        </p>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: Why I Built This Project */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3"><Mail /> Why I Built This Project</h2>
          <p className="text-gray-300 text-lg mb-4">
            Managing outreach manually—especially across multiple customer types—quickly becomes chaotic. Property leads, business clients, expo connections, and service-related inquiries all require different messages, timing, and follow-up sequences.
          </p>
          <p className="text-gray-300 text-lg mt-4">I wanted a system that could:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
            <li>Automatically pull email lists from Google Sheets</li>
            <li>Send personalized messages based on segment</li>
            <li>Run sequences at scheduled intervals</li>
            <li>Avoid manual effort and repetitive tasks</li>
            <li>Ensure consistent professional communication</li>
            <li>Improve engagement, conversions, and follow-up rates</li>
          </ul>
           <p className="text-gray-300 text-lg mt-4">
            Using n8n allowed me to build a flexible, scalable solution without writing backend code.
          </p>
        </section>

        {/* Section 2: High-Level Architecture */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><Workflow /> High-Level Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>1. Multiple Scheduled Triggers:</strong> Initiates different campaigns like general lead nurturing, banking audit outreach, and expo follow-ups.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>2. Google Sheets as the Contact Database:</strong> Structured sheets for lead lists, banking contacts, corporate clients, and expo visitors.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>3. Split in Batches Node:</strong> Prevents sending all emails at once and avoids SMTP throttling.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>4. SMTP Email Node:</strong> Sends plain text, HTML newsletters, personalized emails, and messages with attachments.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>5. Wait Node:</strong> Adds a delay between sends to maintain sender reputation and avoid spam flags.</div>
          </div>
        </section>

        {/* Section 3: A Deep Dive into the Workflows */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><BarChartBig /> A Deep Dive into the Workflows</h2>
          <p className="text-gray-300 text-lg mb-4">
            Your automation includes four major email sequences, each with its own trigger, sheet source, and message body.
          </p>
          <div className="space-y-6 text-gray-300">
            <div>
                <h3 className="font-bold text-xl mb-2 text-cyan-500">1. General Lead Nurturing Email</h3>
                <p>Sent to customers who have shown interest in property services, this message acts as the first warming touchpoint, introducing property documents, legal verification, Mutation/PTIN, and more.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-2 text-cyan-500">2. Banking Audit & Due Diligence Outreach</h3>
                <p>Targeted outreach for B2B partnerships, highlighting audit reports, due diligence, risk analysis, and regulatory compliance for banking institutions.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-2 text-cyan-500">3. HTML Newsletter for Property Audit Services</h3>
                <p>Designed for higher engagement, this workflow sends a visually rich newsletter with service highlights, CTAs, images, and links.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl mb-2 text-cyan-500">4. Expo / Summit Follow-up Email</h3>
                <p>Improves post-event conversions with a personalized greeting, overview of services, and attachments for contacts collected at events like TiE 2025.</p>
            </div>
          </div>
        </section>

        {/* Section 4: Key Features Achieved */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><Zap /> Key Features Achieved</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Lead Nurturing:</strong> Every new lead receives timely communication without waiting for manual intervention.</li>
            <li><strong>Automated Follow-Ups:</strong> Each target segment receives relevant follow-ups based on the contact list.</li>
            <li><strong>Personalized Campaigns:</strong> Emails adjust dynamically using variables.</li>
            <li><strong>Trigger-Based Scheduling:</strong> Campaigns run at hourly intervals, daily schedules, or post-event triggers.</li>
            <li><strong>Attachment Support:</strong> Brochures and sample reports are auto-delivered to qualified leads.</li>
            <li><strong>Reduced Manual Work:</strong> No copy-pasting or one-by-one emailing—everything is fully automated.</li>
          </ul>
        </section>

        {/* Section 5: Results */}
         <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><TrendingUp /> Results from This Automation System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Higher Open Rates:</strong> Because emails are timely and relevant to each segment.</div>
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Increased Click-Through Rates:</strong> CTA buttons, links, and brochures improve engagement.</div>
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Stronger Lead Pipeline:</strong> Leads receive continuous nurturing until they are ready to convert.</div>
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Better Post-Event Conversions:</strong> Expo visitors receive follow-ups that feel personal and well-timed.</div>
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Time Saved:</strong> Hours of manual email work condensed into automated flows.</div>
                <div className="bg-gray-900/50 p-4 rounded-lg"><strong>Scalable Outreach:</strong> Adding new leads only requires updating Google Sheets—no workflow changes needed.</div>
            </div>
        </section>

        {/* Section 6: Why n8n Was Ideal */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><CheckCircle /> Why n8n Was Ideal for This Project</h2>
           <p className="text-gray-300 text-lg mb-4">
            n8n's flexibility gave me full control over the automation logic. I was able to:
           </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>Build workflows visually</li>
                <li>Trigger emails dynamically</li>
                <li>Connect with Google Sheets seamlessly</li>
                <li>Send emails via SMTP reliably</li>
                <li>Add delays, conditions, and branching logic</li>
                <li>Scale campaigns without rewriting code</li>
            </ul>
        </section>
        
        {/* Section 7: Future Enhancements */}
        <section>
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Future Enhancements Planned</h2>
             <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Automated WhatsApp follow-ups</li>
                <li>Lead scoring based on engagement</li>
                <li>Multi-step drip campaigns</li>
                <li>CRM synchronization</li>
                <li>AI-personalized content using Gemini</li>
                <li>Analytics dashboards for open/click tracking</li>
            </ul>
        </section>

        {/* Section 8: Conclusion */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Conclusion</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            This project demonstrates how n8n transforms manual email tasks into a scalable, intelligent automation system. By integrating scheduled triggers, batch processing, structured email templates, and contact databases, I created a powerful multi-segment email engine capable of nurturing leads and growing customer engagement effortlessly.
          </p>
           <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            This approach is ideal for anyone managing property services, B2B outreach, or event follow-ups—and serves as a strong foundation for advanced marketing automation.
          </p>
        </section>
      </div>
    </div>
  );
};

export default EmailAutomationWork;
