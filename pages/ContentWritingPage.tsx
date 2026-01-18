import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

const ContentWritingPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 px-10 pb-12">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[60vh]">
        {/* حاوية الصورة - تظهر في اليمين للعربية واليسار للإنجليزية بسبب الترتيب واتجاه الصفحة */}
        <div className="w-full lg:w-1/2 order-1">
          <ScrollReveal delay={0.3}>
            <img 
              src={language === 'en' ? 'URL_FOR_ENGLISH_IMAGE_HERE' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686499/Asset_5_2x_vcffi4.png'} 
              alt="Content Writing Astronaut" 
              className={`w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] object-contain ${language === 'en' ? 'scale-x-[-1]' : ''}`} 
            />
          </ScrollReveal>
        </div>

        {/* حاوية النصوص */}
        <div className="w-full lg:w-1/2 text-center lg:text-start order-2">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl glow-text mb-8 text-blue-400 font-black">{t('page.content.title')}</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl font-light">
              {t('page.content.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">{t('common.request_sample')}</button>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 max-w-5xl mx-auto relative z-10">
        <div className="space-y-12">
          <ScrollReveal delay={0.1} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all">
            <h3 className="text-3xl font-bold mb-4 text-blue-300">{t('page.content.feat1_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat1_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all">
            <h3 className="text-3xl font-bold mb-4 text-blue-300">{t('page.content.feat2_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat2_desc')}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="border-s-4 border-blue-500 px-8 p-6 bg-white/5 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all">
            <h3 className="text-3xl font-bold mb-4 text-blue-300">{t('page.content.feat3_title')}</h3>
            <p className="text-gray-400 text-lg">{t('page.content.feat3_desc')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Background Decor */}
      <div className="fixed top-1/2 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default ContentWritingPage;