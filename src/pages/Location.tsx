import { useState } from 'react';
import { SHOP_INFO } from '../data/mockData';

const Location = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-fixed selection:text-primary">
      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-24 items-start">
        {/* Left Column: Info */}
        <section className="space-y-16">
          <div>
            <span className="font-label uppercase tracking-widest text-primary font-bold text-xs uppercase">Onde Estamos</span>
            <h2 className="font-headline text-5xl mt-4 leading-tight">Um refúgio urbano <br/>em Pinheiros.</h2>
          </div>

          <div className="space-y-8">
            {/* Address Card */}
            <div className="bg-surface-container-low p-12 rounded-xl shadow-[8px_8px_0px_#2c4f27] border-outline-variant/10 border font-body">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <h3 className="font-headline text-2xl mb-2 uppercase tracking-tighter">Endereço</h3>
                  <p className="text-on-surface-variant leading-relaxed text-lg">
                    {SHOP_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-surface-container-low p-12 rounded-xl shadow-[8px_8px_0px_#2c4f27] border-outline-variant/10 border font-body">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                <div>
                  <h3 className="font-headline text-2xl mb-2 uppercase tracking-tighter">Horários</h3>
                  <div className="space-y-2 text-on-surface-variant text-lg">
                    <div className="flex justify-between gap-8">
                      <span>Seg-Sex:</span>
                      <span className="font-black">{SHOP_INFO.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sáb-Dom:</span>
                      <span className="font-black">{SHOP_INFO.hours.weekend}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-xl overflow-hidden grayscale contrast-125 h-64 w-full bg-surface-container-highest flex items-center justify-center flat-shadow-large">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpEAOCaEV7lflCVw_4BZ_Uc0jSCt3w7mArgbfSib1Ktr-I4Yo6rhGqmP0Xv4jLdgDamBzN39G64HChwGPhG8lzNVwV3SHT2lPg8It7EQoRg4jS90lHl32qFbvDpXPyuTEWOmYeuzapLZipVmgrH76QaJH3mCaDV18Y1LBnFhCKvnypKONukvYSPh0XkGiwn_O_ntN-48Yn0-xG39ozNAjbWr3ConZt7joY0OrClk3QuXIIxKmnxiMHfYOEj2nslPCV1TkEcTHPfkY" 
              alt="Map"
            />
          </div>
        </section>

        {/* Right Column: Contact Form */}
        <section className="bg-surface-container p-8 md:p-16 rounded-xl sticky top-32">
          <div className="mb-12">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-xs">Fale Conosco</span>
            <h2 className="font-headline text-4xl mt-4">Envie uma <br/>mensagem.</h2>
          </div>
          
          {submitted ? (
            <div className="bg-primary-fixed p-12 rounded-xl flat-shadow-primary text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
              <h3 className="font-headline font-black text-2xl text-primary uppercase">Mensagem Enviada!</h3>
              <p className="text-on-primary-fixed-variant font-medium">Obrigado pelo contato. Responderemos em breve.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-primary font-bold uppercase tracking-widest text-xs mt-4 underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="font-label uppercase tracking-widest text-[10px] font-bold text-on-surface-variant mb-3 block">Nome Completo</label>
                <input required className="w-full bg-surface-container-low border-none rounded-full px-8 py-5 focus:ring-2 focus:ring-primary/20 placeholder:text-outline/50 font-medium" placeholder="Como podemos te chamar?" type="text"/>
              </div>
              <div>
                <label className="font-label uppercase tracking-widest text-[10px] font-bold text-on-surface-variant mb-3 block">E-mail</label>
                <input required className="w-full bg-surface-container-low border-none rounded-full px-8 py-5 focus:ring-2 focus:ring-primary/20 placeholder:text-outline/50 font-medium" placeholder="seu@email.com" type="email"/>
              </div>
              <div>
                <label className="font-label uppercase tracking-widest text-[10px] font-bold text-on-surface-variant mb-3 block">Mensagem</label>
                <textarea required className="w-full bg-surface-container-low border-none rounded-xl px-8 py-5 focus:ring-2 focus:ring-primary/20 placeholder:text-outline/50 font-medium resize-none" placeholder="No que podemos ajudar?" rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary rounded-full py-6 font-headline text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[8px_8px_0px_#2c4f27]" type="submit">
                Enviar Mensagem
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          )}

          <div className="mt-12 pt-12 border-t border-outline-variant/20 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
              <span className="font-medium">{SHOP_INFO.social.email}</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">call</span>
              <span className="font-medium">{SHOP_INFO.social.phone}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Location;
