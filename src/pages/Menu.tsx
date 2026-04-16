import { PRODUCT_CATALOG } from '../data/mockData';

const Menu = () => {
  return (
    <div className="bg-background text-on-surface font-body pb-32">
      {/* Hero Section */}
      <section className="px-8 max-w-7xl mx-auto mb-24 pt-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <h1 className="text-[clamp(2.5rem,15vw,9rem)] leading-[0.85] font-black font-headline text-primary [text-shadow:6px_6px_0px_#2c4f27] tracking-tighter uppercase break-words">
            O CARDÁPIO
          </h1>
          <div className="max-w-xs mb-4">
            <p className="text-on-surface-variant font-medium leading-relaxed">
              Curadoria de grãos brasileiros e rituais coreanos. Uma experiência tátil no coração do Bom Retiro.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Category: Matcha Series */}
        <div className="md:col-span-7 space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-black font-headline text-primary tracking-tight">MATCHA SERIES</h2>
            <div className="h-[2px] flex-grow bg-surface-container-highest"></div>
          </div>
          
          <div className="space-y-12">
            {PRODUCT_CATALOG.matcha.map((item) => (
              <div key={item.id} className="group bg-surface-container-low rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8 transition-transform hover:-translate-y-1">
                <div className="w-full md:w-1/2 aspect-square rounded-md overflow-hidden flat-shadow-large">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold font-headline text-primary leading-none">{item.name}</h3>
                      <span className="text-xl font-black font-headline text-primary">R$ {item.price}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-6">{item.description}</p>
                  </div>
                  <button className="bg-primary text-on-primary py-4 px-6 rounded-md font-bold tracking-tight flat-shadow-large flex items-center justify-center gap-2 hover:opacity-90 transition-all uppercase">
                    PEDIR AGORA <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category: Coffee Series */}
        <div className="md:col-span-5 space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-4xl font-black font-headline text-primary tracking-tight">COFFEE</h2>
            <div className="h-[2px] flex-grow bg-surface-container-highest"></div>
          </div>

          <div className="space-y-12">
            {PRODUCT_CATALOG.coffee.map((item) => (
              <div key={item.id} className="bg-surface-container-high rounded-lg p-8 group relative overflow-hidden transition-all hover:bg-secondary-container">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-headline text-primary leading-tight">{item.name}</h3>
                    <span className="text-xl font-black font-headline text-primary">R$ {item.price}</span>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{item.description}</p>
                  <div className="w-20 h-1 bg-primary/20 mb-4 transition-all group-hover:bg-on-secondary-fixed"></div>
                </div>
                {/* Decorative Pill */}
                {item.id === 'espresso-tonico' && (
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10 rotate-12 group-hover:opacity-40 transition-opacity">
                    <img src={item.image} alt="Decorative" className="w-full h-full object-cover rounded-full" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Visual Callout */}
            <div className="bg-primary-container rounded-xl p-8 shadow-[8px_8px_0px_#34562e] flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_#34562e]">
                <span className="text-4xl font-black text-on-primary-fixed">마나</span>
              </div>
              <h4 className="text-on-primary-container font-headline font-bold text-xl mb-2 uppercase">Energia e Foco</h4>
              <p className="text-on-primary-container/80 text-xs uppercase tracking-widest font-bold">O significado de Mana em cada gole.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
