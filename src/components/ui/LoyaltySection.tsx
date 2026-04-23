import { Heart } from 'lucide-react';

const LoyaltyCard = () => {
  const punches = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="w-full lg:w-1/2 relative group px-2 sm:px-4 mt-4 lg:mt-0">
      <div className="bg-background rounded-2xl p-5 sm:p-8 shadow-[6px_6px_0px_0px_#2c4f27] border-2 border-primary w-full max-w-md mx-auto transform lg:-rotate-2 group-hover:rotate-0 transition-transform duration-500 overflow-hidden relative">
        <div className="absolute -right-8 -top-8 text-[8rem] sm:text-[10rem] text-primary/5 font-black font-headline select-none pointer-events-none">
          M
        </div>

        <div className="flex justify-between items-start mb-6 sm:mb-8 border-b border-primary/10 pb-4 sm:pb-6 relative z-10">
          <div className="flex flex-col">
            <span className="font-headline font-black text-xl sm:text-3xl text-primary uppercase leading-none mb-1">
              Manatics
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60">
              Fidelidade
            </span>
          </div>
          <div className="bg-primary/10 w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-primary flex items-center justify-center shrink-0">
            <span className="text-primary font-black text-xs sm:text-base">마나</span>
          </div>
        </div>

        {/* Grid de Furos */}
        <div className="grid grid-cols-5 gap-2 sm:gap-4 relative z-10">
          {punches.map((num) => (
            <div
              key={num}
              className="aspect-square bg-primary/5 rounded-full border border-dashed border-primary/30 flex items-center justify-center text-primary/40 font-black text-base sm:text-xl transition-colors hover:bg-primary/10 hover:border-primary/50 cursor-default"
            >
              {num}
            </div>
          ))}

          {/* 10º Furo com ícone do Lucide React */}
          <div className="aspect-square bg-primary rounded-full flex items-center justify-center text-on-primary shadow-inner">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 text-center relative z-10">
          <p className="inline-block bg-surface-container-high px-2 sm:px-3 py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Volte Sempre
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
