
import React from 'react';
import ScrollReveal from './ScrollReveal';

const StudioShowcase: React.FC = () => {
  return (
    <section className="relative w-full py-10 px-0 overflow-hidden">
      <ScrollReveal className="max-w-[1920px] mx-auto relative group">
        {/* حاوية الصورة الرئيسية بتصميم منحني يشبه سفينة الفضاء */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <img 
            src="https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686177/zzzz_rprsbt.png" 
            alt="Studio Preview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // خلفية مؤقتة في حالة عدم وجود الصورة بعد
              (e.target as HTMLImageElement).style.backgroundColor = '#1a1b26';
            }}
          />
          
          {/* تأثيرات الإضاءة والظلال فوق الصورة لتعزيز العمق */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080911] via-transparent to-[#080911] opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#080911] via-transparent to-[#080911] opacity-40"></div>
          
          {/* لمسات تقنية (HUD) اختيارية لتعزيز الثيم الفضائي */}
          <div className="absolute top-10 left-10 border-l border-t border-blue-500/30 w-20 h-20 pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 border-r border-b border-purple-500/30 w-20 h-20 pointer-events-none"></div>
        </div>

        {/* تسمية توضيحية بسيطة أسفل السكشن */}
      
      </ScrollReveal>

      {/* توهج خلفي للسكشن */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default StudioShowcase;
