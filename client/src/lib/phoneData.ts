export interface Phone {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  images: string[];
  specs: string;
  color: string;
}

// URLs das imagens realistas geradas - iPhone 15 Pro Max
const iphone15ProMaxImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-front-BcsBZmzUuksLtDHvJJzzT7.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-back-ftXdEKGKevQYNhmx8pCp99.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-side-ZkLZESyQ9iK7358FUQFiGH.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-detail-2VMPy4SX36DkezLqMUfRFG.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-angle-E3DVfnwM3Yic2rQ5P2DdxU.webp"
];

// URLs das imagens realistas geradas - Samsung S24 Ultra
const samsungS24UltraImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-front-Bz5ysMheRktgGcY9uPRDdw.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-back-UGfDTUpKGqmsih7WMGa3Kf.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-side-dQ25vUeFcjsCokWhu8ifGC.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-detail-oPsR5LMmjMrJe7v7Mkd5wY.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-angle-T7EaFUnZHUVhy4mRVaT9xP.webp"
];

// URLs das imagens realistas geradas - Motorola Edge 50 Pro
const motorolaEdge50ProImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-front-FMgZJyVdSJ4wVmLfYHyzyp.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-back-KsmkQjS5xUMpw628tMJj9H.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-side-eMBT82zMzyFBGMyzs72jaL.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-detail-eCdG42H7juWBHYHosr3Zy5.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-angle-cdmQBdEaHb8xKFJPRGeics.webp"
];

// URLs das imagens realistas geradas - Xiaomi 14 Ultra
const xiaomi14UltraImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-front-M36MyrM5ojx3KUhvL4Xkjn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-back-RQL5kVgxV5QUceMWQsaKek.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-side-kPH2t5TGbuer6xMte58rPf.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-detail-UGphsooKx2rscyj85PRCJt.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-angle-DcGmX4SYvJ9AGqsrqFQVsY.webp"
];

// URLs das imagens realistas geradas - Oppo Find X7 Ultra
const oppoFindX7UltraImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-front-ZL3vuVfhySvraBQvN7PpRd.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-back-678UqkTczBNzLNjaG9DtKA.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-side-KaB9tJdEPeNDaXUjKJKnmn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-detail-nTzeqJJMrkuieaMxpRxgyy.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-angle-afKCwCqx5J2QBuFfT9jAqH.webp"
];

// URLs genéricas para outros modelos (usando primeira imagem como padrão)
const genericPhoneImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-front-BcsBZmzUuksLtDHvJJzzT7.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-back-ftXdEKGKevQYNhmx8pCp99.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-side-ZkLZESyQ9iK7358FUQFiGH.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-detail-2VMPy4SX36DkezLqMUfRFG.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-angle-E3DVfnwM3Yic2rQ5P2DdxU.webp"
];

