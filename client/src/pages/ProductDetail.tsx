import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star, Smartphone } from "lucide-react";
import { phones } from "@/lib/phoneData";
import { useState } from "react";

/**
 * Design Philosophy: Futurismo Neon Cyberpunk
 * Página de detalhes do produto com informações completas, galeria de fotos e CTA para WhatsApp
 */

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();

  const phone = phones.find((p) => p.id === params.id);

  if (!phone) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#0F1535] to-[#0A0E27] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Produto não encontrado</h1>
          <Button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white"
          >
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Olá Gostaria de comprar o modelo de celular ${phone.model} - Preço: R$ ${phone.price.toLocaleString("pt-BR")}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5583981384187?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Usar as 5 imagens do produto
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryImages = phone.images && phone.images.length > 0 ? phone.images : [phone.image];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#0F1535] to-[#0A0E27]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#0A0E27]/95 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <div className="space-y-6">
            {/* Imagem Principal */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-xl overflow-hidden p-8">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
              </div>
              <img
                src={galleryImages[selectedImageIndex]}
                alt={phone.model}
                className="relative z-10 w-full h-96 object-cover rounded-lg drop-shadow-[0_0_30px_rgba(180,0,255,0.4)]"
              />
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-5 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 p-2 ${
                    selectedImageIndex === idx ? "border-cyan-400 drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]" : "border-purple-500/20 hover:border-cyan-400/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${phone.model} - ${idx + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-8">
            {/* Marca e Modelo */}
            <div>
              <p className="text-cyan-400 text-sm font-semibold mb-2">{phone.brand}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {phone.model}
              </h1>
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
                <span className="text-gray-400 ml-2">(128 avaliações)</span>
              </div>
            </div>

            {/* Preço */}
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-2">Preço</p>
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                R$ {phone.price.toLocaleString("pt-BR")}
              </p>
              <p className="text-gray-500 text-sm mt-2">Parcelado em até 12x</p>
            </div>

            {/* Especificações */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Especificações</h2>
              <div className="bg-gray-900/30 border border-purple-500/20 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Smartphone className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Modelo</p>
                    <p className="text-white font-semibold">{phone.model}</p>
                  </div>
                </div>

                <div className="border-t border-purple-500/20 pt-4">
                  <p className="text-gray-400 text-sm mb-2">Detalhes Técnicos</p>
                  <p className="text-white">{phone.specs}</p>
                </div>

                <div className="border-t border-purple-500/20 pt-4">
                  <p className="text-gray-400 text-sm mb-2">Cor</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-2 border-white"></div>
                    <p className="text-white">{phone.color}</p>
                  </div>
                </div>

                <div className="border-t border-purple-500/20 pt-4">
                  <p className="text-gray-400 text-sm mb-2">Disponibilidade</p>
                  <p className="text-green-400 font-semibold">✓ Em Estoque</p>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">Sobre este Produto</h2>
              <p className="text-gray-300 leading-relaxed">
                O {phone.model} é um smartphone premium que combina tecnologia de ponta com design elegante. 
                Perfeito para quem busca performance, qualidade de câmera e experiência de usuário excepcional.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Garantia de 12 meses
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Frete grátis para todo Brasil
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Entrega em até 7 dias úteis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span> Suporte técnico 24/7
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-bold py-6 rounded-lg drop-shadow-[0_0_15px_rgba(180,0,255,0.5)] hover:drop-shadow-[0_0_20px_rgba(180,0,255,0.8)] transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <ShoppingCart size={24} />
              Comprar via WhatsApp
            </Button>

            {/* Info adicional */}
            <p className="text-center text-gray-500 text-sm">
              Clique no botão acima para conversar conosco via WhatsApp
            </p>
          </div>
        </div>

        {/* Seção de Produtos Relacionados */}
        <div className="mt-20 pt-12 border-t border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-8">Produtos Similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phones
              .filter((p) => p.brand === phone.brand && p.id !== phone.id)
              .slice(0, 4)
              .map((relatedPhone) => (
                <button
                  key={relatedPhone.id}
                  onClick={() => navigate(`/product/${relatedPhone.id}`)}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(0,217,255,0.3)] text-left"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-900/50">
                    <img
                      src={relatedPhone.image}
                      alt={relatedPhone.model}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-cyan-400 text-xs font-semibold">{relatedPhone.brand}</p>
                    <h3 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">
                      {relatedPhone.model}
                    </h3>
                    <p className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold text-sm mt-2">
                      R$ {relatedPhone.price.toLocaleString("pt-BR")}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
