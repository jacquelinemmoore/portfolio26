import { FileText } from 'lucide-react';

export function WritingSamples() {
  const samples = [
    {
      title: "Server-Side Rendering (SSR) with Lightning Web Runtime",
      description: "Comprehensive developer guide content for enabling SSR in Salesforce projects with step-by-step instructions and sample code.",
      type: "Developer Guide",
      url: "https://developer.salesforce.com/docs/platform/lwr/guide/lwr-ssr.html"
    },
    {
      title: "Preview Components with Local Dev",
      description: "Detailed documentation outlining the latest tools for local development.",
      type: "Developer Guide",
      url: "https://developer.salesforce.com/docs/platform/lwc/guide/get-started-test-components.html"
    },
    {
      title: "Use Lightning Experience Insights",
      description: "A help page for Salesforce admins on how to use actionable insights to improve page performance.",
      type: "User Help",
      url: "https://help.salesforce.com/s/articleView?id=xcloud.lex_insights_report.htm&type=5"
    },
    {
      title: "Lightning Web Components: Mixed Shadow Mode (Beta)",
      description: "Content for a feature that lets developers native shadow DOM and synthetic shadow DOM in the same app.",
      type: "Developer Guide"
    },
    {
      title: "Enable Third-Party Integrations with Light DOM (Beta)",
      description: "A release note on a complex new beta feature.",
      type: "Release Notes",
      url: "https://help.salesforce.com/s/articleView?id=release-notes.rn_lwc_light_dom.htm&release=240&type=5"
    }
  ];

  return (
    <section id="samples" className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl mb-10 text-stone-900 font-serif">Writing Samples</h2>
      <div className="space-y-6">
        {samples.map((sample, index) => (
          <div 
            key={index}
            className="border border-stone-200 bg-white p-6 hover:border-stone-400 transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-stone-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl text-stone-900 font-serif">{sample.title}</h3>
                  <span className="text-xs text-stone-500 uppercase tracking-wide whitespace-nowrap">
                    {sample.type}
                  </span>
                </div>
                <p className="text-stone-600 leading-relaxed">{sample.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}