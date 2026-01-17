
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const IdeaPlanting: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-6 md:py-20 px-6 md:px-20 flex flex-col items-center justify-center text-center z-20">
      
      <div className="relative z-30 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-2xl md:text-[7rem] glow-text mb-6 md:mb-12 ">
            {t('idea.title')}
          </h2>
        </ScrollReveal>
        <br />
        <div className="space-y-2 md:space-y-4 max-w-3xl mx-auto px-2">
          <ScrollReveal delay={0.2}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p1')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p2')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <p className="text-base md:text-3xl text-white/90 leading-relaxed font-medium">{t('idea.p3')}</p>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-white/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-30 z-10"></div>
      <div className="absolute right-1/4 top-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/10 blur-xl rounded-full animate-pulse z-10"></div>
    </section>
  );
};

export default IdeaPlanting;
