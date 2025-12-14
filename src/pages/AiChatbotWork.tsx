import { ArrowLeft, Bot, BrainCircuit, MessageSquare, Workflow, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AiChatbotWork = () => {
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
          AI-Powered Property Assistant
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A 24/7 automated chatbot designed to provide instant, accurate answers for property-related services.
        </p>
        <div className="max-w-4xl mx-auto my-8">
            <img 
              src="https://ik.imagekit.io/sravanth/Screenshot%202025-12-14%20174730.png?updatedAt=1765715409574" 
              alt="AI Chatbot Interface"
              className="rounded-lg shadow-2xl shadow-cyan-500/20"
            />
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Section 1: The Goal */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3"><Bot /> The Goal</h2>
          <p className="text-gray-300 text-lg">
            The goal was simple: Create a chatbot that behaves predictably, gives accurate property-service answers, 
            and handles customers 24/7 without human intervention. Instead of manually answering every day, 
            I wanted an AI system that could reply instantly with correct information and guide users step-by-step.
          </p>
        </section>

        {/* Section 2: Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Tech Stack Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>1. n8n:</strong> The automation engine.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>2. Google Gemini:</strong> The LLM.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>3. LangChain "AI Agent":</strong> For custom prompts.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>4. Memory Buffer:</strong> Stores context.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>5. HTTP Request Tool:</strong> Fetches content.</div>
            <div className="bg-gray-900/50 p-4 rounded-lg"><strong>6. Custom Training Document:</strong> The instruction set.</div>
          </div>
        </section>
        
        {/* Section 3: System Prompt */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3"><BrainCircuit /> Designing the System Prompt</h2>
          <p className="text-gray-300 text-lg mb-4">
            I created a structured system prompt including Role Definition, Context Rules, a Pricing Logic Engine, and Output Formatting.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg text-sm text-cyan-300">
            <pre><code>
              {`// Example Pricing Logic
Mutation Govt Fee = 0.1% of Property Value
Total = Govt Fee + Fixed Service Fee`}
            </code></pre>
          </div>
        </section>
        
        {/* Section 4: Workflow Architecture */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-3"><Workflow /> Workflow Architecture in n8n</h2>
          <div className="space-y-4">
            <p><strong>Node 1 - Chat Trigger:</strong> UI and welcome message.</p>
            <p><strong>Node 2 - AI Agent (Main Logic):</strong> The brain with system message and tools.</p>
            <p><strong>Node 3 - Gemini LLM:</strong> Processes responses.</p>
            <p><strong>Node 4 - Memory Buffer:</strong> Retains conversation history.</p>
            <p><strong>Node 5 - HTTP Request:</strong> For future integrations.</p>
          </div>
        </section>
        
        {/* Section 5: End-to-End Flow */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400 flex items-center gap-3"><MessageSquare /> End-to-End Flow</h2>
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400">User: "How much does Mutation cost for a 50 lakh property?"</p>
            <hr className="my-2 border-gray-700" />
            <p className="text-cyan-400">AI: "Total cost is ₹6,999 (₹5,000 Govt fee + ₹1,999 service fee)."</p>
          </div>
        </section>
        
        {/* Section 6: Key Capabilities */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-cyan-400">Key Capabilities Achieved</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Fully Controlled AI with no hallucinations.</li>
            <li>Domain-Trained Expertise on property matters.</li>
            <li>WhatsApp Ready with short, clear messages.</li>
            <li>Guided Conversation Flows for user assistance.</li>
            <li>Expandable Architecture for future integrations.</li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Conclusion & Future Improvements</h2>
          <p className="text-gray-300 text-lg mb-6">
            This project created a powerful, predictable AI assistant. Future plans include live API integrations and multi-language support.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AiChatbotWork;
