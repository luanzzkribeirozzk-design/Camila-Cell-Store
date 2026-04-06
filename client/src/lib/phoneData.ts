export interface Phone {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: string;
  specs: string;
  color: string;
}

const iphone15ProMax = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-15-pro-max-MA7TMeXoQo8eqKWZukDX9v.webp";
const iphone14Pro = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/iphone-14-pro-9c9q77fasvhcEa5sogHnLE.webp";
const samsungS24Ultra = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-s24-ultra-YbMjTP5Zms7h9Jau4oQgJm.webp";
const samsungA54 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/samsung-galaxy-a54-39EAJYcrTL2RbNdcQwkUQQ.webp";
const motorolaEdge50Pro = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-edge-50-pro-UbYY6UDW8vx7CUQgf334M8.webp";
const motorolaG54 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/motorola-g54-JXotybHYTpyoFJ8t8qNJmG.webp";
const xiaomi14Ultra = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/xiaomi-14-ultra-nZUH8hRudki5Ew7gS4JWev.webp";
const oppoFindX7Ultra = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/oppo-find-x7-ultra-FvgTsmBMzHzoADFTn6cvaL.webp";
const rogPhone8Pro = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/rog-phone-8-pro-SGmeGAdJgS7kJw4ZCwnqYi.webp";
const redMagic9Pro = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487928346/YM9me9YEnJAbg76FJmU6Cj/red-magic-9-pro-5xdrWbHhzXjD3Nt9wnXGLo.webp";

