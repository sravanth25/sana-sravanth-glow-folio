import React from 'react';
import { 
  Bell, 
  User, 
  ChevronRight, 
  Calendar, 
  Clock, 
  Search, 
  Building2, 
  CreditCard, 
  BookOpen, 
  Copyright, 
  Cpu, 
  Gavel, 
  MessageSquare 
} from 'lucide-react';

const LegalArchive = () => {
  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] font-['Manrope',_sans-serif]">
      {/* TopAppBar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex justify-between items-center h-16 px-8 max-w-[1280px] mx-auto w-full">
          <div className="text-xl font-extrabold text-slate-900 tracking-tighter">LegalArchive</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-sm font-medium tracking-tight text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a>
            <a className="text-sm font-medium tracking-tight text-slate-900 border-b-2 border-slate-900 pb-1" href="#">Library</a>
            <a className="text-sm font-medium tracking-tight text-slate-500 hover:text-slate-900 transition-colors" href="#">Resources</a>
            <a className="text-sm font-medium tracking-tight text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 transition-opacity active:opacity-80">
              <Bell className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button className="text-slate-600 hover:text-slate-900 transition-opacity active:opacity-80">
              <User className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="col-span-12 md:col-span-8">
            {/* Breadcrumbs */}
            <nav className="mb-6 flex items-center space-x-2">
              <span className="text-xs font-medium text-slate-500">Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-medium text-slate-500">Library</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-900">RERA's Double-Edged Sword</span>
            </nav>

            {/* Article Card */}
            <article className="bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-10">
              <div className="flex flex-col space-y-8">
                {/* Header Section */}
                <div className="space-y-4">
                  <span className="inline-flex items-center px-3 py-1 bg-black text-white text-sm font-semibold rounded-lg">
                    Legal Verification
                  </span>
                  <h1 className="text-[32px] md:text-[40px] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
                    RERA's Double-Edged Sword: Balancing Developer Liability and Consumer Protection
                  </h1>
                  <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      October 24, 2024
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      12 Min Read
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden">
                  <img 
                    alt="Modern architectural structure" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcawYNLM4iCD82y0F8YbE8kGwEg2N4ig600Xm6ixp9UPsTAuCrLhSAuRnwSdiYmgYZBzgPJtEg9GNJE4CMZHdI4B-HnKPkjLWuTct64PE4P1XN7YJSiCS7hqYFDLiEp97tXttvq1roRiIrJkKenVmi2R4LMhw4CqQHrCvo9A-AmKgK89npx0pzmun4rBEJKH8uZwWbk72yC_Nv-b-RWIAbDB--5EBjlnQlMPFSkS63VjDCaCQcRi9WO978Z_1aNYHFOGdc-wXC40dd" 
                  />
                </div>

                {/* Article Content */}
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The Real Estate (Regulation and Development) Act, 2016, better known as RERA, was introduced as a landmark legislation to bring transparency and accountability to the Indian real estate sector. However, as the act matures, it has revealed itself to be a complex mechanism that creates significant shifts in power dynamics between developers and homebuyers.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Central to this legislation is the concept of 'structural defect' liability, which mandates developers to rectify any structural defects or any other defect in workmanship, quality, or provision of services for a period of five years. While this offers unprecedented security for buyers, developers argue that the lack of clear definitions regarding "workmanship" vs. "wear and tear" creates an ongoing liability that is difficult to price.
                  </p>
                  <div className="bg-slate-50 p-8 border-l-4 border-black rounded-r-lg italic text-base text-slate-900">
                    "RERA is not just a regulatory hurdle; it's a fundamental shift in how trust is quantified in real estate transactions. The burden of proof has shifted, and with it, the necessity for rigorous legal verification."
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Furthermore, the requirement to deposit 70% of the project funds into an escrow account ensures that capital isn't diverted, yet it poses liquidity challenges for smaller developers who previously relied on project-to-project fund shifting. This financial discipline, while protective of the consumer, has led to a consolidation in the market where only the most capital-efficient entities survive.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar Area */}
          <aside className="col-span-12 md:col-span-4 space-y-8">
            {/* Search Section */}
            <div className="bg-white rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.05)] p-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Search Archive</h3>
              <div className="relative">
                <input 
                  className="w-full bg-white border border-slate-300 rounded-md px-4 py-3 text-base focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all placeholder:text-slate-400" 
                  placeholder="Search legal topics..." 
                  type="text" 
                />
                <Search className="absolute right-3 top-3.5 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Categories Section */}
            <div className="bg-transparent space-y-4">
              <div className="px-2">
                <h3 className="text-xl font-semibold text-slate-900">Categories</h3>
                <p className="text-xs font-medium text-slate-500 mt-1">Browse by topic</p>
              </div>
              <nav className="flex flex-col w-full space-y-1">
                <a className="group flex items-center justify-between px-4 py-3 rounded-md hover:bg-slate-50 transition-transform active:scale-[0.98] text-slate-600" href="#">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                    <span className="text-sm font-semibold">Corporate Law</span>
                  </div>
                  <span className="text-xs text-slate-400">(24)</span>
                </a>
                <a className="group flex items-center justify-between px-4 py-3 rounded-md hover:bg-slate-50 transition-transform active:scale-[0.98] text-slate-600" href="#">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                    <span className="text-sm font-semibold">Financial Tax</span>
                  </div>
                  <span className="text-xs text-slate-400">(18)</span>
                </a>
                <a className="group flex items-center justify-between px-4 py-3 bg-slate-100 text-slate-900 rounded-md transition-transform active:scale-[0.98]" href="#">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm font-semibold">Case Archive</span>
                  </div>
                  <span className="text-xs font-medium">(42)</span>
                </a>
                <a className="group flex items-center justify-between px-4 py-3 rounded-md hover:bg-slate-50 transition-transform active:scale-[0.98] text-slate-600" href="#">
                  <div className="flex items-center space-x-3">
                    <Copyright className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                    <span className="text-sm font-semibold">Intellectual Property</span>
                  </div>
                  <span className="text-xs text-slate-400">(12)</span>
                </a>
                <a className="group flex items-center justify-between px-4 py-3 rounded-md hover:bg-slate-50 transition-transform active:scale-[0.98] text-slate-600" href="#">
                  <div className="flex items-center space-x-3">
                    <Cpu className="w-5 h-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                    <span className="text-sm font-semibold">Legal Tech</span>
                  </div>
                  <span className="text-xs text-slate-400">(9)</span>
                </a>
              </nav>
              <button className="w-full mt-4 py-3 px-4 bg-black text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                Newsletter Signup
              </button>
            </div>

            {/* Additional Info Card */}
            <div className="bg-[#0f172a] text-white rounded-lg p-6 overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-2">Legal Guidance</h4>
                <p className="text-xs opacity-80 mb-6 leading-relaxed">
                  Access our full database of RERA compliance checklists and developer liability forms.
                </p>
                <button className="text-sm font-semibold border-b border-white/70 hover:border-white pb-1 transition-colors">
                  Download Resources
                </button>
              </div>
              <div className="absolute -right-6 -bottom-6 opacity-10">
                <Gavel className="w-32 h-32" />
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-8 max-w-[1280px] mx-auto w-full">
          <div className="font-bold text-slate-900 mb-4 md:mb-0">LegalArchive Professional</div>
          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            <a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Cookie Settings</a>
            <a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact Support</a>
          </div>
          <div className="text-xs font-medium text-slate-500">© 2024 LegalArchive Professional. All rights reserved.</div>
        </div>
      </footer>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:scale-105 transition-transform z-40">
        <MessageSquare className="w-6 h-6" fill="currentColor" />
      </button>
    </div>
  );
};

export default LegalArchive;
