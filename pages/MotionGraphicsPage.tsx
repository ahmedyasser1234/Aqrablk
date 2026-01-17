
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const MotionGraphicsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-6 md:px-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 min-h-[60vh] md:min-h-[70vh]">
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <ScrollReveal delay={0.3}>
            <img 
              src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686487/Asset_2_2x_qaiojz.png" 
              className="w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] object-contain"
              alt="Motion Graphics Astronaut"
            />
          </ScrollReveal>
        </div>
      
        <div className="w-full lg:w-1/2 text-center lg:text-start order-2 lg:order-1">
          <ScrollReveal>
            <h1 className="text-4xl md:text-8xl glow-text mb-6 md:mb-8 text-blue-400 font-black">
              {t('page.motion.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl font-light">
              {t('page.motion.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              {t('common.order_now')}
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all">
              {t('common.view_work')}
            </button>
          </ScrollReveal>
        </div>
        
      </section>
      
      {/* القسم الأول: معرض الموشن جرافيك */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black">
            {t('page.motion.gallery_motion')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[1, 2, 3].map((i, index) => (
            <ScrollReveal key={`motion-${i}`} delay={index * 0.1}>
              <div className="aspect-video rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all cursor-pointer overflow-hidden group relative">
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full bg-gray-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                   <div className="flex flex-col items-center gap-4">
                     <span className="text-4xl">🎬</span>
                     <span className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase">
                       {t('common.work_video')} {i}
                     </span>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* القسم الثاني: معرض الوايت بورد */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black text-purple-400">
            {t('page.motion.gallery_whiteboard')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {[1, 2, 3].map((i, index) => (
            <ScrollReveal key={`whiteboard-${i}`} delay={index * 0.1}>
              <div className="aspect-video rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer overflow-hidden group relative">
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full bg-gray-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                   <div className="flex flex-col items-center gap-4">
                     <span className="text-4xl">🖊️</span>
                     <span className="text-white/40 text-sm md:text-base font-medium tracking-widest uppercase">
                       {t('common.work_video')} {i}
                     </span>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Background Decor */}
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </div>
  );
};

export default MotionGraphicsPage;
