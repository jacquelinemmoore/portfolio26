export function Experience() {
  const experience = [
    {
      title: "Senior Technical Writer",
      organization: "Salesforce",
      period: "2021 – Present",
      description: "Lead documentation initiatives for engineering teams."
    },
    {
      title: "Technology Transfer Intern",
      organization: "InnovationAccess",
      period: "2021",
      description: "Conducted prior art research, drafted freedom to operate analyses, and wrote non-confidential descriptions for patent applications."
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
      degree: "B.S. Biomedical Engineering",
      institution: "University of California, Davis",
      year: "2021"
    },
    {
      degree: "B.A. English",
      institution: "University of California, Davis",
      year: "2021"
    }
  ];

  return (
    <section id="experience" className="bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-10 text-stone-900 font-serif">Experience</h2>
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index}>
                <h3 className="text-[14px] md:text-base text-stone-900 font-serif mb-1">{job.organization}</h3>
                <p className="text-stone-600 italic mb-2 text-[14px] md:text-base">{job.title}</p>
                <p className="text-sm text-stone-500 mb-3">{job.period}</p>
                <p className="text-stone-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl mb-10 text-stone-900 font-serif">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-[14px] md:text-base text-stone-900 font-serif mb-1">{edu.degree}</h3>
                <p className="text-stone-600 italic text-[14px] md:text-base">{edu.institution}</p>
                <p className="text-sm text-stone-500 mt-1">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
