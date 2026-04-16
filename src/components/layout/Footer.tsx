import { SHOP_INFO } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-surface-container-low border-t-2 border-outline-variant/20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-headline text-3xl font-bold text-primary">MANA COFFEE</span>
            <div className="bg-primary-fixed px-3 py-1 rounded-full flat-shadow-primary border-2 border-primary">
              <span className="text-on-primary-fixed font-bold text-xs">마나</span>
            </div>
          </div>
          <p className="font-body text-sm leading-relaxed text-primary-container max-w-xs">
            Cafeteria boutique unindo o design minimalista coreano à alma vibrante de São Paulo. Experiências táteis e café de verdade.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-black text-primary uppercase text-sm tracking-widest">VENHA NOS CONHECER</h4>
          <ul className="font-body text-sm leading-relaxed space-y-2 text-primary-container">
            <li className="hover:text-primary underline transition-colors cursor-pointer">{SHOP_INFO.address}</li>
            <li>Seg-Sex {SHOP_INFO.hours.weekdays}</li>
            <li>Sáb-Dom {SHOP_INFO.hours.weekend}</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-headline font-black text-primary uppercase text-sm tracking-widest">SIGA A GENTE</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="font-body text-sm text-primary-container hover:text-primary underline transition-colors">Instagram</a>
            <a href="#" className="font-body text-sm text-primary-container hover:text-primary underline transition-colors">Spotify</a>
            <a href={`mailto:${SHOP_INFO.social.email}`} className="font-body text-sm text-primary-container hover:text-primary underline transition-colors">E-mail</a>
          </div>
        </div>
      </div>
      
      <div className="mt-20 px-8 max-w-7xl mx-auto border-t border-outline-variant pt-8">
        <p className="font-body text-xs text-primary-container opacity-70">
          © {new Date().getFullYear()} Mana Coffee. Pinheiros, São Paulo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
