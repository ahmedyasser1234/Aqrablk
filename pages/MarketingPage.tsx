import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

// ألوان التوهج (وردي، بنفسجي، أحمر وردي)
const borderColors = ['#ec4899', '#a855f7', '#f43f5e'];

const MarketingPage: React.FC = () => {
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
            <h1 className="text-6xl md:text-[6rem] glow-text mb-8 text-pink-500">{t('page.marketing.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.marketing.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/201099822822" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)] inline-block text-center"
            >
              {t('common.free_consultation')}
            </a>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img 
              src={language === 'en' ? 'URL_FOR_ENGLISH_IMAGE_HERE' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686481/Asset_6_2x_wo2ndl.png'} 
              alt="Marketing Astronaut" 
              className={`w-full animate-float drop-shadow-[0_0_50px_rgba(236,72,153,0.3)] ${language === 'en' ? 'scale-x-[-1]' : ''}`} 
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Methodology Section - Converted to Glowing Cards */}
      <section className="py-12 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-16 text-center glow-text text-pink-300">{t('page.marketing.methodology')}</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <ScrollReveal delay={0.1}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[0] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-pink-500 mb-4">01</div>
                <h4 className="text-xl font-bold mb-2">{t('page.marketing.step1_title')}</h4>
                <p className="text-gray-400">{t('page.marketing.step1_desc')}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 2 */}
          <ScrollReveal delay={0.2}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[1] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-purple-500 mb-4">02</div>
                <h4 className="text-xl font-bold mb-2">{t('page.marketing.step2_title')}</h4>
                <p className="text-gray-400">{t('page.marketing.step2_desc')}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Step 3 */}
          <ScrollReveal delay={0.3}>
            <div 
              className="glowing-border-box h-full"
              style={{ '--glow-color': borderColors[2] } as React.CSSProperties}
            >
              <div className="relative z-10 h-full p-10 rounded-[2rem] bg-[#080911]/80 backdrop-blur-sm flex flex-col items-center text-center">
                <div className="text-5xl font-bold text-rose-500 mb-4">03</div>
                <h4 className="text-xl font-bold mb-2">{t('page.marketing.step3_title')}</h4>
                <p className="text-gray-400">{t('page.marketing.step3_desc')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Background Decor */}
      <div className="fixed top-1/2 left-10 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default MarketingPage;
