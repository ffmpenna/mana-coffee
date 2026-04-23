import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_CATALOG } from '../data/mockData';

const Menu = () => {
  // Estado para controlar qual aba está ativa no mobile
  const [activeTab, setActiveTab] = useState('matcha');

  return (
    <div className="bg-background text-on-surface font-body pb-12 md:pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto mb-10 md:mb-32 pt-12 md:pt-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline text-primary tracking-tighter uppercase break-words leading-[0.9]">
            O CARDÁPIO
          </h1>
          <div className="max-w-sm md:mb-2">
            <p className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed">
              Curadoria de grãos brasileiros e rituais coreanos
            </p>
          </div>
        </div>
      </section>
      <div className="px-6 md:px-8 max-w-7xl mx-auto mb-10 lg:hidden">
        <div className="flex p-1 bg-surface-container-lowest border border-surface-container-highest rounded-lg">
          {/* Botão Matcha */}
          <button
            onClick={() => setActiveTab('matcha')}
            className="relative flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg"
          >
            {activeTab === 'matcha' && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-primary shadow-[2px_2px_0px_0px_#2c4f27] rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${activeTab === 'matcha' ? 'text-on-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Matcha
            </span>
          </button>

          {/* Botão Coffee */}
          <button
            onClick={() => setActiveTab('coffee')}
            className="relative flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg"
          >
            {activeTab === 'coffee' && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-primary shadow-[2px_2px_0px_0px_#2c4f27] rounded-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-300 ${activeTab === 'coffee' ? 'text-on-primary' : 'text-on-surface-variant hover:text-primary'}`}
            >
              Coffee
            </span>
          </button>
        </div>
      </div>
      {/* Menu Content */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Category: Matcha Series */}
        <div
          className={`lg:col-span-7 space-y-10 md:space-y-16 ${
            activeTab === 'matcha' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <h2 className="text-2xl sm:text-3xl font-black font-headline text-primary tracking-tight uppercase">
              Matcha Series
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {PRODUCT_CATALOG.matcha.map((item) => (
              <div
                key={item.id}
                className="group flex flex-row gap-5 md:gap-8 items-center sm:items-start"
              >
                <div className="w-28 sm:w-48 md:w-56 shrink-0 aspect-square rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#2c4f27] md:shadow-[6px_6px_0px_0px_#2c4f27]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center py-1 sm:py-2 md:py-4">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold font-headline text-primary leading-tight mb-2 md:mb-3 transition-colors group-hover:text-primary/80">
                    {item.name}
                  </h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category: Coffee Series */}
        <div
          className={`lg:col-span-5 space-y-10 md:space-y-16 ${
            activeTab === 'coffee' ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <h2 className="text-2xl sm:text-3xl font-black font-headline text-primary tracking-tight uppercase">
              Coffee
            </h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {PRODUCT_CATALOG.coffee.map((item) => (
              <div
                key={item.id}
                className="group flex flex-row gap-5 md:gap-8 items-center sm:items-start"
              >
                <div className="w-28 sm:w-48 md:w-56 shrink-0 aspect-square rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#2c4f27] md:shadow-[6px_6px_0px_0px_#2c4f27]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col justify-center py-1 sm:py-2 md:py-4">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold font-headline text-primary leading-tight mb-2 md:mb-3 transition-colors group-hover:text-primary/80">
                    {item.name}
                  </h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-12">
          <p className="text-center text-on-surface-variant text-sm md:text-base italic">
            *Todos os nossos produtos são preparados com ingredientes de alta qualidade e
            atenção aos detalhes para garantir a melhor experiência possível.
          </p>
        </div>
      </section>
      <div className="flex flex-col w-fit p-6 md:p-10 self-center mx-auto mt-20 bg-primary-fixed text-on-primary-fixed rounded-lg shadow-[4px_4px_0px_0px_#2c4f27] md:shadow-[6px_6px_0px_0px_#2c4f27] items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 backdrop-blur-sm border-4 border-on-primary-fixed/50">
          <span className="text-2xl md:text-3xl font-black">마나</span>
        </div>
        <h4 className="font-headline font-bold text-lg sm:text-xl md:text-2xl mb-2 md:mb-3 uppercase tracking-wide">
          Energia e Foco
        </h4>
        <p className="text-on-primary-fixed/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium">
          O significado de Mana em cada gole.
        </p>
      </div>
    </div>
  );
};

export default Menu;
