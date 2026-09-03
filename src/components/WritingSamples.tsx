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
      type: "Developer Guide",
      url: "https://developer.salesforce.com/docs/platform/lwc/guide/create-mixed-shadow.html"
    },
    {
      title: "Enable Third-Party Integrations with Light DOM (Beta)",
      description: "A release note on a complex new beta feature.",
      type: "Release Note",
      url: "https://help.salesforce.com/s/articleView?id=release-notes.rn_lwc_light_dom.htm&release=240&type=5"
    }
  ];

  return (
    <section id="samples" className="section-container py-20">
      <div className="content-column">
        <h2 className="text-3xl md:text-4xl mb-10">Portfolio</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {samples.map((sample, index) => (
            <a
              key={index}
              className="border border-stone-200 bg-white p-6 hover:border-stone-400 hover:shadow-sm transition-all cursor-pointer block group"
              href={sample.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 flex-shrink-0 mt-1 link-hover-group" />
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl link-hover-group">{sample.title}</h3>
                    <span className="font-accent text-sm uppercase tracking-wide whitespace-nowrap">
                      {sample.type}
                    </span>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed link-hover-group">{sample.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