export const phones: Phone[] = [
  // Apple
  {
    id: "apple-1",
    brand: "Apple",
    model: "iPhone 15 Pro Max",
    price: 7999,
    image: iphone15ProMax,
    specs: "6.7\" Display | A17 Pro | 256GB",
    color: "Titânio Preto"
  },
  {
    id: "apple-2",
    brand: "Apple",
    model: "iPhone 15 Pro",
    price: 6999,
    image: iphone15ProMax,
    specs: "6.1\" Display | A17 Pro | 256GB",
    color: "Titânio Natural"
  },
  {
    id: "apple-3",
    brand: "Apple",
    model: "iPhone 15",
    price: 4999,
    image: iphone15ProMax,
    specs: "6.1\" Display | A16 Bionic | 256GB",
    color: "Preto"
  },
  {
    id: "apple-4",
    brand: "Apple",
    model: "iPhone 15 Plus",
    price: 5499,
    image: iphone15ProMax,
    specs: "6.7\" Display | A16 Bionic | 256GB",
    color: "Azul"
  },
  {
    id: "apple-5",
    brand: "Apple",
    model: "iPhone 14 Pro",
    price: 5999,
    image: iphone14Pro,
    specs: "6.1\" Display | A16 Bionic | 256GB",
    color: "Roxo Profundo"
  },
  {
    id: "apple-6",
    brand: "Apple",
    model: "iPhone 14",
    price: 4299,
    image: iphone14Pro,
    specs: "6.1\" Display | A15 Bionic | 256GB",
    color: "Meia-Noite"
  },
  {
    id: "apple-7",
    brand: "Apple",
    model: "iPhone 13 Pro",
    price: 4799,
    image: iphone14Pro,
    specs: "6.1\" Display | A15 Bionic | 256GB",
    color: "Ouro"
  },
  {
    id: "apple-8",
    brand: "Apple",
    model: "iPhone 13",
    price: 3799,
    image: iphone14Pro,
    specs: "6.1\" Display | A15 Bionic | 256GB",
    color: "Rosa"
  },
  {
    id: "apple-9",
    brand: "Apple",
    model: "iPhone SE (3ª Gen)",
    price: 2499,
    image: iphone14Pro,
    specs: "4.7\" Display | A15 Bionic | 128GB",
    color: "Branco"
  },
  {
    id: "apple-10",
    brand: "Apple",
    model: "iPhone 12",
    price: 3299,
    image: iphone14Pro,
    specs: "6.1\" Display | A14 Bionic | 256GB",
    color: "Azul"
  },

  // Samsung
  {
    id: "samsung-1",
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 8499,
    image: samsungS24Ultra,
    specs: "6.8\" Display | Snapdragon 8 Gen 3 | 256GB",
    color: "Titânio Preto"
  },
  {
    id: "samsung-2",
    brand: "Samsung",
    model: "Galaxy S24+",
    price: 6999,
    image: samsungS24Ultra,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 256GB",
    color: "Titânio Cinza"
  },
  {
    id: "samsung-3",
    brand: "Samsung",
    model: "Galaxy S24",
    price: 5999,
    image: samsungS24Ultra,
    specs: "6.2\" Display | Snapdragon 8 Gen 3 | 256GB",
    color: "Titânio Amarelo"
  },
  {
    id: "samsung-4",
    brand: "Samsung",
    model: "Galaxy Z Fold 6",
    price: 9999,
    image: samsungS24Ultra,
    specs: "7.6\" Dobrável | Snapdragon 8 Gen 3 | 256GB",
    color: "Preto"
  },
  {
    id: "samsung-5",
    brand: "Samsung",
    model: "Galaxy Z Flip 6",
    price: 7999,
    image: samsungS24Ultra,
    specs: "6.7\" Dobrável | Snapdragon 8 Gen 3 | 256GB",
    color: "Azul Menta"
  },
  {
    id: "samsung-6",
    brand: "Samsung",
    model: "Galaxy A54",
    price: 2799,
    image: samsungA54,
    specs: "6.4\" Display | Exynos 1280 | 128GB",
    color: "Preto"
  },
  {
    id: "samsung-7",
    brand: "Samsung",
    model: "Galaxy A34",
    price: 1999,
    image: samsungA54,
    specs: "6.6\" Display | MediaTek Helio G99 | 128GB",
    color: "Violeta"
  },
  {
    id: "samsung-8",
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    price: 7499,
    image: samsungS24Ultra,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Verde Phantom"
  },
  {
    id: "samsung-9",
    brand: "Samsung",
    model: "Galaxy S23",
    price: 5499,
    image: samsungS24Ultra,
    specs: "6.1\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Creme"
  },
  {
    id: "samsung-10",
    brand: "Samsung",
    model: "Galaxy A24",
    price: 1599,
    image: samsungA54,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB",
    color: "Preto"
  },

  // Motorola
  {
    id: "motorola-1",
    brand: "Motorola",
    model: "Edge 50 Pro",
    price: 4999,
    image: motorolaEdge50Pro,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 256GB",
    color: "Preto Midnight"
  },
  {
    id: "motorola-2",
    brand: "Motorola",
    model: "Edge 50 Ultra",
    price: 5999,
    image: motorolaEdge50Pro,
    specs: "6.7\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Titânio Cinza"
  },
  {
    id: "motorola-3",
    brand: "Motorola",
    model: "Edge 50",
    price: 3499,
    image: motorolaEdge50Pro,
    specs: "6.5\" Display | Snapdragon 7 Gen 3 | 256GB",
    color: "Azul Celeste"
  },
  {
    id: "motorola-4",
    brand: "Motorola",
    model: "Razr 50 Ultra",
    price: 7999,
    image: motorolaEdge50Pro,
    specs: "6.9\" Dobrável | Snapdragon 8 Gen 3 | 256GB",
    color: "Preto"
  },
  {
    id: "motorola-5",
    brand: "Motorola",
    model: "Razr 50",
    price: 5999,
    image: motorolaEdge50Pro,
    specs: "6.9\" Dobrável | Snapdragon 7 Gen 3 | 256GB",
    color: "Ouro"
  },
  {
    id: "motorola-6",
    brand: "Motorola",
    model: "G54",
    price: 1799,
    image: motorolaG54,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB",
    color: "Preto"
  },
  {
    id: "motorola-7",
    brand: "Motorola",
    model: "G84",
    price: 2299,
    image: motorolaG54,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB",
    color: "Azul Celeste"
  },
  {
    id: "motorola-8",
    brand: "Motorola",
    model: "G73",
    price: 1999,
    image: motorolaG54,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB",
    color: "Verde Menta"
  },
  {
    id: "motorola-9",
    brand: "Motorola",
    model: "Edge 40 Pro",
    price: 4299,
    image: motorolaEdge50Pro,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Preto"
  },
  {
    id: "motorola-10",
    brand: "Motorola",
    model: "G53",
    price: 1499,
    image: motorolaG54,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB",
    color: "Preto"
  },

  // Xiaomi
  {
    id: "xiaomi-1",
    brand: "Xiaomi",
    model: "14 Ultra",
    price: 6999,
    image: xiaomi14Ultra,
    specs: "6.73\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Preto"
  },
  {
    id: "xiaomi-2",
    brand: "Xiaomi",
    model: "14 Pro",
    price: 5999,
    image: xiaomi14Ultra,
    specs: "6.73\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Branco Pérola"
  },
  {
    id: "xiaomi-3",
    brand: "Xiaomi",
    model: "14",
    price: 4999,
    image: xiaomi14Ultra,
    specs: "6.36\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Dourado"
  },
  {
    id: "xiaomi-4",
    brand: "Xiaomi",
    model: "Mix Fold 3",
    price: 9999,
    image: xiaomi14Ultra,
    specs: "8.0\" Dobrável | Snapdragon 8 Gen 3 | 512GB",
    color: "Preto"
  },
  {
    id: "xiaomi-5",
    brand: "Xiaomi",
    model: "13 Ultra",
    price: 5999,
    image: xiaomi14Ultra,
    specs: "6.73\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "xiaomi-6",
    brand: "Xiaomi",
    model: "Redmi Note 13 Pro",
    price: 2499,
    image: xiaomi14Ultra,
    specs: "6.67\" Display | Snapdragon 7 Gen 3 | 256GB",
    color: "Azul"
  },
  {
    id: "xiaomi-7",
    brand: "Xiaomi",
    model: "Redmi Note 13",
    price: 1999,
    image: xiaomi14Ultra,
    specs: "6.67\" Display | Snapdragon 685 | 256GB",
    color: "Preto"
  },
  {
    id: "xiaomi-8",
    brand: "Xiaomi",
    model: "Redmi 13",
    price: 1299,
    image: xiaomi14Ultra,
    specs: "6.5\" Display | MediaTek Helio G99 | 128GB",
    color: "Verde"
  },
  {
    id: "xiaomi-9",
    brand: "Xiaomi",
    model: "13",
    price: 4299,
    image: xiaomi14Ultra,
    specs: "6.36\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Branco"
  },
  {
    id: "xiaomi-10",
    brand: "Xiaomi",
    model: "Poco X6 Pro",
    price: 2799,
    image: xiaomi14Ultra,
    specs: "6.67\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },

  // Oppo
  {
    id: "oppo-1",
    brand: "Oppo",
    model: "Find X7 Ultra",
    price: 7999,
    image: oppoFindX7Ultra,
    specs: "6.82\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Preto"
  },
  {
    id: "oppo-2",
    brand: "Oppo",
    model: "Find X7",
    price: 6999,
    image: oppoFindX7Ultra,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Branco"
  },
  {
    id: "oppo-3",
    brand: "Oppo",
    model: "Reno 11 Pro",
    price: 4999,
    image: oppoFindX7Ultra,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Dourado"
  },
  {
    id: "oppo-4",
    brand: "Oppo",
    model: "Reno 11",
    price: 3999,
    image: oppoFindX7Ultra,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Preto"
  },
  {
    id: "oppo-5",
    brand: "Oppo",
    model: "A78",
    price: 2199,
    image: oppoFindX7Ultra,
    specs: "6.56\" Display | MediaTek Helio G99 | 128GB",
    color: "Azul"
  },
  {
    id: "oppo-6",
    brand: "Oppo",
    model: "A77",
    price: 1899,
    image: oppoFindX7Ultra,
    specs: "6.56\" Display | MediaTek Helio G99 | 128GB",
    color: "Preto"
  },
  {
    id: "oppo-7",
    brand: "Oppo",
    model: "Find X6 Pro",
    price: 5999,
    image: oppoFindX7Ultra,
    specs: "6.82\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "oppo-8",
    brand: "Oppo",
    model: "Reno 10",
    price: 3499,
    image: oppoFindX7Ultra,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB",
    color: "Prata"
  },
  {
    id: "oppo-9",
    brand: "Oppo",
    model: "A58",
    price: 1599,
    image: oppoFindX7Ultra,
    specs: "6.72\" Display | MediaTek Helio G99 | 128GB",
    color: "Preto"
  },
  {
    id: "oppo-10",
    brand: "Oppo",
    model: "Reno 8 Pro",
    price: 3999,
    image: oppoFindX7Ultra,
    specs: "6.7\" Display | Snapdragon 8 Gen 1 | 256GB",
    color: "Preto"
  },

  // ROG Phone
  {
    id: "rog-1",
    brand: "ROG Phone",
    model: "ROG Phone 8 Pro",
    price: 7999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Preto"
  },
  {
    id: "rog-2",
    brand: "ROG Phone",
    model: "ROG Phone 8",
    price: 6999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Branco"
  },
  {
    id: "rog-3",
    brand: "ROG Phone",
    model: "ROG Phone 7 Ultimate",
    price: 6999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "rog-4",
    brand: "ROG Phone",
    model: "ROG Phone 7",
    price: 5999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "rog-5",
    brand: "ROG Phone",
    model: "ROG Phone 6D",
    price: 4999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 256GB",
    color: "Preto"
  },
  {
    id: "rog-6",
    brand: "ROG Phone",
    model: "ROG Phone 6 Pro",
    price: 5499,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 512GB",
    color: "Preto"
  },
  {
    id: "rog-7",
    brand: "ROG Phone",
    model: "ROG Phone 6",
    price: 4799,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 8+ Gen 1 | 256GB",
    color: "Preto"
  },
  {
    id: "rog-8",
    brand: "ROG Phone",
    model: "ROG Phone 5s Pro",
    price: 3999,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 888 | 256GB",
    color: "Preto"
  },
  {
    id: "rog-9",
    brand: "ROG Phone",
    model: "ROG Phone 5s",
    price: 3599,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 888 | 256GB",
    color: "Preto"
  },
  {
    id: "rog-10",
    brand: "ROG Phone",
    model: "ROG Phone 5",
    price: 3299,
    image: rogPhone8Pro,
    specs: "6.78\" Display | Snapdragon 888 | 256GB",
    color: "Preto"
  },

  // Red Magic
  {
    id: "redmagic-1",
    brand: "Red Magic",
    model: "Red Magic 9 Pro",
    price: 7999,
    image: redMagic9Pro,
    specs: "6.85\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Preto"
  },
  {
    id: "redmagic-2",
    brand: "Red Magic",
    model: "Red Magic 9",
    price: 6999,
    image: redMagic9Pro,
    specs: "6.85\" Display | Snapdragon 8 Gen 3 | 512GB",
    color: "Vermelho"
  },
  {
    id: "redmagic-3",
    brand: "Red Magic",
    model: "Red Magic 8S Pro",
    price: 6999,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "redmagic-4",
    brand: "Red Magic",
    model: "Red Magic 8 Pro",
    price: 5999,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 8 Gen 2 | 512GB",
    color: "Preto"
  },
  {
    id: "redmagic-5",
    brand: "Red Magic",
    model: "Red Magic 8",
    price: 4999,
    image: redMagic9Pro,
    specs: "6.7\" Display | Snapdragon 8 Gen 2 | 256GB",
    color: "Preto"
  },
  {
    id: "redmagic-6",
    brand: "Red Magic",
    model: "Red Magic 7S Pro",
    price: 4999,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 512GB",
    color: "Preto"
  },
  {
    id: "redmagic-7",
    brand: "Red Magic",
    model: "Red Magic 7 Pro",
    price: 4499,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 256GB",
    color: "Preto"
  },
  {
    id: "redmagic-8",
    brand: "Red Magic",
    model: "Red Magic 7",
    price: 3999,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 8+ Gen 1 | 256GB",
    color: "Preto"
  },
  {
    id: "redmagic-9",
    brand: "Red Magic",
    model: "Red Magic 6S Pro",
    price: 3499,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 888 | 256GB",
    color: "Preto"
  },
  {
    id: "redmagic-10",
    brand: "Red Magic",
    model: "Red Magic 6",
    price: 2999,
    image: redMagic9Pro,
    specs: "6.8\" Display | Snapdragon 888 | 256GB",
    color: "Preto"
  }
];

export const brands = ["Apple", "Samsung", "Motorola", "Xiaomi", "Oppo", "ROG Phone", "Red Magic"];
