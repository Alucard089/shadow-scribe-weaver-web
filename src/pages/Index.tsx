import { EventTracker } from '@/components/EventTracker';
import { TextAnalyzer } from '@/components/TextAnalyzer';
import { SkillBar } from '@/components/SkillBar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MainNavigation } from '@/components/MainNavigation';
import { ScrollProgress } from '@/components/ScrollProgress';
import { PageTransition } from '@/components/PageTransition';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg3-dark to-black text-bg3-gray bg-pattern">
      <PageTransition />
      <ScrollProgress />
      <MainNavigation />
      <EventTracker />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDY5MDZ8MHwxfHNlYXJjaHw4fHxkYXJrJTIwZmFudGFzeXxlbnwwfHx8fDE2MjMxNjQ1MjA&ixlib=rb-1.2.1&q=80&w=1080')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-bg3-dark/0 via-bg3-dark/50 to-bg3-dark"></div>
        
        {/* Magical runes animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-bg3-purple/20 animate-[spin_30s_linear_infinite]"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full border-2 border-red-500/10 animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full border border-bg3-accent/10 animate-[spin_20s_linear_infinite]"></div>
        </div>
        
        <ScrollReveal>
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-[0_0_30px_rgba(155,0,0,0.3)] border-2 border-red-500/30">
                <div className="w-full h-full bg-gradient-to-br from-bg3-dark to-gray-700 flex items-center justify-center" data-type="profile-image">
                  {/* Placeholder for profile image */}
                  <span className="text-red-400 text-5xl">SA</span>
                </div>
              </div>
              <h1 className="text-5xl font-playfair gradient-text mb-4 animate-glow">Welcome, Traveller</h1>
              <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-6"></div>
              <p className="text-xl mb-8 text-bg3-light max-w-2xl mx-auto">
                I'm <span className="text-red-400 font-medium">Shoaib Ahmed</span>, a passionate 
                student at IIIT Hyderabad with interests in technology, powerlifting, and gaming.
                Join me on this journey through my portfolio as we explore my skills, achievements, and aspirations.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <a href="#about" className="px-6 py-3 bg-bg3-purple text-white rounded-md hover:bg-bg3-accent transition-colors shadow-lg shadow-bg3-purple/20 group">
                  <span className="group-hover:translate-x-1 transition-transform inline-block">Discover More</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute right-0 top-1/4 w-64 h-64 opacity-20 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">About Me</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair text-red-400 mb-4">Shoaib Ahmed</h3>
                  <p className="text-bg3-gray mb-4">
                    I'm from Berhampore, West Bengal, where I developed my passion for technology and sports.
                    As a student at IIIT Hyderabad, I'm constantly expanding my knowledge and skills in various fields.
                  </p>
                  <div className="bg-bg3-dark/50 border border-bg3-accent/20 p-6 rounded-lg">
                    <h4 className="text-xl font-playfair text-bg3-light mb-4">Hobbies</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Working Out & Power Lifting</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Football</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Playing Games</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span>Spending Time with Close Friends</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-bg3-dark rounded-lg overflow-hidden border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                    <img 
                      src="/lovable-uploads/0d0012e0-bf23-47d6-b650-85b6f5c0d2fa.png"
                      alt="Historic mosque in Berhampore"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square bg-bg3-dark rounded-lg overflow-hidden border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                    <img 
                      src="/lovable-uploads/4be03055-9744-4751-8493-1924024e5cd5.png"
                      alt="Hazarduari Palace"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square bg-bg3-dark rounded-lg overflow-hidden border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                    <img 
                      src="/lovable-uploads/d918528c-7a38-4ce7-9217-6071ef26d234.png"
                      alt="Colonial architecture in Berhampore"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="aspect-square bg-bg3-dark rounded-lg overflow-hidden border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                    <img 
                      src="/lovable-uploads/16331905-b8d9-4c1f-a709-8c7b12d0f957.png"
                      alt="Berhampore cityscape"
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gradient-to-b from-bg3-dark to-bg3-dark/70 relative">
        <div className="absolute left-0 bottom-1/4 w-96 h-96 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">Education</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-red-500 to-bg3-purple"></div>
                
                <div className="grid grid-cols-1 gap-12">
                  <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-bg3-purple border-2 border-bg3-dark"></div>
                    <div className="ml-auto mr-8 text-right md:w-1/2 p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                      <h3 className="text-xl font-playfair text-bg3-light">IIIT Hyderabad</h3>
                      <p className="text-bg3-gray mb-1">Currently Studying</p>
                      <p className="text-red-400">BTech</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-bg3-purple border-2 border-bg3-dark"></div>
                    <div className="mr-auto ml-8 md:w-1/2 p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                      <h3 className="text-xl font-playfair text-bg3-light">MCV School, Berhampore</h3>
                      <p className="text-bg3-gray mb-1">10th to 12th</p>
                      <p className="text-red-400">Higher Secondary Education</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-bg3-purple border-2 border-bg3-dark"></div>
                    <div className="ml-auto mr-8 text-right md:w-1/2 p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                      <h3 className="text-xl font-playfair text-bg3-light">Mary Immaculate School, Berhampore</h3>
                      <p className="text-bg3-gray mb-1">LKG to 10th</p>
                      <p className="text-red-400">Primary and Secondary Education</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-bg3-purple border-2 border-bg3-dark"></div>
                    <div className="mr-auto ml-8 md:w-1/2 p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                      <h3 className="text-xl font-playfair text-bg3-light">Physics Wallah</h3>
                      <p className="text-bg3-gray mb-1">Coaching</p>
                      <p className="text-red-400">Online Learning Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute right-1/4 top-1/3 w-64 h-64 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">Skills</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                  <h3 className="text-xl font-playfair text-bg3-light mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    <SkillBar name="C/C++" level="Intermediate" percentage={70} />
                    <SkillBar name="HTML/CSS" level="Intermediate" percentage={70} />
                    <SkillBar name="JavaScript" level="Intermediate" percentage={60} />
                    <SkillBar name="Assembly" level="Intermediate" percentage={60} />
                    <SkillBar name="Git" level="Beginner" percentage={40} />
                    <SkillBar name="SQL" level="Beginner" percentage={40} />
                  </div>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors">
                  <h3 className="text-xl font-playfair text-bg3-light mb-4">Physical Skills</h3>
                  <div className="space-y-4">
                    <SkillBar name="Power Lifting" level="Intermediate" percentage={75} />
                    <SkillBar name="Football" level="Intermediate" percentage={70} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-24 bg-gradient-to-b from-bg3-dark/70 to-bg3-dark relative">
        <div className="absolute left-1/4 bottom-1/3 w-64 h-64 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">Hobbies</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors hover:-translate-y-1 duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-bg3-purple/20 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-bg3-purple/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <h3 className="text-center font-playfair text-bg3-light">Working Out</h3>
                  <p className="text-center text-sm text-bg3-gray mt-2">Power lifting and strength training</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors hover:-translate-y-1 duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-bg3-purple/20 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-bg3-purple/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-center font-playfair text-bg3-light">Football</h3>
                  <p className="text-center text-sm text-bg3-gray mt-2">Playing and watching matches</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors hover:-translate-y-1 duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-bg3-purple/20 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-bg3-purple/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="text-center font-playfair text-bg3-light">Gaming</h3>
                  <p className="text-center text-sm text-bg3-gray mt-2">PUBG and other video games</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors hover:-translate-y-1 duration-300 group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-bg3-purple/20 flex items-center justify-center group-hover:from-red-500/30 group-hover:to-bg3-purple/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-center font-playfair text-bg3-light">Hanging Out</h3>
                  <p className="text-center text-sm text-bg3-gray mt-2">Spending time with close friends</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 relative">
        <div className="absolute right-1/4 top-1/3 w-48 h-48 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">Achievements</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors group">
                  <h3 className="text-lg font-playfair text-bg3-light mb-2 group-hover:text-red-400 transition-colors">Academic Excellence in 10th Grade</h3>
                  <p className="text-sm text-bg3-gray">School topper in 10th grade at Mary Immaculate School, Berhampore</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors group">
                  <h3 className="text-lg font-playfair text-bg3-light mb-2 group-hover:text-red-400 transition-colors">Academic Excellence in 12th Grade</h3>
                  <p className="text-sm text-bg3-gray">Ranked 2nd in school and 4th in district at MCV School, Berhampore</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors group">
                  <h3 className="text-lg font-playfair text-bg3-light mb-2 group-hover:text-red-400 transition-colors">JEE Mains Achievement</h3>
                  <p className="text-sm text-bg3-gray">Secured rank 10326 in JEE Mains examination</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors group">
                  <h3 className="text-lg font-playfair text-bg3-light mb-2 group-hover:text-red-400 transition-colors">PUBG Mobile Tournaments</h3>
                  <p className="text-sm text-bg3-gray">Won multiple PUBG Mobile tournaments</p>
                </div>
                
                <div className="p-6 bg-bg3-dark/50 rounded-lg border border-bg3-accent/20 hover:border-red-500/30 transition-colors group">
                  <h3 className="text-lg font-playfair text-bg3-light mb-2 group-hover:text-red-400 transition-colors">Art Competitions</h3>
                  <p className="text-sm text-bg3-gray">Won several art competitions during school</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-24 bg-gradient-to-b from-bg3-dark to-bg3-dark/70 relative">
        <div className="absolute left-1/4 top-1/3 w-64 h-64 opacity-10 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2">Download Resume</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-bg3-purple text-white rounded-lg hover:from-red-600 hover:to-bg3-accent transition-all shadow-lg shadow-bg3-purple/20 group"
              data-type="cv-download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume (PDF)
            </a>
            <p className="text-bg3-gray mt-4">Get a comprehensive overview of my skills and experiences</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Text Analysis Section */}
      <section id="analysis" className="py-24 relative">
        <div className="absolute right-1/4 bottom-1/3 w-96 h-96 opacity-5 bg-red-500 rounded-full blur-3xl pointer-events-none"></div>
        <ScrollReveal>
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-playfair text-bg3-purple mb-2 text-center">Text Analysis</h2>
            <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-red-500 to-bg3-purple mb-12"></div>
            <div className="max-w-5xl mx-auto">
              <TextAnalyzer />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="bg-bg3-dark/90 py-8 border-t border-bg3-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-playfair text-xl italic bg-gradient-to-br from-red-400 to-bg3-purple bg-clip-text text-transparent">
                Shoaib Ahmed
              </div>
            </div>
            <div className="text-bg3-gray text-sm">
              © 2025 All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
