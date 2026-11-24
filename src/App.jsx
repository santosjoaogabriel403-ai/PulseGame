import React, { useState, useMemo } from 'react';
import {
  Search,
  Heart,
  ShoppingCart,
  Star,
  Flame,
  Gamepad2,
  Monitor,
  Sparkles,
  X,
  Plus,
  Trash2,
  CheckCircle2,
  SlidersHorizontal,
  Zap,
  ShieldCheck,
  Send,
  ChevronRight,
  Cpu,
  HardDrive,
  MemoryStick
} from 'lucide-react';

const GAMES_DATA = [
  {
    id: 1,
    title: 'Cyber Drift: Protocolo Zero',
    subtitle: 'Corrida Cyberpunk de Alta Velocidade',
    genre: 'Corrida',
    tags: ['Cyberpunk', 'Multiplayer', 'Ray Tracing'],
    price: 199.90,
    discount: 25,
    rating: 4.9,
    reviewsCount: 1420,
    releaseDate: '2026-10-15',
    isNew: true,
    featured: true,
    developer: 'PulseCore Studios',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    gradient: 'from-cyan-500 via-blue-600 to-purple-800',
    accent: '#06b6d4',
    description:
      'Domine as megacidades chuvosas de Neo-Kowloon em máquinas antigravidade customizáveis. Enfrente sindicatos corporativos em circuitos verticais com física realista e trilha synthwave dinâmica.',
    specs: {
      os: 'Windows 11 64-bit',
      cpu: 'Intel Core i7-12700K / Ryzen 7 5800X',
      ram: '16 GB DDR4',
      gpu: 'RTX 3070 / RX 6800 XT',
      storage: '65 GB SSD NVMe'
    },
    scenes: [
      { label: 'Distrito Neon Central', colors: 'from-cyan-500 to-indigo-900' },
      { label: 'Via Expressa Orbital', colors: 'from-fuchsia-600 to-slate-900' },
      { label: 'Garagem Subterrânea', colors: 'from-emerald-500 to-cyan-950' }
    ],
    reviews: [
      { user: 'Kuro_Racer', rating: 5, comment: 'Sensação de velocidade absurda a 120 FPS!' },
      { user: 'ValkyrieBR', rating: 5, comment: 'A trilha sonora e os reflexos na chuva são impecáveis.' }
    ]
  },
  {
    id: 2,
    title: 'Ecos de Aethelgard',
    subtitle: 'RPG de Ação & Fantasia Sombria',
    genre: 'RPG',
    tags: ['Mundo Aberto', 'Soulslike', 'História Rica'],
    price: 249.90,
    discount: 0,
    rating: 4.8,
    reviewsCount: 3180,
    releaseDate: '2026-09-22',
    isNew: true,
    featured: false,
    developer: 'Obsidian Forge',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    gradient: 'from-amber-500 via-orange-700 to-stone-900',
    accent: '#f59e0b',
    description:
      'Explore um reino fragmentado por eclipses arcanos. Forje armas rúnicas, domine encantamentos proibidos e enfrente colossos antigos em combates táticos onde cada erro custa caro.',
    specs: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel Core i5-11600K / Ryzen 5 5600X',
      ram: '16 GB RAM',
      gpu: 'RTX 3060 Ti / RX 6700 XT',
      storage: '80 GB SSD'
    },
    scenes: [
      { label: 'Cidadela das Cinzas', colors: 'from-amber-600 to-stone-950' },
      { label: 'Santuário Eclipse', colors: 'from-purple-700 to-amber-950' },
      { label: 'Abismo de Ferro', colors: 'from-red-700 to-neutral-950' }
    ],
    reviews: [
      { user: 'Artoria_Knight', rating: 5, comment: 'Sistema de builds com fé e destreza é viciante.' },
      { user: 'MagoNoturno', rating: 4, comment: 'Chefes memoráveis e exploração recompensadora.' }
    ]
  },
  {
    id: 3,
    title: 'Vanguard: Setor 9',
    subtitle: 'FPS Tático Competitivo 5v5',
    genre: 'Ação',
    tags: ['Competitivo', 'Tático', 'Esports'],
    price: 0,
    discount: 0,
    rating: 4.6,
    reviewsCount: 8940,
    releaseDate: '2025-11-10',
    isNew: false,
    featured: false,
    developer: 'PulseCore Interactive',
    platforms: ['PC'],
    gradient: 'from-emerald-500 via-teal-700 to-slate-900',
    accent: '#10b981',
    description:
      'Precisão milimétrica e trabalho em equipe definem cada rodada. Escolha especialistas com gadgets tecnológicos, controle pontos estratégicos e suba no ranking global.',
    specs: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel Core i5-8400 / Ryzen 5 2600',
      ram: '8 GB RAM',
      gpu: 'GTX 1660 Super / RX 580',
      storage: '35 GB SSD'
    },
    scenes: [
      { label: 'Complexo Criogênico', colors: 'from-teal-500 to-slate-950' },
      { label: 'Plataforma Oceânica', colors: 'from-emerald-600 to-cyan-950' },
      { label: 'Sala de Controle', colors: 'from-lime-500 to-zinc-950' }
    ],
    reviews: [
      { user: 'HeadshotKing', rating: 5, comment: 'Netcode liso e ótimo balanceamento entre agentes.' }
    ]
  },
  {
    id: 4,
    title: 'Stellaris Frontier: Exodus',
    subtitle: 'Estratégia Espacial 4X',
    genre: 'Estratégia',
    tags: ['Sci-Fi', 'Gestão', 'Diplomacia'],
    price: 149.90,
    discount: 40,
    rating: 4.7,
    reviewsCount: 950,
    releaseDate: '2026-05-18',
    isNew: false,
    featured: false,
    developer: 'Nebula Works',
    platforms: ['PC'],
    gradient: 'from-indigo-500 via-violet-700 to-slate-950',
    accent: '#8b5cf6',
    description:
      'Comande a última frota da humanidade rumo a uma galáxia inexplorada. Gerencie recursos escassos, pesquise tecnologias alienígenas e decida o destino de civilizações inteiras.',
    specs: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel Core i5-10400 / Ryzen 5 3600',
      ram: '16 GB RAM',
      gpu: 'GTX 1070 / RX Vega 56',
      storage: '40 GB'
    },
    scenes: [
      { label: 'Nebulosa de Órion', colors: 'from-indigo-600 to-purple-950' },
      { label: 'Estação Orbital Alpha', colors: 'from-blue-600 to-slate-950' },
      { label: 'Frota de Dobra', colors: 'from-violet-500 to-zinc-950' }
    ],
    reviews: [
      { user: 'CmdrShepard', rating: 5, comment: 'Profundidade estratégica incrível, horas passam voando.' }
    ]
  },
  {
    id: 5,
    title: 'Hollow Lantern',
    subtitle: 'Metroidvania Ilustrado à Mão',
    genre: 'Indie',
    tags: ['Plataforma', 'Atmosférico', 'Trilha Sonora'],
    price: 59.90,
    discount: 15,
    rating: 4.9,
    reviewsCount: 2150,
    releaseDate: '2026-08-03',
    isNew: true,
    featured: false,
    developer: 'PaperMoon Studio',
    platforms: ['PC', 'Switch', 'PS5'],
    gradient: 'from-pink-500 via-rose-700 to-indigo-950',
    accent: '#ec4899',
    description:
      'Guiado apenas por uma lanterna espiritual, atravesse florestas de papel e templos esquecidos. Desbloqueie habilidades acrobáticas e desvende memórias perdidas.',
    specs: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i3-6100 / Ryzen 3 1200',
      ram: '4 GB RAM',
      gpu: 'GTX 750 Ti / Radeon R7 260X',
      storage: '12 GB'
    },
    scenes: [
      { label: 'Bosque das Vagalumes', colors: 'from-pink-600 to-indigo-950' },
      { label: 'Templo Submerso', colors: 'from-cyan-700 to-purple-950' },
      { label: 'Pico da Lua Pálida', colors: 'from-rose-500 to-slate-950' }
    ],
    reviews: [
      { user: 'IndieLover', rating: 5, comment: 'Direção de arte digna de quadro e controles super responsivos.' }
    ]
  },
  {
    id: 6,
    title: 'Horizonte Selvagem: Terra Ancestral',
    subtitle: 'Aventura & Sobrevivência Pré-Histórica',
    genre: 'Aventura',
    tags: ['Sobrevivência', 'Co-op', 'Construção'],
    price: 179.90,
    discount: 30,
    rating: 4.5,
    reviewsCount: 1640,
    releaseDate: '2026-03-12',
    isNew: false,
    featured: false,
    developer: 'Apex Wilds',
    platforms: ['PC', 'PS5', 'Xbox Series'],
    gradient: 'from-lime-500 via-emerald-700 to-stone-900',
    accent: '#84cc16',
    description:
      'Sobreviva em um ecossistema vivo habitado por criaturas colossais. Dome feras, construa bases fortificadas com sua tribo e explore cavernas bioluminescentes.',
    specs: {
      os: 'Windows 10/11 64-bit',
      cpu: 'Intel Core i7-10700 / Ryzen 7 3700X',
      ram: '16 GB RAM',
      gpu: 'RTX 3060 / RX 6600 XT',
      storage: '95 GB SSD'
    },
    scenes: [
      { label: 'Vale dos Gigantes', colors: 'from-lime-600 to-emerald-950' },
      { label: 'Caverna de Cristal', colors: 'from-teal-500 to-stone-950' },
      { label: 'Costa Vulcânica', colors: 'from-orange-600 to-stone-950' }
    ],
    reviews: [
      { user: 'Survivor_JG', rating: 5, comment: 'Jogar em coop com amigos montando bases é bom demais.' }
    ]
  }
];

