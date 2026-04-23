const About = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full px-4 pt-4 md:px-8 md:pt-8">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSAjepmOkRkOAA7LqbGkU2Iz3O9G0uuSyl3I9l4fvc6Cuyz8RwA68b48FbczjIzSlshdoSyZOZycsffxeMng5oTYjzgCJzjdlF3bk5tbV-m7P_Qk9EiuWhzDTOwcj5xycmw7Nj6ToQop0m4Y9d7x_lgzi1w9GHyB6gOF_2gUapumAcpd6kdPpBtkb7anz2eOaUJ0CWCYEo1L2BwiKitLH6pbRWmslYbxuwPPSNMsj_6rfLsVe43u1J6_jp2j2tXEJJhMwnby5kDsk"
            alt="Matcha preparation"
          />
          {/* Ajuste de padding no mobile (p-6) para não espremer o texto */}
          <div className="absolute inset-0 bg-primary/30 backdrop-brightness-75 flex flex-col justify-end p-6 sm:p-12 md:p-24">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-[7rem] lg:text-[8rem] font-extrabold text-white leading-[0.85] tracking-tighter mb-4 md:mb-6 uppercase break-words">
              Menos ruído <br />
              Mais essência
            </h1>
            <p className="font-body uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/90 text-xs sm:text-sm md:text-xl font-light">
              Do solo ao concreto paulista
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 1: Hadong */}
      {/* Ajuste de py-32 para py-16 no mobile */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3 md:mb-4 block">
            Conforto
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold leading-tight mb-6 md:mb-8 break-words">
            O seu oásis no centro de São Paulo
          </h2>
          <div className="space-y-4 md:space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg max-w-xl">
            <p>
              No coração pulsante do Bom Retiro, criamos um espaço onde o tempo
              desacelera. A cidade lá fora não para, mas assim que você cruza a nossa
              porta, o ritmo é outro.
            </p>
            <p>
              Nascemos da crença de que a beleza e o conforto residem na simplicidade.
              Nosso ambiente minimalista não é apenas uma escolha estética, é um convite
              visual para o descanso da mente.
            </p>
          </div>
          {/* Ajuste do bloco de citação para mobile */}
          <div className="mt-8 md:mt-12 p-6 md:p-8 bg-secondary-container/50 text-on-secondary-container italic font-headline text-xl md:text-2xl text-primary leading-relaxed border-l-4 border-primary rounded-r-lg">
            "Onde a calma do ritual encontra a força da natureza."
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {/* Sombra responsiva: menor no mobile para não quebrar o layout */}
          <div className="shadow-[8px_8px_0px_0px_#2c4f27] md:shadow-[16px_16px_0px_0px_#2c4f27] rounded-xl overflow-hidden aspect-[4/5] max-h-[600px] mx-auto">
            <img
              className="w-full h-full object-cover"
              src="https://scontent-gig4-2.cdninstagram.com/v/t51.82787-15/656093534_17940394305178491_3569194415098604272_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=102&ig_cache_key=Mzg1OTkxNTc5MzM1ODU2MzUyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTczMS5zZHIuQzIifQ%3D%3D&_nc_ohc=8LtWtuJnHmEQ7kNvwHEm4uO&_nc_oc=AdoUb9rqH4rkPK09zo-ycrjyZ3Fe1z_SXd96eBtjcK0hwS9HHzHGe7f4ZDRJGJmbxZUqTSh2cbTV7XQd8cz0ZKp9&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-gig4-2.cdninstagram.com&_nc_gid=M1S_txI7A2jXolJJ7FN1-A&_nc_ss=7a32e&oh=00_Af3xiNcw3LHnjbsn-rAioiQ4_O4DqGQUviUuJXNnT9DlGQ&oe=69EEF90F"
              alt="Hadong plantation"
            />
          </div>
        </div>
      </section>

      {/* Content Section 2: São Paulo */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 bg-surface-container-low flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3 md:mb-4 block">
            A Chegada
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-bold leading-tight mb-6 md:mb-8 break-words">
            A Harmonia na Xícara
          </h2>
          <div className="space-y-4 md:space-y-6 text-on-surface-variant leading-relaxed text-base md:text-lg max-w-xl">
            <p>
              Retiramos as distrações para que você possa focar no que realmente importa:
              o sabor, o momento, a presença. Ao combinarmos a intensidade vibrante do
              café especial com a tranquilidade milenar do matcha, oferecemos uma
              experiência sensorial limpa e honesta.
            </p>
            <p>Seja bem-vindo ao seu novo ponto de paz na cidade.</p>
          </div>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4">
            <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Minimalismo
            </span>
            <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Brutalismo
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="shadow-[8px_8px_0px_0px_#2c4f27] md:shadow-[16px_16px_0px_0px_#2c4f27] rounded-xl overflow-hidden aspect-video md:aspect-[4/3] relative group">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLTfFvPM39D9TxYmj2B4O8VBhP-QBYTwEuEQlkQAxlOPBm3zllgcw6_sVgqkmVUd0yw9IQJZ3BKvhAKMt5yjG8e-zjsIEaSAEVmI9pvP9Emmd_FEf3eLlJk6wdAUgo96tk8qOgCJ24moqxfeCZNxAMa3MVua6jA-kLRjFI5SYz8KY_S4kteUsu30slGodp4Oj4LPeCXgGiFi8CHYaSlZgh12wJvrsgxAII-gDcY158PfH3SDqgeDekrhkjrZBxXo0yI6urCtA098c"
              alt="Brutalist Architecture"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: Curadoria */}
      <section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 pb-24 md:pb-44">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-3 md:mb-4 block">
            Excelência
          </span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary font-bold break-words">
            A Curadoria Mana
          </h2>
        </div>

        {/* Ajuste de grid e gap para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="shadow-[6px_6px_0px_0px_#2c4f27] md:shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7uKnhm_CT_jI_3_-_n_6g2M8ciFMzr3LphGHHSthc49UVHHhkxeAijLViiv1S-9_G52BpGwddJzuspNnziDakgkqyS_2-Bm5Sr7O4rzReMoJM9BCut--hQFnglX8VW_UVod4fTXlQfAnaZYo2_yTY6DQUtikgTycRzTL0n4SjLsSQi3n620SPgdawvN5XEYwLhFqh56C_mcCQwcYMHDDslbBhzclYqO3Ot5pdLcp2_BzgG7RcVlHjx5BFK1WjK9PPeLdNmsUeuWU"
                alt="Ceramic cup"
              />
            </div>
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-primary mb-3 uppercase tracking-tighter text-soft-serve">
                Cerâmica Artesanal
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Peças moldadas à mão por artesãos locais, desenhadas para manter a
                temperatura ideal e proporcionar uma experiência tátil única.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-6 md:gap-8 md:translate-y-12">
            <div className="shadow-[6px_6px_0px_0px_#2c4f27] md:shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7LSBbJzt72Gqz0NVrj_LLy_fsgG3wVsG1DFJ4tvFhmb2ypGP9egKRzmFUov9WH7N7x9FSasULUXpZpaaUfsuJELk2BTN_jboo7bh_jr_3wbCNozei_Hi-w3YUDxZN_4lKhMu0k1X_NbIOaiIRK_7azdTMpy9X-ZdLhsOmKiKrOGuhZOf1eHTET7xjrLSD_f796kobvkInaDAY7PcOQNoploRuJ0M9NQMAWdAyX8hOT3DdQv3I6GP-gb2jGQo1A6z4oydXt1TiaQ"
                alt="Matcha powder"
              />
            </div>
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-primary mb-3 uppercase tracking-tighter text-soft-serve">
                Matcha Premium
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Grau cerimonial, colhido na primeira safra da primavera em Hadong. Um
                perfil vibrante, umami e intensamente herbáceo.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="shadow-[6px_6px_0px_0px_#2c4f27] md:shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_c9toj-ZCnorxcQeupLDGgrO_wuGyJlG4I2-7CtMBLgHJb1yPVR7JQy2Fcbrwxc0wA6LXMGHiBvFRu2n37b8dK_IZQ5UzF2zO14i562p_Jutz42zGR03UhN8rqgSKcK06CUCmEywm0MD6c72ofcHCbmEDpHKs5ohGAOVYP7XWCF_agtdnTSyEP1blZ1h7bpg8UdJIjK2fEU5ZZ1vu5oiljeDRuiIn6ZDBXaqyW7w2q5QqqqJo5CZunVDkIVVTUDX55ac5kL1FrT8"
                alt="Coffee beans"
              />
            </div>
            <div>
              <h3 className="font-headline text-xl md:text-2xl font-bold text-primary mb-3 uppercase tracking-tighter text-soft-serve">
                Grãos de Altitude
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Seleção de micro-lotes brasileiros e sul-coreanos, torrados para ressaltar
                notas de chocolate amargo e doçura vulcânica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
