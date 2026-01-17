
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const Goals: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative py-6 md:py-24 px-6 z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-20">
        
        {/* سطر الصور للموبايل فقط - يظهر قبل النصوص */}
        <div className="flex md:hidden w-full justify-between items-center mb-6 px-2" dir="ltr">
          {/* رائد الفضاء - يسار دائماً */}
          <div className="w-[40%] animate-float pointer-events-none z-40">
            <img 
              src="/public/images/cccc.png" 
              alt="رائد فضاء" 
              className="w-full h-auto opacity-100"
            />
          </div>
          
          {/* لوحة الهدف - يمين دائماً */}
          <div className="w-[30%] animate-float pointer-events-none z-40" style={{ animationDelay: '1s' }}>
            <img 
              src="/public/images/Asset 8.png" 
              alt="لوحة الهدف" 
              className="w-full h-auto opacity-100"
            />
          </div>
        </div>

        {/* صور الديسكتوب - مخفية في الموبايل ومتموضعة بشكل مطلق في الكمبيوتر */}
        {/* تم تغيير end-[-130px] إلى left-[-130px] ليبقى على اليسار دائماً في الديسكتوب */}
        <div className="hidden md:block absolute left-[-130px] top-[-55%] -translate-y-1/2 w-[300px] pointer-events-none z-40 animate-float opacity-100">
          <img 
            src="/public/images/cccc.png" 
            alt="رائد فضاء" 
            className={`w-full h-auto ${language === 'en' ? 'scale-x-[1]' : ''}`}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* النص المركزي */}
        <ScrollReveal className="relative z-30 flex flex-col items-center max-w-3xl pt-0 md:pt-0">
          <h2 className="text-2xl md:text-[7rem]  glow-text mb-2 md:mb-8 ">
            {t('goals.title')}
          </h2>
          <p className="text-sm md:text-3xl text-white/90 leading-relaxed text-center font-light px-2 md:px-4">
            {t('goals.desc_main')}
          </p>
        </ScrollReveal>

        {/* لوحة الهدف للديسكتوب - مخفية في الموبايل */}
        {/* تم تغيير start-0 إلى right-0 لتبقى على اليمين دائماً في الديسكتوب */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[250px] pointer-events-none z-40 opacity-100">
          <div className="relative animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="/public/images/Asset 8.png" 
              alt="لوحة الهدف" 
              className={`w-full h-auto ${language === 'en' ? 'scale-x-[1]' : ''}`}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>

      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none z-10"></div>
    </section>
  );
};

export default Goals;
