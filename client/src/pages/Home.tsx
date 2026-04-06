import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { phones, brands } from "@/lib/phoneData";

/**
 * Design Philosophy: Futurismo Neon Cyberpunk
 * - Roxo neon (#B300FF) + Azul elétrico (#00D9FF) sobre fundo preto profundo
 * - Efeitos de glow, grid assimétrica, divisores angulares
 * - Catálogo organizado por marca
 */

export default function Home() {
  const [, navigate] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  // Agrupar celulares por marca
  const phonesByBrand = useMemo(() => {
    const grouped: Record<string, typeof phones> = {};
    brands.forEach((brand) => {
      grouped[brand] = phones.filter((p) => p.brand === brand);
    });
    return grouped;
  }, []);

  // Filtrar por busca
  const filteredBrands = useMemo(() => {
    if (!searchTerm) return brands;
    return brands.filter((brand) => {
      const brandPhones = phonesByBrand[brand];
      return (
        brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brandPhones.some((p) =>
          p.model.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    });
  }, [searchTerm, phonesByBrand]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#0F1535] to-[#0A0E27]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#0A0E27]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                CAMILA
              </div>
              <div className="text-sm font-semibold text-cyan-400">CELL STORE</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => {
                    const element = document.getElementById(`brand-${brand}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium transition-all duration-300 text-gray-300 hover:text-cyan-400"
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-cyan-400 hover:text-purple-400"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20 pt-4 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => {
                    const element = document.getElementById(`brand-${brand}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-medium px-3 py-1 rounded bg-gray-800/50 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {brand}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                  Tecnologia
                </span>
                <br />
                <span className="text-white">de Ponta</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Descubra os melhores celulares das marcas mais procuradas do mundo. Qualidade garantida e preços competitivos.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    const element = document.getElementById("search-section");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold px-8 py-2 rounded-lg drop-shadow-[0_0_15px_rgba(180,0,255,0.5)] hover:drop-shadow-[0_0_20px_rgba(180,0,255,0.8)] transition-all duration-300"
                >
                  Ver Catálogo
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/hero-neon-phones-6DQz332V6syoCJCxrY54mq.webp"
                alt="Celulares Premium"
                className="w-full h-full object-cover rounded-lg drop-shadow-[0_0_30px_rgba(180,0,255,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search-section" className="py-8 border-y border-purple-500/20 bg-[#0F1535]/50">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-cyan-400" size={20} />
            <Input
              type="text"
              placeholder="Buscar marca ou modelo de celular..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-gray-900/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20"
            />
          </div>
        </div>
      </section>

      {/* Catálogo por Marca */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">Nenhuma marca ou modelo encontrado.</p>
            </div>
          ) : (
            filteredBrands.map((brand) => (
              <div key={brand} id={`brand-${brand}`} className="scroll-mt-20">
                {/* Header da Marca */}
                <div className="mb-8 pb-6 border-b border-purple-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {brand}
                      </h2>
                      <p className="text-gray-400">
                        {phonesByBrand[brand].length} modelos disponíveis
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedBrand(expandedBrand === brand ? null : brand)
                      }
                      className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-colors"
                    >
                      <span className="text-sm font-semibold">
                        {expandedBrand === brand ? "Recolher" : "Expandir"}
                      </span>
                      <ChevronRight
                        size={20}
                        className={`transition-transform ${
                          expandedBrand === brand ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Grid de Produtos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {phonesByBrand[brand].map((phone) => (
                    <div
                      key={phone.id}
                      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                    >
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-gray-900/50">
                        <img
                          src={phone.image}
                          alt={phone.model}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="relative p-4 space-y-3">
                        <div>
                          <p className="text-cyan-400 text-sm font-semibold">{phone.brand}</p>
                          <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                            {phone.model}
                          </h3>
                        </div>

                        <p className="text-gray-400 text-sm">{phone.specs}</p>

                        <div className="flex items-center justify-between pt-3 border-t border-purple-500/20">
                          <div>
                            <p className="text-gray-500 text-xs">Preço</p>
                            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                              R$ {phone.price.toLocaleString("pt-BR")}
                            </p>
                          </div>
                        </div>

                        <Button
                          onClick={() => handleProductClick(phone.id)}
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-2 rounded-lg drop-shadow-[0_0_10px_rgba(180,0,255,0.4)] hover:drop-shadow-[0_0_15px_rgba(180,0,255,0.7)] transition-all duration-300"
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-[#0F1535]/50 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Camila Cell Store</h3>
              <p className="text-gray-400 text-sm">
                A melhor loja de celulares premium do Brasil com as melhores marcas e preços.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="text-gray-400 text-sm">
                WhatsApp: <span className="text-cyan-400">+55 83 98138-4187</span>
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Marcas</h4>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="text-gray-400 text-sm bg-gray-800/30 px-2 py-1 rounded">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Camila Cell Store. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
