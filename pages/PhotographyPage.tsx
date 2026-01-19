
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from '../components/ScrollReveal';

// قائمة فيديوهات كواليس التصوير
const btsVideos = [
  "0NgXkHQTt4U",
  "k9M60YJJ3iE",
  "m2mdBK91kQY"
];

// صور نماذج للتصوير
const photoSessions = [
  "https://images.unsplash.com/photo-1542038784456-1ea6388dd2e6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
];

// مصفوفة الألوان للتنويع (أزرق، بنفسجي، تركواز)
const borderColors = ['#3b82f6', '#a855f7', '#22d3ee'];

const PhotographyPage: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-24 px-6 md:px-10 pb-20">
      <style>{`
        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .glowing-border-box {
          position: relative;
          overflow: hidden;
          z-index: 0;
          padding: 3px; /* Border width */
          border-radius: 2rem;
        }
        .glowing-border-box::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          /* تم تقليل الشفافية قليلاً وزيادة كثافة اللون للظهور مع البلور */
          background: conic-gradient(transparent 30%, transparent 50%, var(--glow-color));
          /* تسريع الحركة من 2.5s إلى 1.5s */
          animation: border-rotate 2.0s linear infinite; 
          filter: blur(10px); 
          z-index: -2;
        }
        .glowing-border-box::after {
          content: '';
          position: absolute;
          inset: 3px;
          background: #080911;
          border-radius: calc(2rem - 3px);
          z-index: -1;
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 min-h-[60vh] md:min-h-[70vh]">
        {/* حاوية الصورة - تظهر في اليمين للعربية واليسار للإنجليزية بسبب الترتيب واتجاه الصفحة */}
        <div className="w-full lg:w-1/2 order-1">
          <ScrollReveal delay={0.3}>
            <img 
              src={language === 'en' ? 'URL_FOR_ENGLISH_IMAGE_HERE' : 'https://res.cloudinary.com/dk3wwuy5d/image/upload/v1768686527/Asset_3_2x_wt6qwj.png'} 
              className={`w-full animate-float drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] object-contain ${language === 'en' ? 'scale-x-[-1]' : ''}`} 
              alt="Photography Astronaut" 
            />
          </ScrollReveal>
        </div>

        {/* حاوية النصوص */}
        <div className="w-full lg:w-1/2 text-center lg:text-start order-2">
          <ScrollReveal>
            <h1 className="text-4xl md:text-8xl glow-text mb-6 md:mb-8 text-blue-400 font-black">
              {t('page.photography.title')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl font-light">
              {t('page.photography.desc')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4} className="flex gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/30">
              {t('common.book_session')}
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* القسم الأول: معرض الصور */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black text-blue-300">
            {t('page.photography.inside_studio')}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {photoSessions.map((imgUrl, index) => (
            <ScrollReveal key={`photo-${index}`} delay={index * 0.1}>
              <div 
                className="glowing-border-box aspect-[3/4] shadow-2xl group"
                // تغيير اللون بناءً على الترتيب
                style={{ '--glow-color': borderColors[index % borderColors.length] } as React.CSSProperties}
              >
                <div className="w-full h-full rounded-[calc(2rem-3px)] overflow-hidden relative z-10">
                  <img 
                    src={imgUrl} 
                    alt={`Session ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-bold text-xl">{t('page.photography.session')} {index + 1}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* القسم الثاني: كواليس التصوير (فيديو) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl text-center glow-text mb-12 md:mb-20 font-black text-purple-400">
             {language === 'ar' ? 'كواليس التصوير' : 'Behind The Scenes'}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {btsVideos.map((id, index) => (
            <ScrollReveal key={`bts-${index}`} delay={index * 0.1}>
              <div 
                className="glowing-border-box aspect-video shadow-2xl"
                // تغيير اللون بناءً على الترتيب
                style={{ '--glow-color': borderColors[(index + 1) % borderColors.length] } as React.CSSProperties}
              >
                 <div className="w-full h-full rounded-[calc(2rem-3px)] overflow-hidden relative z-10">
                   <iframe 
                     src={`https://www.youtube.com/embed/${id}`} 
                     title={`BTS Video ${index + 1}`}
                     className="w-full h-full"
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     referrerPolicy="strict-origin-when-cross-origin" 
                     allowFullScreen
                   ></iframe>
                 </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Background Decor */}
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default PhotographyPage;
