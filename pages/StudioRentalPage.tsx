
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

// مصفوفة الألوان للتنويع (أزرق، بنفسجي، تركواز)
const borderColors = ['#3b82f6', '#a855f7', '#22d3ee'];

const features = [
  { icon: '🎥', titleKey: 'page.studio.feat1_title', descKey: 'page.studio.feat1_desc' },
  { icon: '🎙️', titleKey: 'page.studio.feat2_title', descKey: 'page.studio.feat2_desc' },
  { icon: '🎨', titleKey: 'page.studio.feat3_title', descKey: 'page.studio.feat3_desc' },
  { icon: '☕', titleKey: 'page.studio.feat4_title', descKey: 'page.studio.feat4_desc' },
];

const StudioRentalPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-24 px-10 pb-12">
      <style>{`
        .glowing-border-box {
          position: relative;
          overflow: hidden;
          z-index: 0;
          border-radius: 2rem;
          /* استبدال الأنيميشن بـ Glow ثابت */
          box-shadow: 0 0 30px -5px var(--glow-color);
          border: 1px solid var(--glow-color);
        }
      `}</style>

      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8">{t('page.studio.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              {t('page.studio.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold transition-all">{t('common.check_availability')}</button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <ScrollReveal delay={0.3}>
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="/public/images/bbb.png" alt="الاستوديو" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px]"></div>
          </ScrollReveal>
        </div>
      </section>
      
      <section className="py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
           <ScrollReveal key={index} delay={0.1 * (index + 1)}>
             <div 
               className="glowing-border-box h-full"
               style={{ '--glow-color': borderColors[index % borderColors.length] } as React.CSSProperties}
             >
               <div className="relative z-10 h-full p-8 rounded-[2rem] text-center flex flex-col items-center justify-center">
                 <div className="text-4xl mb-4">{feature.icon}</div>
                 <h3 className="text-xl font-bold mb-2">{t(feature.titleKey)}</h3>
                 <p className="text-gray-400">{t(feature.descKey)}</p>
               </div>
             </div>
           </ScrollReveal>
        ))}
      </section>
    </div>
  );
};

export default StudioRentalPage;
