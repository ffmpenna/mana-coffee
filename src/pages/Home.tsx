import { Link } from 'react-router-dom';
import HighlightCard from '../components/features/HighlightCard';
import { HIGHLIGHTS, ORIGIN_STORY, SOCIAL_FEED } from '../data/mockData';

const Home = () => {
  return (
    <div className="bg-background text-on-background font-body">
      {/* Hero Section */}
      <section className="relative px-8 pt-16 pb-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 z-10">
            <div className="inline-block bg-primary-fixed text-on-primary-fixed px-6 py-2 rounded-full font-bold mb-8 flat-shadow-primary text-sm uppercase tracking-widest">
              São Paulo • Bom Retiro
            </div>
            <h1 className="font-headline font-black text-5xl sm:text-7xl md:text-9xl text-primary text-soft-serve mb-8 drop-shadow-[4px_4px_0px_#c4eeb8] break-words">
              O Ritual do Matcha
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              Uma pausa tátil no caos urbano. Onde a tradição milenar coreana encontra o
              pulso brutalista de São Paulo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-secondary-fixed text-on-secondary-fixed-variant px-10 py-5 rounded-md font-black text-lg border-2 border-outline-variant hover:bg-surface-variant transition-colors uppercase inline-block text-center"
              >
                Nosso Cardápio
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden flat-shadow-large rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj3gUdspGQ2WUcjrEWBRrNAATN5xGX9hmSn_3sAL2mKR-BE6bs-5pvZ53cnGoACAU6SRQzUB85Nundtt8UC0A0GWIVvRKELUzk7xxlKH4fyFt0Axl3GYvQJJyKAcu82HTYEnn1kwFtf4tiOAwrrCzMJ1w5EkhdIdQYWq_9eUKXv-v5d_MjaI3A54s4zhcvoxV51nm7AT1yYIWPjGOejEcp6g8ACMC5_QPfoh1PkffJ8DtX1oS_iPV2rmynSN4Hc5Zoz78HUNC2RUY"
                alt="Matcha"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed rounded-full flex items-center justify-center p-8 flat-shadow-primary -rotate-12">
              <span className="text-primary font-headline font-black text-4xl text-center leading-none">
                마나 COFFEE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Barista Choices Header Section */}
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-12">
        <div className="mb-2">
          <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border border-outline-variant/30">
            Curadoria do Mês
          </span>
        </div>
        <h2 className="font-headline font-black text-4xl sm:text-6xl md:text-8xl text-primary text-soft-serve uppercase drop-shadow-[4px_4px_0px_#c4eeb8] break-words">
          Escolhas do Barista
        </h2>
      </section>

      {/* Menu Highlights Section */}
      <section className="w-full bg-primary overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-[819px]">
          {HIGHLIGHTS.map((item) => (
            <HighlightCard
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="rounded-lg flat-shadow-secondary w-full h-64 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXnkjjSssvhfFGjallpXhPj0x8blGGvXkeheE-kF791E6Nf9V-MMZSUpST8DAmKLwaru3GwZSHAYh3f8cy75if3gS_XH-SNLJxjr6elC__N4meAVY8W_8E_VRfGF8lohqPbe1uL5Vi9OtkwoPmMe0_PSYUZqYKGPrnZbciJag9lMJDwqmbjVpOFajl7OsTJ6MjouA-uDKu-Bn2sUnl4udCn7_dugErrULJ0XEQ3g0I3FuaVpHOjQbmIkMF4YD1Hfv62PRBDt0Jc1M"
                  alt="Shop detail"
                />
                <img
                  className="rounded-lg flat-shadow-secondary w-full h-64 object-cover mt-8"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTZvOBwPoh2QIK7Yd5UD-o9eP7KnimOyEisBAyq7nMy5L9a9X_qVl7L1WeIe3E5WCBFblXlMlxu-GFoNCh_JDFFQ9gNo7YI6rNUIWUCPEyBlUbNYhM6NgnpQQy_hHtIXS5Fu_D151sKayfqtNCw0ig9WtSKfgvAFCyTmh6N4H3k4k5LvhW_NQsLFW_qNARno0nXYF64whS0jwqW61CZj9K9JB4woDA76Fo7VO7vPIyae6j8j43_yDNgZMX8UTJ3lpDcKBG0pRJeRw"
                  alt="Ambience"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="font-headline font-black text-4xl sm:text-6xl text-primary text-soft-serve mb-8 break-words">
                Aconchego Urbano
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Nascemos da vontade de desacelerar o relógio de São Paulo. O Mana é um
                  santuário de minimalismo e conforto, onde cada detalhe — da cerâmica ao
                  grão selecionado — convida à presença.
                </p>
                <p>
                  Nossa estética bebe da fonte do design editorial dos anos 70 e da pureza
                  visual coreana. Não servimos apenas bebidas; curamos momentos de
                  silêncio compartilhado.
                </p>
                <div className="pt-6">
                  <Link
                    to="/about"
                    className="text-primary font-black text-xl border-b-4 border-primary pb-1 inline-flex items-center gap-2 hover:gap-4 transition-all uppercase"
                  >
                    Nossa História{' '}
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="bg-primary py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-white font-headline font-black text-center text-5xl sm:text-6xl md:text-7xl text-soft-serve mb-12 drop-shadow-[4px_4px_0px_#a4650a] uppercase break-words">
            {ORIGIN_STORY.title}
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-20">
            <div className="md:w-1/2">
              <p className="text-white/80 text-xl leading-relaxed mb-10">
                {ORIGIN_STORY.description}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                {ORIGIN_STORY.stats.map((stat, index) => (
                  <div key={index} className="border-l-4 h-fit border-primary-fixed pl-6">
                    <span className="block text-primary-fixed font-black text-3xl mb-1">
                      {stat.value}
                    </span>
                    <span className="text-white/60 text-sm uppercase font-bold tracking-tighter">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://namumatcha.com.br/"
                target="_blank"
                className="bg-primary-fixed text-primary px-10 py-5 rounded-md font-black text-lg flat-shadow-primary hover:bg-white transition-all uppercase inline-block"
              >
                Conheça o Produtor
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-12">
              {/* Container da Imagem */}
              <div className="relative group px-4 sm:px-0">
                {/* Ajuste no inset e scale para não estourar a tela no mobile */}
                <div className="absolute -inset-2 sm:-inset-4 bg-primary-fixed/10 rounded-2xl rotate-2 sm:rotate-3 scale-[1.02] sm:scale-105 group-hover:rotate-0 transition-transform duration-500 ease-out"></div>
                <img
                  className="relative z-10 rounded-xl w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover shadow-xl"
                  src={ORIGIN_STORY.image}
                  alt="Origem: Hadong"
                />
              </div>

              {/* Container do Manifesto */}
              <div className="w-full px-4 sm:px-0">
                {/* Grid ajustado para 2 colunas no mobile */}
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 md:grid-cols-4">
                  {ORIGIN_STORY.manifestoFeatures.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex flex-col items-center justify-start text-center group/item"
                    >
                      {/* Fundo do ícone com backdrop-blur para mais elegância */}
                      <div className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 transition-all duration-300 group-hover/item:bg-emerald-500/20 group-hover/item:border-emerald-500/40">
                        <feature.icon
                          className="h-6 w-6 text-emerald-400 drop-shadow-sm"
                          aria-hidden="true"
                        />
                      </div>
                      {/* Tipografia refinada */}
                      <dt className="mt-4 text-sm font-medium tracking-wide text-white/70 transition-colors duration-300 group-hover/item:text-white">
                        {feature.name}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-headline font-black text-4xl sm:text-6xl text-primary text-soft-serve break-words">
              @manacoffee.br
            </h2>
            <p className="text-on-surface-variant text-xl mt-4">
              Compartilhe seu momento conosco.
            </p>
          </div>
          <a
            href="https://instagram.com/manacoffee.br"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-primary border-4 border-primary px-10 py-4 rounded-md font-black text-lg hover:bg-primary-fixed transition-all uppercase"
          >
            IR PARA O INSTAGRAM
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SOCIAL_FEED.map((img, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden group relative"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={img}
                alt={`Social ${index}`}
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">
                  favorite
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
