import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

// قائمة فيديوهات المونتاج العرضي - يمكنك إضافة معرف الفيديو (ID) هنا ليظهر في القسم تلقائياً
const horizontalMontageVideos = [
  "CFC9RlT4iag",
  "OF2HItDjrFA",
  "VtiITVEEMcw",
  "GnU8Zt5mBVw"
  
];

const MontagePage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 px-6 md:px-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 min-h-[60vh] md:min-h-[70vh]">
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <ScrollReveal>
            <h1 className="text-5xl md:text-8xl glow-text mb-6 md:mb-8 text-purple-400 font-black">
              {t('page.montage.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl font-light">
              {t('page.montage.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-500/30">
              {t('common.order_now')}
            </button>
          </ScrollReveal>
        </div>
        <div className="w-full lg:w-1/2">
          <ScrollReveal delay={0.3}>
            <img 
              src={language === 'en' ? 'URL_FOR_ENGLISH_IMAGE_HERE' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686469/xxx_yv639q.png'} 
              className={`w-full animate-float drop-shadow-[0_0_50px_rgba(168,85,247,0.3)] object-contain ${language === 'en' ? 'scale-x-[-1]' : ''}`} 
              alt="Montage Astronaut"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* القسم الأول: مونتاج طولي */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black text-purple-300">
            {t('page.montage.gallery_vertical')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((i, index) => (
            <ScrollReveal key={`vertical-${i}`} delay={index * 0.1}>
              <div className="aspect-[9/16] rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer overflow-hidden group relative">
                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-full h-full bg-gray-900/50 flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-700">
                   <div className="flex flex-col items-center gap-3">
                     <span className="text-4xl">📱</span>
                     <span className="text-white/40 text-[10px] md:text-sm font-medium tracking-widest uppercase">
                       {t('common.work_video')} {i}
                     </span>
                   </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* القسم الثاني: مونتاج عرضي */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black text-blue-400">
            {t('page.montage.gallery_horizontal')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {horizontalMontageVideos.map((id, index) => (
            <ScrollReveal key={`horizontal-${index}`} delay={index * 0.1}>
              <div className="aspect-video rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all overflow-hidden group relative shadow-2xl">
                 <iframe 
                   src={`https://www.youtube.com/embed/${id}`} 
                   title={`Horizontal Montage ${index + 1}`}
                   className="w-full h-full"
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerPolicy="strict-origin-when-cross-origin" 
                   allowFullScreen
                 ></iframe>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Background Decor */}
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
    </div>
  );
};

export default MontagePage;
