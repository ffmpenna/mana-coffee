const About = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full px-4 md:px-8">
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSAjepmOkRkOAA7LqbGkU2Iz3O9G0uuSyl3I9l4fvc6Cuyz8RwA68b48FbczjIzSlshdoSyZOZycsffxeMng5oTYjzgCJzjdlF3bk5tbV-m7P_Qk9EiuWhzDTOwcj5xycmw7Nj6ToQop0m4Y9d7x_lgzi1w9GHyB6gOF_2gUapumAcpd6kdPpBtkb7anz2eOaUJ0CWCYEo1L2BwiKitLH6pbRWmslYbxuwPPSNMsj_6rfLsVe43u1J6_jp2j2tXEJJhMwnby5kDsk" 
            alt="Matcha preparation"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75 flex flex-col justify-end p-12 md:p-24">
            <h1 className="font-headline text-5xl sm:text-7xl md:text-[8rem] font-extrabold text-white leading-[0.8] tracking-tighter mb-6 uppercase break-words">
              NOSSA HISTÓRIA
            </h1>
            <p className="font-body uppercase tracking-[0.3em] text-white/90 text-sm md:text-xl font-light">
              Do solo vulcânico ao concreto paulista
            </p>
          </div>
        </div>
      </section>

      {/* Content Section 1: Jeju */}
      <section className="py-32 px-4 md:px-24 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 block">As Origens</span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl text-primary font-bold leading-tight mb-8 break-words">
            Solo Vulcânico, Mente Serena
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg max-w-xl">
            <p>
              Nas encostas da Ilha de Jeju, o tempo flui em um ritmo diferente. Nossas raízes mergulham profundamente na terra negra, enriquecida por milênios de atividade vulcânica. É um ecossistema único onde a pureza do ar e a força do basalto se unem.
            </p>
            <p>
              Cada folha de chá e cada grão de café carregam a memória desse ritual. A colheita manual não é apenas um processo de produção, é uma meditação entre o homem e a natureza selvagem da Coreia do Sul.
            </p>
          </div>
          <div className="mt-12 p-8 bg-surface-container-low rounded-lg italic font-headline text-2xl text-primary leading-relaxed border-l-4 border-primary/20">
            "Onde a calma do ritual encontra a força da natureza."
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="shadow-[16px_16px_0px_0px_#2c4f27] rounded-xl overflow-hidden aspect-[4/5]">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBfmDHZuZi9YKVVklTey3ati-pFROCAkU5-9MuZkrR1Bhifr6uvemlrULdeJzIicDjTl7NST1acbNQBvw0U1k4J8fexxV9M5_UgtANT7kQWtMFMm14KoqRCiFdnKPcds0P2Aqvm_YL3PaSUADgWD5EYLy4wnGFCkUZpqRkGhaBAAIlMt1Mr9A-Nkxd0tfxoMYcL3t9FYrN7z5978mBppDoVMnKSWvCFf7o6qWXsT2dzxxX6tqJCbPCDRsZxm03zYL-0V1Ha_iN6y0" 
              alt="Jeju plantation"
            />
          </div>
        </div>
      </section>

      {/* Content Section 2: São Paulo */}
      <section className="py-32 px-4 md:px-24 bg-surface-container-low flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="w-full md:w-1/2">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 block">A Chegada</span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl text-primary font-bold leading-tight mb-8 break-words">
            Do Concreto ao Paladar:<br/>O Bom Retiro
          </h2>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg max-w-xl">
            <p>
              A Mana Coffee nasce do encontro entre a quietude de Jeju e a energia brutalista de São Paulo. Ao desembarcarmos no Bom Retiro, encontramos no concreto a moldura perfeita para nossa filosofia.
            </p>
            <p>
              Nossos espaços em Pinheiros e no centro histórico celebram a arquitetura paulista: estruturas honestas, sombras marcadas e a integração orgânica de plantas que desafiam a selva de pedra.
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold uppercase tracking-widest">Minimalismo</span>
            <span className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold uppercase tracking-widest">Brutalismo</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="shadow-[16px_16px_0px_0px_#2c4f27] rounded-xl overflow-hidden aspect-video relative group">
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
      <section className="py-32 px-4 md:px-24">
        <div className="text-center mb-24">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-bold mb-4 block">Excelência</span>
          <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl text-primary font-bold break-words">A Curadoria Mana</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col gap-8">
            <div className="shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7uKnhm_CT_jI_3_-_n_6g2M8ciFMzr3LphGHHSthc49UVHHhkxeAijLViiv1S-9_G52BpGwddJzuspNnziDakgkqyS_2-Bm5Sr7O4rzReMoJM9BCut--hQFnglX8VW_UVod4fTXlQfAnaZYo2_yTY6DQUtikgTycRzTL0n4SjLsSQi3n620SPgdawvN5XEYwLhFqh56C_mcCQwcYMHDDslbBhzclYqO3Ot5pdLcp2_BzgG7RcVlHjx5BFK1WjK9PPeLdNmsUeuWU" alt="Ceramic cup" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase tracking-tighter text-soft-serve">Cerâmica Artesanal</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Peças moldadas à mão por artesãos locais, desenhadas para manter a temperatura ideal e proporcionar uma experiência tátil única.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col gap-8 md:translate-y-12">
            <div className="shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7LSBbJzt72Gqz0NVrj_LLy_fsgG3wVsG1DFJ4tvFhmb2ypGP9egKRzmFUov9WH7N7x9FSasULUXpZpaaUfsuJELk2BTN_jboo7bh_jr_3wbCNozei_Hi-w3YUDxZN_4lKhMu0k1X_NbIOaiIRK_7azdTMpy9X-ZdLhsOmKiKrOGuhZOf1eHTET7xjrLSD_f796kobvkInaDAY7PcOQNoploRuJ0M9NQMAWdAyX8hOT3DdQv3I6GP-gb2jGQo1A6z4oydXt1TiaQ" alt="Matcha powder" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase tracking-tighter text-soft-serve">Matcha Premium</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Grau cerimonial, colhido na primeira safra da primavera em Jeju. Um perfil vibrante, umami e intensamente herbáceo.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col gap-8">
            <div className="shadow-[8px_8px_0px_0px_#2c4f27] aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_c9toj-ZCnorxcQeupLDGgrO_wuGyJlG4I2-7CtMBLgHJb1yPVR7JQy2Fcbrwxc0wA6LXMGHiBvFRu2n37b8dK_IZQ5UzF2zO14i562p_Jutz42zGR03UhN8rqgSKcK06CUCmEywm0MD6c72ofcHCbmEDpHKs5ohGAOVYP7XWCF_agtdnTSyEP1blZ1h7bpg8UdJIjK2fEU5ZZ1vu5oiljeDRuiIn6ZDBXaqyW7w2q5QqqqJo5CZunVDkIVVTUDX55ac5kL1FrT8" alt="Coffee beans" />
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4 uppercase tracking-tighter text-soft-serve">Grãos de Altitude</h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed">
                Seleção de micro-lotes brasileiros e sul-coreanos, torrados para ressaltar notas de chocolate amargo e doçura vulcânica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
