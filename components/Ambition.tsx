import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const Ambition: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative py-4 md:py-20 px-6 md:px-20 min-h-[40vh] md:min-h-[80vh] flex items-center justify-center z-20">
      
      {/* رائد الفضاء - متموضع في اليسار للموبايل (إنجليزي) وفي المنتصف (عربي) */}
      <div className={`absolute top-4 md:top-10 w-40 md:w-[600px] h-auto animate-float z-40 pointer-events-none ${
        language === 'en' 
          ? 'left-4 translate-x-0 md:left-0 md:right-auto' 
          : 'left-1/2 -translate-x-1/2 md:translate-x-0 md:right-10 md:left-auto'
      }`}>
        <img 
          src={language === 'en' ? 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768753480/FLAG_REVARS_fyvedl.png' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686185/xxxxx_chyx9k.png'} 
          alt="Astronaut holding flag" 
          className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,255,255,0.15)] opacity-100"
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; }}
        />
      </div>

      {/* حاوية النص - تم تعديلها لتكون في المنتصف على الديسكتوب */}
      <div className="relative z-30 max-w-5xl w-full flex flex-col items-center text-center pt-24 md:pt-0">
        <ScrollReveal>
          <h2 className="text-2xl md:text-[7rem] glow-text mb-4 md:mb-6 ">
            {t('ambition.title')}
          </h2>
        </ScrollReveal>
        <br />
        <div className="max-w-2xl space-y-2 px-2 md:px-0">
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium"> {t('ambition.p1')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium"> {t('ambition.p2')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium hidden md:block"> {t('ambition.p3')} </p>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium hidden md:block"> {t('ambition.p4')} </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[200px] pointer-events-none z-10"></div>
    </section>
  );
};

export default Ambition;
