import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const IdeaPlanting: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-10 md:py-20 px-10 md:px-20 overflow-hidden flex flex-col items-center justify-center text-center">
      
      <div className="relative z-10 max-w-4xl">
        <ScrollReveal>
          {/* تم تصغير الخط والحواف */}
          <h2 className="inline-block text-4xl md:text-2xl  text-emerald-400 mb-12 px-8 py-2 md:px-12 md:py-4 border-2 border-emerald-400 rounded-full shadow-[0_0_25px_rgba(52,211,153,0.4)] glow-text ">
            {t('idea.title')}
          </h2>
        </ScrollReveal>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p1')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p2')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p3')}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-30"></div>
      <div className="absolute right-1/4 top-1/4 w-12 h-12 bg-white/10 blur-xl rounded-full animate-pulse"></div>
    </section>
  );
};

export default IdeaPlanting;
