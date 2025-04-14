
import { EventTracker } from '@/components/EventTracker';
import { TextAnalyzer } from '@/components/TextAnalyzer';
import { SkillBar } from '@/components/SkillBar';
import { ScrollReveal } from '@/components/ScrollReveal';

import { Navigation } from '@/components/Navigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg3-dark to-black text-bg3-gray bg-pattern">
      <PageTransition />
      <ScrollProgress />
      <Navigation />
      <EventTracker />
      
      {/* Hero Section */}
      <section id="hero" className="container px-4 py-20">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
              <div className="w-full h-full bg-bg3-accent" data-type="profile-image"></div>
            </div>
            <h1 className="text-5xl font-playfair gradient-text mb-4 animate-glow">Your Name</h1>
            <p className="text-xl mb-8">
              Write your introduction here. Make it compelling and memorable.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section className="container px-4 py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-6">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p>Write about your background and interests here.</p>
                <p>Include details about your birthplace and early life.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-bg3-accent rounded" data-type="local-image"></div>
                <div className="aspect-square bg-bg3-accent rounded" data-type="local-image"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Education Section */}
      <section id="education" className="container px-4 py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-6">Education & Achievements</h2>
            <div className="space-y-6">
              <div className="p-6 bg-bg3-dark/50 rounded-lg hover:bg-bg3-dark/70 transition-colors">
                <h3 className="text-xl font-playfair text-bg3-light">University Name</h3>
                <p className="text-bg3-gray">Degree Details</p>
                <p className="text-bg3-gray">Years Attended</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container px-4 py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bg3-dark/50 to-transparent pointer-events-none"></div>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-bg3-dark/50 rounded-lg">
                <h3 className="text-xl font-playfair text-bg3-light mb-4">Programming Languages</h3>
                <div className="space-y-4">
                  <SkillBar name="JavaScript" level="Expert" percentage={90} />
                  <SkillBar name="React" level="Advanced" percentage={85} />
                  <SkillBar name="TypeScript" level="Advanced" percentage={80} />
                  <SkillBar name="Node.js" level="Intermediate" percentage={75} />
                  <SkillBar name="Python" level="Intermediate" percentage={70} />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CV Section */}
      <section className="container px-4 py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-6">Download CV</h2>
            <a
              href="/path-to-your-cv.pdf"
              className="inline-block px-8 py-3 bg-bg3-purple text-white rounded-lg hover:bg-bg3-accent transition-colors"
              data-type="cv-download"
            >
              Download CV (PDF)
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* Text Analysis Section */}
      <section id="analysis" className="container px-4 py-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <TextAnalyzer />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
