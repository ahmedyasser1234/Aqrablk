import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

// مشاريع الويب بنفس البيانات الموجودة في صفحة الخدمات
const webProjects = [
  { image: "/public/images/arct.png", url: "https://architectegypt.com" },
  { image: "/public/images/glax.png", url: "https://galaxyrepairuae.com" },
  { image: "/public/images/sharik.png", url: "https://sharke1.netlify.app" },
  { image: "/public/images/shelter.png", url: "https://shelterhouseofcheese.com" }
];

// ألوان التوهج (بنفسجي، أزرق نيلي، وردي)
const borderColors = ['#a855f7', '#6366f1', '#ec4899'];

const WebDesignPage: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <style>{`
        .glowing-border-box {
          position: relative;
          overflow: hidden;
          z-index: 0;
          border-radius: 2rem;
          /* تأثير التوهج الثابت */
          box-shadow: 0 0 30px -5px var(--glow-color);
          border: 1px solid var(--glow-color);
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-5xl md:text-8xl glow-text mb-8 text-purple-400">{t('page.web.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.web.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">{t('common.start_project')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img 
              src={language === 'en' ? 'URL_FOR_ENGLISH_IMAGE_HERE' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686522/Asset_4_2x_vu9c2h.png'} 
              alt="Web Design Astronaut" 
              className={`w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.2)] ${language === 'en' ? 'scale-x-[-1]' : ''}`} 
            />
          </ScrollReveal>
        </div>
      </section>

      {/* قسم أعمالنا الجديد */}
      <section className="py-16 max-w-7xl mx-auto border-t border-white/5 mt-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 font-black text-purple-300">
             {t('common.portfolio')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {webProjects.map((project, index) => (
             <ScrollReveal key={index} delay={index * 0.1}>
               <a 
                 href={project.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="glowing-border-box block aspect-video group"
                 style={{ '--glow-color': borderColors[index % borderColors.length] } as React.CSSProperties}
               >
                 <div className="w-full h-full rounded-[2rem] overflow-hidden relative z-10">
                   <img 
                      src={project.image} 
                      alt={`Project ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-bold text-xl px-6 py-2 border border-white/50 rounded-full backdrop-blur-md">
                        {t('common.view_work')}
                      </span>
                   </div>
                 </div>
               </a>
             </ScrollReveal>
           ))}
        </div>
      </section>

      {/* قسم المميزات (معدل بالتوهج) */}
      <section className="py-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl text-center glow-text mb-16">{t('page.web.why_us')}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[0] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat1_title')}</h3>
                <p className="text-gray-400">{t('page.web.feat1_desc')}</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[1] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat2_title')}</h3>
                <p className="text-gray-400">{t('page.web.feat2_desc')}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[2] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">{t('page.web.feat3_title')}</h3>
                <p className="text-gray-400">{t('page.web.feat3_desc')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default WebDesignPage;
