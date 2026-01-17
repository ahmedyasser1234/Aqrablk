
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderData = [
    { name: t('service.motion'), path: '/services/motion-graphics', image: 'arct.png', color: '#3b82f6' }, // Blue
    { name: t('service.montage'), path: '/services/montage', image: 'glax.png', color: '#a855f7' }, // Purple
    { name: t('service.photography'), path: '/services/photography', image: 'sharik.png', color: '#22d3ee' }, // Cyan
    { name: t('service.studio'), path: '/services/studio-rental', image: 'shelter.png', color: '#fb923c' }, // Orange
    { name: t('service.web'), path: '/services/web-design', image: 'arct.png', color: '#6366f1' }, // Indigo
    { name: t('service.content'), path: '/services/content-writing', image: 'glax.png', color: '#38bdf8' }, // Sky
    { name: t('service.marketing'), path: '/services/marketing', image: 'sharik.png', color: '#ec4899' }, // Pink
  ];

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const targetItem = container.children[index] as HTMLElement;
      if (targetItem) {
        const targetScroll = targetItem.offsetLeft - (container.clientWidth / 2) + (targetItem.offsetWidth / 2);
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const percentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollPos(percentage);

      const containerCenter = scrollLeft + clientWidth / 2;
      const items = Array.from(sliderRef.current.children);
      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const element = item as HTMLElement;
        const itemCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextIndex = (activeIndex + 1) % sliderData.length;
        scrollToIndex(nextIndex);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderData.length]);

  return (
    <div className="flex flex-col w-full">
      <section className="relative min-h-[65vh] md:min-h-screen flex flex-col items-center justify-center px-6 pt-10 md:pt-16">
        <div className="relative z-30 w-full max-w-5xl flex flex-col items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start w-full relative">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 z-50 animate-orbit pointer-events-none hidden md:block">
              <img src="/public/images/Asset 1.png" alt="شهاب مداري" className="w-full h-full object-contain brightness-110 drop-shadow-[0_0_10px_rgba(232,232,232,0.1)]" />
            </div>

            <ScrollReveal className="flex items-center gap-4 mb-0 md:mb-2 opacity-80 relative mx-auto lg:mx-0">
              <p className="text-sm md:text-2xl font-light text-white/90 whitespace-nowrap">
                {t('hero.out_of_box')}
              </p>
              <span className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-white/60 to-transparent block"></span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative mb-1 md:mb-6 w-full">
              <div className="absolute end-full top-0 lg:top-1/2 -translate-y-1/2 w-16 h-16 lg:w-44 lg:h-44 animate-float z-40 pointer-events-none translate-x-1/2 lg:translate-x-0 opacity-30 lg:opacity-100">
                <img src="/public/images/Asset 1.png" alt="نيزك ثابت" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]" />
              </div>
              <h1 className="text-3xl md:text-6xl lg:text-[7rem] text-white glow-text leading-[1.1] md:leading-[0.85] font-black">
                {t('hero.title')}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="max-w-2xl space-y-0 md:space-y-4 px-2 lg:px-0">
              <p className="text-xs md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
                {t('hero.desc1')}
              </p>
              <p className="text-xs md:text-xl lg:text-2xl text-white/70 leading-relaxed font-light hidden md:block">
                {t('hero.desc2')}
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-[800px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[180px] pointer-events-none z-10"></div>
      </section>

      <section className="relative min-h-[50vh] py-2 md:py-20 flex flex-col items-center">
        <ScrollReveal delay={0.2} className="z-50 mb-6 md:mb-16">
          <Link to="/services">
            <button className="px-6 md:px-14 py-2 md:py-4 rounded-xl md:rounded-2xl bg-[#1a1b26]/60 border border-blue-500/50 text-blue-400 text-lg md:text-4xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.2)] backdrop-blur-xl transition-all hover:scale-105">
              {t('nav.discover')}
            </button>
          </Link>
        </ScrollReveal>

        <div className="relative w-full max-w-full flex items-center justify-center">
          <div className="absolute start-2 top-1/4 w-12 h-12 md:w-48 md:h-48 z-40 animate-float opacity-30 md:opacity-90 pointer-events-none">
            <img src="/public/images/Asset 1.png" className="w-full h-full object-contain -rotate-12" />
          </div>

          <div 
            className="absolute z-50 top-1/2 left-1/2 pointer-events-none transition-transform duration-500 ease-out flex flex-col items-center"
            style={{ 
              transform: `translate(calc(-50% + ${(scrollPos - 0.5) * (language === 'ar' ? 80 : -80)}px), -10%)`,
            }}
          >
            <div className="relative w-[80px] md:w-[240px] animate-float mb-4 md:mb-0">
              <img 
                src="/public/images/ccc.png" 
                alt="رائد فضاء" 
                className={`w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] ${language === 'en' ? 'scale-x-[-1]' : ''}`}
              />
            </div>
          </div>

          <ScrollReveal delay={0.4} className="w-full relative z-30">
            <div 
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-4 md:gap-6 overflow-x-auto py-6 md:py-20 px-[20vw] md:px-[35vw] scrollbar-hide snap-x snap-mandatory w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {sliderData.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <Link 
                    key={index} 
                    to={service.path}
                    className={`flex-shrink-0 w-[65vw] md:w-[550px] aspect-video rounded-xl md:rounded-2xl border-2 md:border-4 bg-[#161720]/40 backdrop-blur-sm overflow-hidden snap-center relative transition-all duration-500 block group ${
                      isActive 
                        ? 'scale-100 opacity-100' 
                        : 'border-white/10 scale-90 opacity-40 blur-[2px]'
                    }`}
                    style={isActive ? { 
                      borderColor: service.color,
                      boxShadow: `0 0 25px ${service.color}aa, 0 0 50px ${service.color}44, inset 0 0 15px ${service.color}33`
                    } : {}}
                  >
                    <img 
                      src={`/public/images/${service.image}`} 
                      alt={service.name}
                      className="w-full h-full object-cover transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 flex flex-col justify-end p-4 md:p-10 text-start bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                       <h3 className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2">{service.name}</h3>
                       <div className="w-6 md:w-12 h-1 rounded-full" style={{ backgroundColor: service.color }}></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.6} className="mt-2 md:mt-10 flex gap-2 md:gap-3 z-50">
          {sliderData.map((service, i) => (
            <button 
              key={i} 
              onClick={() => scrollToIndex(i)}
              className={`h-1 md:h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-4 md:w-10' : 'w-1 md:w-2 bg-white/20'}`}
              style={activeIndex === i ? { backgroundColor: service.color } : {}}
            ></button>
          ))}
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Hero;
