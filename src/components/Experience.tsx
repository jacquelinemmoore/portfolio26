export function Experience() {
  const experience = [
    {
      title: "Senior Technical Writer",
      organization: "Salesforce",
      period: "2021 – Present",
      description: "Leading documentation initiatives (dev guides, release notes, UI text, and more) for engineering teams."
    },
    {
      title: "Technology Transfer Intern",
      organization: "InnovationAccess",
      period: "2021",
      description: "Conducted prior art research, then drafted freedom-to-operate analyses and non-confidential descriptions for patent applications."
    },
    {
      title: "Project Manager",
      organization: "BioInnovation Group",
      period: "2019 – 2021",
      description: "Co-led a team of 10 to construct microfluidic controllers and chips for biomedical research under Dr. Marc Facciotti."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science, Biomedical Engineering",
      institution: "University of California, Davis",
      year: "2021"
    },
    {
      degree: "Bachelor of Arts, English",
      institution: "University of California, Davis",
      year: "2021"
    }
  ];

  return (
    <section id="experience" className="bg-stone-50">
      <div className="section-container py-20">
        <div className="content-column">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-10">Experience</h2>
            <div className="space-y-10">
              {experience.map((job, index) => (
                <div key={index}>
                  <h3 className="text-xl mb-1">{job.organization} ({job.period})</h3>
                  <div className="pl-5">
                    <p className="italic mb-2 text-sm md:text-base">{job.title}</p>
                    <p className="text-sm md:text-base">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl mb-10">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl mb-1">{edu.degree}</h3>
                  <div className="pl-5">
                    <p className="italic text-sm md:text-base">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