export const phones: Phone[] = [
  // Apple - 10 modelos
  {
    id: "apple-1",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    price: 7999,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.7\" Display | A17 Pro | 256GB | Câmera 48MP",
    color: "Titânio Preto"
  },
  {
    id: "apple-2",
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 6999,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A17 Pro | 256GB | Câmera 48MP",
    color: "Titânio Azul"
  },
  {
    id: "apple-3",
    brand: "Apple",
    model: "iPhone 15",
    price: 4999,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A16 Bionic | 256GB | Câmera 48MP",
    color: "Preto"
  },
  {
    id: "apple-4",
    brand: "Apple",
    model: "iPhone 15 Plus",
    price: 5499,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.7\" Display | A16 Bionic | 256GB | Câmera 48MP",
    color: "Azul"
  },
  {
    id: "apple-5",
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 5999,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A16 Bionic | 256GB | Câmera 48MP",
    color: "Roxo Profundo"
  },
  {
    id: "apple-6",
    brand: "Apple",
    model: "iPhone 14",
    price: 4299,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A15 Bionic | 256GB | Câmera 12MP",
    color: "Meia-Noite"
  },
  {
    id: "apple-7",
    brand: "Apple",
    model: "iPhone 13 Pro",
    price: 4799,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A15 Bionic | 256GB | Câmera 12MP",
    color: "Ouro"
  },
  {
    id: "apple-8",
    brand: "Apple",
    model: "iPhone 13",
    price: 3799,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A15 Bionic | 256GB | Câmera 12MP",
    color: "Rosa"
  },
  {
    id: "apple-9",
    brand: "Apple",
    model: "iPhone SE (3ª Gen)",
    price: 2499,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "4.7\" Display | A15 Bionic | 128GB | Câmera 12MP",
    color: "Branco"
  },
  {
    id: "apple-10",
    brand: "Apple",
    model: "iPhone 12",
    price: 3299,
    image: iphone15ProMaxImages[0],
    images: iphone15ProMaxImages,
    specs: "6.1\" Display | A14 Bionic | 256GB | Câmera 12MP",
    color: "Azul"
  },

  // Samsung - 10 modelos
  {
    id: "samsung-1",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 8499,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.8\" Display | Snapdragon 8 Gen 3 | 256GB | Câmera 200MP",
    color: "Titânio Preto"
  },
  {
    id: "samsung-2",
    brand: "Samsung",
    model: "Galaxy S24+",
    price: 6999,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Titânio Prata"
  },
  {
    id: "samsung-3",
    brand: "Samsung",
    model: "Galaxy S24",
    price: 5999,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.2\" Display | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "samsung-4",
    brand: "Samsung",
    model: "Galaxy Z Fold 6",
    price: 9999,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "7.6\" Dobrável | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "samsung-5",
    brand: "Samsung",
    model: "Galaxy Z Flip 6",
    price: 7999,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.7\" Dobrável | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Azul Menta"
  },
  {
    id: "samsung-6",
    brand: "Samsung",
    model: "Galaxy A54",
    price: 2799,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.4\" Display | Exynos 1280 | 128GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "samsung-7",
    brand: "Samsung",
    model: "Galaxy A34",
    price: 1999,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.6\" Display | MediaTek Helio G99 | 128GB | Câmera 48MP",
    color: "Violeta"
  },
  {
    id: "samsung-8",
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    price: 7499,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 200MP",
    color: "Verde Phantom"
  },
  {
    id: "samsung-9",
    brand: "Samsung",
    model: "Galaxy S23",
    price: 5499,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.1\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Creme"
  },
  {
    id: "samsung-10",
    brand: "Samsung",
    model: "Galaxy A24",
    price: 1599,
    image: samsungS24UltraImages[0],
    images: samsungS24UltraImages,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Preto"
  },

  // Motorola - 10 modelos
  {
    id: "motorola-1",
    brand: "Motorola",
    model: "Edge 50 Pro",
    price: 4999,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Preto Midnight"
  },
  {
    id: "motorola-2",
    brand: "Motorola",
    model: "Edge 50 Ultra",
    price: 5999,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Titânio Cinza"
  },
  {
    id: "motorola-3",
    brand: "Motorola",
    model: "Edge 50",
    price: 3499,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.5\" Display | Snapdragon 7 Gen 3 | 256GB | Câmera 50MP",
    color: "Azul Celeste"
  },
  {
    id: "motorola-4",
    brand: "Motorola",
    model: "Razr 50 Ultra",
    price: 7999,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.9\" Dobrável | Snapdragon 8 Gen 3 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "motorola-5",
    brand: "Motorola",
    model: "Razr 50",
    price: 5999,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.9\" Dobrável | Snapdragon 7 Gen 3 | 256GB | Câmera 50MP",
    color: "Ouro"
  },
  {
    id: "motorola-6",
    brand: "Motorola",
    model: "G54",
    price: 1799,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "motorola-7",
    brand: "Motorola",
    model: "G84",
    price: 2299,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB | Câmera 50MP",
    color: "Azul Celeste"
  },
  {
    id: "motorola-8",
    brand: "Motorola",
    model: "G73",
    price: 1999,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Verde Menta"
  },
  {
    id: "motorola-9",
    brand: "Motorola",
    model: "Edge 40 Pro",
    price: 4299,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "motorola-10",
    brand: "Motorola",
    model: "G53",
    price: 1499,
    image: motorolaEdge50ProImages[0],
    images: motorolaEdge50ProImages,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Preto"
  },

  // Xiaomi - 10 modelos
  {
    id: "xiaomi-1",
    brand: "Xiaomi",
    model: "14 Ultra",
    price: 6999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.73\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "xiaomi-2",
    brand: "Xiaomi",
    model: "14 Pro",
    price: 5999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.73\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Branco Pérola"
  },
  {
    id: "xiaomi-3",
    brand: "Xiaomi",
    model: "14",
    price: 4999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.36\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Dourado"
  },
  {
    id: "xiaomi-4",
    brand: "Xiaomi",
    model: "Mix Fold 3",
    price: 9999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "8.0\" Dobrável | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "xiaomi-5",
    brand: "Xiaomi",
    model: "13 Ultra",
    price: 5999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.73\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "xiaomi-6",
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 2499,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.67\" Display | Snapdragon 7 Gen 3 | 256GB | Câmera 200MP",
    color: "Azul"
  },
  {
    id: "xiaomi-7",
    brand: "Xiaomi",
    model: "Redmi Note 13",
    price: 1999,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.67\" Display | Snapdragon 685 | 256GB | Câmera 108MP",
    color: "Preto"
  },
  {
    id: "xiaomi-8",
    brand: "Xiaomi",
    model: "Redmi 13",
    price: 1299,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Verde"
  },
  {
    id: "xiaomi-9",
    brand: "Xiaomi",
    model: "13",
    price: 4299,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.36\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Branco"
  },
  {
    id: "xiaomi-10",
    brand: "Xiaomi",
    model: "Poco X6 Pro",
    price: 2799,
    image: xiaomi14UltraImages[0],
    images: xiaomi14UltraImages,
    specs: "6.67\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },

  // Oppo - 10 modelos
  {
    id: "oppo-1",
    brand: "Oppo",
    model: "Find X7 Ultra",
    price: 7999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.82\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "oppo-2",
    brand: "Oppo",
    model: "Find X7",
    price: 6999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Branco"
  },
  {
    id: "oppo-3",
    brand: "Oppo",
    model: "Reno 11 Pro",
    price: 4999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Dourado"
  },
  {
    id: "oppo-4",
    brand: "Oppo",
    model: "Reno 11",
    price: 3999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "oppo-5",
    brand: "Oppo",
    model: "A78",
    price: 2199,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.56\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Azul"
  },
  {
    id: "oppo-6",
    brand: "Oppo",
    model: "A77",
    price: 1899,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.56\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "oppo-7",
    brand: "Oppo",
    model: "Find X6 Pro",
    price: 5999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.82\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "oppo-8",
    brand: "Oppo",
    model: "Reno 10",
    price: 3499,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB | Câmera 50MP",
    color: "Prata"
  },
  {
    id: "oppo-9",
    brand: "Oppo",
    model: "A58",
    price: 1599,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.72\" Display | MediaTek Helio G99 | 128GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "oppo-10",
    brand: "Oppo",
    model: "Reno 8 Pro",
    price: 3999,
    image: oppoFindX7UltraImages[0],
    images: oppoFindX7UltraImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB | Câmera 50MP",
    color: "Preto"
  },

  // ROG Phone - 10 modelos
  {
    id: "rog-1",
    brand: "ROG Phone",
    model: "ROG Phone 8 Pro",
    price: 7999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "rog-2",
    brand: "ROG Phone",
    model: "ROG Phone 8",
    price: 6999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Branco"
  },
  {
    id: "rog-3",
    brand: "ROG Phone",
    model: "ROG Phone 7 Ultimate",
    price: 6999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "rog-4",
    brand: "ROG Phone",
    model: "ROG Phone 7",
    price: 5999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "rog-5",
    brand: "ROG Phone",
    model: "ROG Phone 6D",
    price: 4999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "rog-6",
    brand: "ROG Phone",
    model: "ROG Phone 6 Pro",
    price: 5499,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 512GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "rog-7",
    brand: "ROG Phone",
    model: "ROG Phone 6",
    price: 4799,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "rog-8",
    brand: "ROG Phone",
    model: "ROG Phone 5s Pro",
    price: 3999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 888 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "rog-9",
    brand: "ROG Phone",
    model: "ROG Phone 5s",
    price: 3599,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 888 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "rog-10",
    brand: "ROG Phone",
    model: "ROG Phone 5",
    price: 3299,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.78\" Display | Snapdragon 888 | 256GB | Câmera 64MP",
    color: "Preto"
  },

  // Red Magic - 10 modelos
  {
    id: "redmagic-1",
    brand: "Red Magic",
    model: "Red Magic 9 Pro",
    price: 7999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.85\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "redmagic-2",
    brand: "Red Magic",
    model: "Red Magic 9",
    price: 6999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.85\" Display | Snapdragon 8 Gen 3 | 512GB | Câmera 50MP",
    color: "Vermelho"
  },
  {
    id: "redmagic-3",
    brand: "Red Magic",
    model: "Red Magic 8S Pro",
    price: 6999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "redmagic-4",
    brand: "Red Magic",
    model: "Red Magic 8 Pro",
    price: 5999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 512GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "redmagic-5",
    brand: "Red Magic",
    model: "Red Magic 8",
    price: 4999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB | Câmera 50MP",
    color: "Preto"
  },
  {
    id: "redmagic-6",
    brand: "Red Magic",
    model: "Red Magic 7S Pro",
    price: 4999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 512GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "redmagic-7",
    brand: "Red Magic",
    model: "Red Magic 7 Pro",
    price: 4499,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "redmagic-8",
    brand: "Red Magic",
    model: "Red Magic 7",
    price: 3999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "redmagic-9",
    brand: "Red Magic",
    model: "Red Magic 6S Pro",
    price: 3499,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 888 | 256GB | Câmera 64MP",
    color: "Preto"
  },
  {
    id: "redmagic-10",
    brand: "Red Magic",
    model: "Red Magic 6",
    price: 2999,
    image: genericPhoneImages[0],
    images: genericPhoneImages,
    specs: "6.8\" Display | Snapdragon 888 | 256GB | Câmera 64MP",
    color: "Preto"
  }
];

export const brands = ["Apple", "Samsung", "Motorola", "Xiaomi", "Oppo", "ROG Phone", "Red Magic"];
