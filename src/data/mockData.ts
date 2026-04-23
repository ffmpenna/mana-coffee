import { Leaf, ShieldCheck, Heart, Recycle } from 'lucide-react';
import matchaLatteImg from '/assets/matcha_latte.jpg';
import matchaTonicoImg from '/assets/matcha_tonico.jpg';
import matchaBerryImg from '/assets/matcha_berry.jpg';
import espressoTonicoImg from '/assets/espresso_tonico.jpg';
import flatWhiteImg from '/assets/flat_white.jpg';
import coldBrewImg from '/assets/cold_brew.jpg';

export const PRODUCT_CATALOG = {
  matcha: [
    {
      id: 'mana-iced-matcha',
      name: 'Mana Iced Matcha',
      description:
        'Matcha orgânico de grau cerimonial, leite de aveia artesanal e um toque de néctar de coco.',
      image: matchaLatteImg,
    },
    {
      id: 'matcha-tonico',
      name: 'Matcha Tônico',
      description:
        'Batido em chawan de cerâmica, servido puro para apreciar as notas umami e vegetais.',
      image: matchaTonicoImg,
    },
    {
      id: 'matcha-berry',
      name: 'Matcha Berry',
      description:
        'Matcha orgânico de grau cerimonial, leite de aveia artesanal e frutas vermelhas frescas.',
      image: matchaBerryImg,
    },
  ],
  coffee: [
    {
      id: 'espresso-tonico',
      name: 'Espresso Tônico',
      description:
        'Duplo shot de Catuaí Amarelo, tônica premium, gelo cristalino e fatia de limão siciliano.',
      image: espressoTonicoImg,
    },
    {
      id: 'drip-single-origin',
      name: 'Drip Single Origin',
      description:
        'Filtrado no método V60. Grãos rotativos de microlotes brasileiros com rastreabilidade total.',
      image: flatWhiteImg,
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      description: 'Preparado com grãos de café especial e infundido por 12 horas.',
      image: coldBrewImg,
    },
  ],
};

export const HIGHLIGHTS = [
  {
    id: 'highlight-matcha',
    name: 'Mana Iced Matcha',
    description: 'Grão cerimonial e leite de aveia artesanal.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzQKBiQAeUP_gIHBPuoJ5G5HflzcKJHr7jThwzb2ibkT7yoi3IDB2_EMTosZgYhBczJ5yoTqNyX44i89qSim6Ya7Ga1ix84v141Ei22qQ9rYL1ndBI3fxthe3Hm0gEeXspVUvxmq0waDQvD1BSks6G-AR18Nvht8tHs_vXM8aSLQGtoCR9O0xlflV3zUrHKA-h0yXQLcdvw2U-khVZ12Us0fwsqP2Ml2l1MbHyu5Bs-znhhtCbwQrJiQeC2-I_57pPzWiW6CpNIaw',
  },
  {
    id: 'highlight-espresso',
    name: 'Espresso Tônico',
    description: 'Catuaí Vermelho com água tônica cítrica.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIKc3NESIlFekhyLb7LNrD26xNnWa5AEuq8cM_Oa6jmvarVu8cuU8vwTWVhNu4y2znWovGMtbK3myk59BGr8r9qlDAtNck-bX3svNnB5Jhs_IEdrcib2XLffWvJOHAxo-AFozcT6rmsDqDAOpKD1eqILIdSZ778NAECAPE2LcgnsRjy5Z7fXQ0D4KIq-HmZNFdWtPm26sojienHnnmbviSqxjlUGJYlrlcNigiAdBeEy8mhcQ2ykWbIvQIYA0Hqunz-Q4ajwYhsRA',
  },
  {
    id: 'highlight-drip',
    name: 'Drip Single Origin',
    description: 'Filtrado da Mantiqueira com notas florais.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1FYIpsT1i9JDVDAbejhrp5acnkYDfbeYtCSSoxpSKPAIzgbxxt7QukqZtInapJT34ppLZ00Q6mOUhXnId2kLQ8Sq22oL_YkcOJvMBjywDUvHtT3xG0s2Lgzl_u2aF0OFftxwJm1awtdhVzDVae4EVOxHkQv8N-8dB7_PoKQPykwOEmZGsrL1Gw25nMFGF_Gx_CqtLsAA7FOVOMYOTL87yUGdjhC7A6UdTqT_J-LlOPlrPez4C8S3WnQuMxmMWHj50JcMq9JVyZtc',
  },
];