const CATEGORIES = ['Todos', 'RPG', 'Ação', 'Aventura', 'Estratégia', 'Indie', 'Corrida'];

const formatBRL = (value) =>
  value === 0
    ? 'Gratuito'
    : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const getFinalPrice = (game) =>
  game.discount > 0 ? game.price * (1 - game.discount / 100) : game.price;

export default function App() {
  const [games, setGames] = useState(GAMES_DATA);
  const [activeTab, setActiveTab] = useState('inicio');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([1, 5]);
  const [cart, setCart] = useState([GAMES_DATA[0]]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [newReviewUser, setNewReviewUser] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const featuredGame = useMemo(
    () => games.find((g) => g.featured) || games[0],
    [games]
  );

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        if (activeTab === 'lancamentos' && !game.isNew) return false;
        if (activeTab === 'favoritos' && !favorites.includes(game.id)) return false;
        if (selectedCategory !== 'Todos' && game.genre !== selectedCategory) return false;
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchTitle = game.title.toLowerCase().includes(q);
          const matchGenre = game.genre.toLowerCase().includes(q);
          const matchTags = game.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchGenre && !matchTags) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return new Date(b.releaseDate) - new Date(a.releaseDate);
        if (sortBy === 'price-asc') return getFinalPrice(a) - getFinalPrice(b);
        return b.reviewsCount - a.reviewsCount;
      });
  }, [games, activeTab, favorites, selectedCategory, searchQuery, sortBy]);

  const toggleFavorite = (id, e) => {
    if (e) e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (game, e) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      if (prev.some((item) => item.id === game.id)) return prev;
      return [...prev, game];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = useMemo(
    () => cart.reduce((acc, item) => acc + getFinalPrice(item), 0),
    [cart]
  );

  const openGameModal = (game) => {
    setSelectedGame(game);
    setActiveSceneIndex(0);
    setNewReviewUser('');
    setNewReviewRating(5);
    setNewReviewText('');
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim() || !selectedGame) return;

    const reviewObj = {
      user: newReviewUser.trim() || 'Jogador_Pulse',
      rating: Number(newReviewRating),
      comment: newReviewText.trim()
    };

    const updatedGames = games.map((g) => {
      if (g.id === selectedGame.id) {
        const updatedReviews = [reviewObj, ...g.reviews];
        const updatedGame = {
          ...g,
          reviews: updatedReviews,
          reviewsCount: g.reviewsCount + 1
        };
        setSelectedGame(updatedGame);
        return updatedGame;
      }
      return g;
    });

    setGames(updatedGames);
    setNewReviewText('');
    setNewReviewUser('');
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2200);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-[#09090f]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo PulseCore */}
          <button
            onClick={() => {
              setActiveTab('inicio');
              setSelectedCategory('Todos');
              setSearchQuery('');
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-[#0d0e17] rounded-[11px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
              </div>
            </div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              PulseCore
            </span>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1 rounded-xl border border-slate-800/80">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'catalogo', label: 'Catálogo' },
              { id: 'lancamentos', label: 'Lançamentos' },
              { id: 'favoritos', label: 'Favoritos' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-56 lg:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar jogos, gêneros..."
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-cyan-500 rounded-xl pl-9 pr-3 py-1.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setActiveTab('favoritos')}
              className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 transition-colors"
              title="Favoritos"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-pink-500 text-[11px] font-bold text-white flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Carrinho"
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-400 text-[11px] font-bold text-slate-950 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-around border-t border-slate-800/80 py-2 px-2 bg-[#09090f]">
          {[
            { id: 'inicio', label: 'Início' },
            { id: 'catalogo', label: 'Catálogo' },
            { id: 'lancamentos', label: 'Lançamentos' },
            { id: 'favoritos', label: 'Favoritos' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Banner (only on Início when not searching) */}
        {activeTab === 'inicio' && !searchQuery && (
          <section className="relative rounded-3xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${featuredGame.gradient} opacity-35`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090f] via-[#09090f]/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.25),transparent_50%)]" />

            <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-cyan-400" />
                  Destaque da Semana • PulseCore
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  {featuredGame.title}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredGame.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 text-xs font-semibold border border-amber-500/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {featuredGame.rating} ({featuredGame.reviewsCount} análises)
                  </span>
                  {featuredGame.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs border border-slate-700/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-4 bg-slate-950/70 backdrop-blur-md p-5 rounded-2xl border border-slate-800/80">
                <div className="flex items-center gap-3">
                  {featuredGame.discount > 0 && (
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-extrabold text-sm">
                      -{featuredGame.discount}%
                    </span>
                  )}
                  <div className="text-right">
                    {featuredGame.discount > 0 && (
                      <div className="text-xs text-slate-400 line-through">
                        {formatBRL(featuredGame.price)}
                      </div>
                    )}
                    <div className="text-2xl font-black text-white">
                      {formatBRL(getFinalPrice(featuredGame))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => openGameModal(featuredGame)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-1.5"
                  >
                    Ver Detalhes
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => toggleFavorite(featuredGame.id, e)}
                    className={`p-2.5 rounded-xl border transition-colors ${
                      favorites.includes(featuredGame.id)
                        ? 'bg-pink-500/20 border-pink-500 text-pink-400'
                        : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                    title="Favoritar"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(featuredGame.id) ? 'fill-pink-500' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter & Sort Controls */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                    selectedCategory === category
                      ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300 shadow-sm shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="popular">Mais Populares</option>
                <option value="rating">Melhor Avaliados</option>
                <option value="newest">Lançamentos Recentes</option>
                <option value="price-asc">Menor Preço</option>
              </select>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="relative sm:hidden">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar jogos, gêneros..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </section>

        {/* Games Grid */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-cyan-400" />
              {activeTab === 'favoritos'
                ? 'Seus Jogos Favoritos'
                : activeTab === 'lancamentos'
                ? 'Novos Lançamentos'
                : 'Explorar Catálogo'}
              <span className="text-xs font-normal text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
                {filteredGames.length} {filteredGames.length === 1 ? 'jogo' : 'jogos'}
              </span>
            </h2>
          </div>

          {filteredGames.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800/80 space-y-3">
              <Sparkles className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-slate-300 font-medium">
                Nenhum jogo encontrado com os filtros atuais.
              </p>
              <button
                onClick={() => {
                  setActiveTab('inicio');
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-sm font-semibold hover:bg-cyan-500/30 transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => {
                const isFav = favorites.includes(game.id);
                const inCart = cart.some((item) => item.id === game.id);
                const finalPrice = getFinalPrice(game);

                return (
                  <article
                    key={game.id}
                    onClick={() => openGameModal(game)}
                    className="group cursor-pointer bg-[#10121c] border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    {/* Card Artwork */}
                    <div
                      className={`relative h-44 bg-gradient-to-br ${game.gradient} p-4 flex flex-col justify-between overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(9,9,15,0.65)_100%)]" />
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-xs font-semibold text-slate-200 border border-white/10">
                            {game.genre}
                          </span>
                          {game.isNew && (
                            <span className="px-2 py-1 rounded-lg bg-cyan-400 text-slate-950 text-[11px] font-extrabold uppercase">
                              Novo
                            </span>
                          )}
                        </div>

                        <button
                          onClick={(e) => toggleFavorite(game.id, e)}
                          className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                            isFav
                              ? 'bg-pink-500/25 border-pink-400 text-pink-400'
                              : 'bg-slate-950/60 border-white/10 text-slate-300 hover:text-pink-400'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                        </button>
                      </div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-white/90 bg-slate-950/65 backdrop-blur-md px-2.5 py-1 rounded-lg">
                          <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{game.platforms.join(' • ')}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-950/75 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-amber-400">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          {game.rating}
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                          {game.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {game.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          {game.discount > 0 && (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold">
                              -{game.discount}%
                            </span>
                          )}
                          <div>
                            {game.discount > 0 && (
                              <div className="text-[11px] text-slate-500 line-through">
                                {formatBRL(game.price)}
                              </div>
                            )}
                            <div className="text-base font-extrabold text-white">
                              {formatBRL(finalPrice)}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={(e) => addToCart(game, e)}
                          disabled={inCart}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                            inCart
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 cursor-default'
                              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20'
                          }`}
                        >
                          {inCart ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              No Carrinho
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              Adicionar
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#121526] to-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">
              Fique por dentro das drops da <span className="text-cyan-400">PulseCore</span>
            </h3>
            <p className="text-sm text-slate-400">
              Receba alertas de promoções relâmpago, chaves beta e novos lançamentos.
            </p>
          </div>

          {newsletterSubscribed ? (
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Inscrição confirmada na PulseCore!
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
              >
                Inscrever
              </button>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#07070c] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-slate-300">PulseCore</span>
            <span>© 2026 — Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Termos de Uso</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacidade</span>
            <span className="hover:text-slate-300 cursor-pointer">Suporte</span>
          </div>
        </div>
      </footer>

      {/* Game Details Modal */}
      {selectedGame && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedGame(null)}
        >
          <div
            className="bg-[#10121d] border border-slate-800 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Interactive Scene Gallery Header */}
            <div
              className={`relative h-56 sm:h-64 bg-gradient-to-br ${selectedGame.scenes[activeSceneIndex].colors} p-6 flex flex-col justify-between transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#10121d] via-transparent to-black/30" />
              <div className="relative flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs font-semibold text-cyan-300 border border-white/10">
                  Cena: {selectedGame.scenes[activeSceneIndex].label}
                </span>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                    {selectedGame.developer}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedGame.title}
                  </h2>
                </div>

                <div className="flex gap-1.5">
                  {selectedGame.scenes.map((scene, idx) => (
                    <button
                      key={scene.label}
                      onClick={() => setActiveSceneIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSceneIndex === idx ? 'w-7 bg-cyan-400' : 'w-2.5 bg-white/40'
                      }`}
                      title={scene.label}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-500/15 text-amber-300 text-sm font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {selectedGame.rating}
                  </span>
                  <span className="text-sm text-slate-400">
                    {selectedGame.genre} • {selectedGame.platforms.join(', ')}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-white">
                    {formatBRL(getFinalPrice(selectedGame))}
                  </span>
                  <button
                    onClick={() => addToCart(selectedGame)}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Comprar Agora
                  </button>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedGame.description}
              </p>

              {/* System Requirements */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Requisitos Recomendados (PC)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Cpu className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      <strong className="text-slate-400">CPU:</strong> {selectedGame.specs.cpu}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MemoryStick className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      <strong className="text-slate-400">RAM:</strong> {selectedGame.specs.ram}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Monitor className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      <strong className="text-slate-400">GPU:</strong> {selectedGame.specs.gpu}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <HardDrive className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>
                      <strong className="text-slate-400">Armazenamento:</strong>{' '}
                      {selectedGame.specs.storage}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white">
                  Avaliações da Comunidade ({selectedGame.reviews.length})
                </h4>

                <form
                  onSubmit={handleAddReview}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={newReviewUser}
                      onChange={(e) => setNewReviewUser(e.target.value)}
                      placeholder="Seu apelido (opcional)"
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-amber-400 font-semibold focus:outline-none"
                    >
                      <option value={5}>★★★★★ (5)</option>
                      <option value={4}>★★★★☆ (4)</option>
                      <option value={3}>★★★☆☆ (3)</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      placeholder="Escreva sua análise sobre o jogo..."
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Enviar
                    </button>
                  </div>
                </form>

                <div className="space-y-2.5">
                  {selectedGame.reviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300">{rev.user}</span>
                        <span className="text-xs text-amber-400">
                          {'★'.repeat(rev.rating)}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end"
          onClick={() => setIsCartOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#0e101a] border-l border-slate-800 h-full flex flex-col justify-between p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Carrinho PulseCore</h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {checkoutSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Compra Concluída!</h4>
                  <p className="text-sm text-slate-400">
                    Seus jogos já foram adicionados à sua biblioteca PulseCore.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-2 text-slate-500">
                  <ShoppingCart className="w-10 h-10 opacity-40" />
                  <p className="text-sm">Seu carrinho está vazio.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} shrink-0`}
                      />
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                        <span className="text-xs font-semibold text-cyan-400">
                          {formatBRL(getFinalPrice(item))}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && !checkoutSuccess && (
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Total estimado</span>
                  <span className="text-xl font-black text-white">
                    {formatBRL(cartTotal)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-cyan-500/20"
                >
                  Finalizar Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
