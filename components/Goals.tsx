import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const Goals: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative py-6 md:py-24 px-6 z-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-20">
        
        {/* سطر الموبايل: التحكم في أماكن الصور حسب اللغة */}
        {/* dir="ltr" لضمان ثبات الاتجاه ثم التبديل عبر flex-row-reverse */}
        <div 
          className={`flex md:hidden w-full justify-between items-center mb-4 px-0 ${language === 'en' ? 'flex-row-reverse' : 'flex-row'}`} 
          dir="ltr"
        >
          {/* رائد الفضاء - يظهر يساراً في العربية ويميناً في الإنجليزية مع قلب الصورة في الإنجليزية */}
          <div className="w-[28%] animate-float pointer-events-none z-40">
            <img 
              src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686175/cccc_irddlo.png" 
              alt="رائد فضاء" 
              className={`w-full h-auto opacity-100 ${language === 'en' ? 'scale-x-[-1]' : ''}`}
            />
          </div>
          
          {/* العنوان - بالمنتصف - تم تصغير الخط والحواف */}
          <h2 className="text-base font-black text-cyan-400 flex-1 text-center mx-2 px-3 py-1.5 border border-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.3)] glow-text" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {t('goals.title')}
          </h2>

          {/* لوحة الهدف - تظهر يميناً في العربية ويساراً في الإنجليزية مع قلب الصورة في الإنجليزية */}
          <div className="w-[22%] animate-float pointer-events-none z-40" style={{ animationDelay: '1s' }}>
            <img 
              src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686171/Asset_8_rhau52.png" 
              alt="لوحة الهدف" 
              className={`w-full h-auto opacity-100 ${language === 'en' ? 'scale-x-[-1]' : ''}`}
            />
          </div>
        </div>

        {/* صور الديسكتوب - رائد الفضاء: يسار في العربي، يمين في الإنجليزي */}
        <div className={`hidden md:block absolute top-[-55%] -translate-y-1/2 w-[300px] pointer-events-none z-40 animate-float opacity-100 ${language === 'ar' ? 'left-[-130px]' : 'right-[-130px]'}`}>
          <img 
            src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686175/cccc_irddlo.png" 
            alt="رائد فضاء" 
            className={`w-full h-auto ${language === 'en' ? 'scale-x-[-1]' : ''}`}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* الحاوية النصية الرئيسية */}
        <ScrollReveal className="relative z-30 flex flex-col items-center max-w-3xl pt-0 md:pt-0">
          {/* عنوان الديسكتوب - مخفي في الموبايل - تم تصغيره */}
          <h2 className="hidden md:inline-block text-2xl md:text-4xl font-black text-cyan-400 mb-8 px-10 py-3 border-2 border-cyan-400 rounded-full shadow-[0_0_25px_rgba(34,211,238,0.4)] glow-text">
            {t('goals.title')}
          </h2>
          
          {/* الوصف - مرفوع للأعلى في الموبايل (-mt-12) ومقسم لثلاثة أسطر (max-w-[280px]) */}
          <p className="text-sm md:text-3xl text-white/90 leading-relaxed text-center font-light px-2 md:px-4 max-w-[280px] md:max-w-none mx-auto -mt-12 md:mt-0">
            {t('goals.desc_main')}
          </p>
        </ScrollReveal>

        {/* لوحة الهدف للديسكتوب - يمين في العربي، يسار في الإنجليزي */}
        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[250px] pointer-events-none z-40 opacity-100 ${language === 'ar' ? 'right-0' : 'left-0'}`}>
          <div className="relative animate-float" style={{ animationDelay: '1s' }}>
            <img 
              src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686171/Asset_8_rhau52.png" 
              alt="لوحة الهدف" 
              className={`w-full h-auto ${language === 'en' ? 'scale-x-[-1]' : ''}`}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>

      </div>

      {/* توهج الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/5 rounded-full blur-[80px] md:blur-[150px] pointer-events-none z-10"></div>
    </section>
  );
};

export default Goals;