export const ORIGIN_STORY = {
  title: 'Mana Coffee + Namu Matcha',
  description: [
    'Quando a busca pelo bem-estar encontra a cena urbana de São Paulo, nascem parcerias com propósito. A união entre a Mana Coffee e a Namu — a primeira marca do Brasil dedicada exclusivamente ao Matcha — traz para a sua xícara muito mais do que um ingrediente de excelência.',
    'Compartilhamos de uma filosofia conjunta: a transparência total, desde o cultivo orgânico nas montanhas de Hadong, na Coreia do Sul, até o cuidado no preparo da sua bebida.',
    'Acreditamos que um alimento de verdade deve nutrir o corpo, fazer parte de uma cadeia honesta e respeitar o meio ambiente.',
    'Venha até a Mana Coffee provar a harmonia perfeita entre o que consumimos e a saúde do nosso corpo, em cada gole do mais puro Matcha orgânico.',
  ],
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAjU4eNpBauHipGgPCr-JtnqhxncUjkivlJgWCxKwT0AoekmMgEKUrqI2ZFNzb6yTDJd6KruQ53REwUXkS1gDoCwAlS6aOoro7MXEUqpsopan6AX5X-J9jgQcjh9Ser-Npz5IJJFYYhiF2GzXgR1c_jrweB7mR3yICGZSkVTcAmUfWcPCDov1IWrqoC_EW9oeEa_Mbnj2RpvfRM4_cOyCwIPVOspeQy5n5F5sPt0Pb85h6Sgp_DpGdKsvQNZGimmVlaXg-UC7YSlbI',
  stats: [
    { label: '100% Orgânico', value: 'Processo Artesanal' },
    { label: 'Origem Controlada', value: 'Hadong' },
  ],
  manifestoFeatures: [
    {
      name: '100% Orgânico',
      description:
        'Cultivado nas montanhas de Hadong, Coreia do Sul, sob a chancela do Hadong Green Tea Institute.',
      icon: Leaf,
    },
    {
      name: 'Cadeia Honesta',
      description:
        'Transparência total na rastreabilidade, valorizando cada trabalhador desde a colheita até a sua xícara.',
      icon: ShieldCheck,
    },
    {
      name: 'Bem-Estar',
      description:
        'Mais do que uma bebida, um alimento que respeita e nutre a harmonia e a saúde do seu corpo.',
      icon: Heart,
    },
    {
      name: 'Sustentabilidade',
      description:
        'Processos produtivos que mantêm um olhar atento e um respeito profundo ao meio ambiente.',
      icon: Recycle,
    },
  ],
};

export const SOCIAL_FEED = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBCrnClo7b8j1kBymAfCwnkl19ZRluHd-ieF_BQi8V4m8TyWXAewD8diguDhO3GBdWOEj9NR2_ATdCSbz6YCDeFAOYegs6FirqjYDmYCev0mLrME1nup-6cQVVfubT47DEj8meZaZ1n-KDD1R6O7nUwwrVn-IHqjj4OlyLaU5qH11wU9RKpD9y0xnyIu1NuALRe1cSUBfDPjh2IRIx3N7Bu8_FReVoULtTiJE5nLFuVXlttFLX0Y7NZFUmfKRc8pSMOBvK8Fpa_8oM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB22mkGd5FJuisx7yT7ZJzHTitKHSOn4xgAgpgFK6Ztl0FTO5zMMv6sgs5n76pW8gAh6SHSvS8Uv9qYD4Ly1GSCtBRU-CoyTZnbj2hw_TMicF-5NSMsI0jKppy_JTeW3PD2TXvRofrIoMnzLUTmCPsyZ2vJsLsMAbdvXVpyzt2rEAHgrXCptlHdtu5kCO_kM1ZnUt2LJ5poEv0qflqWDAq4aqnO-RUdRjgaCMtOCnvavnXnP6RcjHXenTrDXvZ0NwC52pN7gyYHW3M',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD3nn8JwN2LPA7GORPrX309dKba-RNaTie6Scq5pyFjEKbn4qTF6gGQs8sAwinSZBxy1oRUnVSrUZK9FMjkqYC3BUcjUsdRFEkwvyVhkijezwzcRAdCzlnhEl1bvt6va-6q3FNH9a1e7LFeGz20qJGBjwd9CBqVzph0u4bBLop2P__hbY8mD__RSItK2IvWFU24gQqEvNt6q9tMvlGVa923_Z95ZtKFMyLjz111uGA1TVKxg3x4XofgjCA_qNSziw7DtiU3t9RY7Gw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBFgByuxACp3BS8V-4gZN72U4Get1EXpBqx7p5VhCPEi2JmHwQCtAAveFJV_c3qDXCRx8o1-UyC7gJfd2ssdU9eId6i0MFKGLprtn0u3s1ffuUpEj-tO8L2sd74pmDt10YiQencvyTPWJWOotc_hfT69aTG52NQL-9wh112BdBobRQGNQrYAJATQO_3DO-SCsrTRGWGwMFsvgRKWYGf2iJScyeomlp8Em5HRXS022jIVYPw8iaP4CDAbNP25hYOuUNT6dW3E525M7U',
];

export const NAVIGATION_LINKS = [
  { name: 'Sobre Nós', path: '/about' },
  { name: 'Nosso Cardápio', path: '/menu' },
];

export const SHOP_INFO = {
  address: 'Rua dos Pinheiros, 1234, São Paulo, SP',
  hours: {
    weekdays: '07h – 20h',
    weekend: '09h – 18h',
  },
  social: {
    instagram: '@manacoffee.br',
    email: 'contato@manacoffee.com.br',
    phone: '+55 11 99999-0000',
  },
};
