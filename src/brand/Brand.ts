type Brand = {
    brandId: string;
    name: string;
    sport: string;
    description: string;
    longDescription?: string;
    disabled?: boolean;
};

const BRANDS: Brand[] = [
    {
        brandId: "o-pee-chee-platinum-hockey",
        name: "O-Pee-Chee Platinum",
        sport: "Hockey",
        description: "A modern, chromium-style (Opti-Chrome) hockey card line produced by Upper Deck that blends the nostalgic O-Pee-Chee brand with a premium, shiny finish.",
        longDescription: "O-Pee-Chee Platinum is a modern, chromium-style (Opti-Chrome) hockey card line produced by Upper Deck that blends the nostalgic O-Pee-Chee brand with a premium, shiny finish. It's best known for its extensive parallel rainbow sets, on-card autographs, and strong rookie class representation each year. Compared to traditional O-Pee-Chee, Platinum is more collector-focused, emphasizing hits, color parallels, and a sleek, high-end look while remaining relatively affordable within the premium chrome category.",
    },
    {
        brandId: "topps-chrome-baseball",
        name: "Topps Chrome",
        sport: "Baseball",
        description: "A premium, glossy, chromium-stock version of the Topps flagship set that highlights rookies, stars, and parallels with a focus on shine, color refractors, and collectability.",
        disabled: true,
    },
    {
        brandId: "panini-prizm-football",
        name: "Panini Prizm",
        sport: "Football",
        description: "A flagship chromium-style card line known for its sleek design, deep checklist, and highly sought-after color parallels and rookie cards.",
        disabled: true,
    },
    {
        brandId: "panini-select-basketball",
        name: "Panini Select",
        sport: "Basketball",
        description: "A tiered, chromium-based product known for its premium feel, multi-level base set, and vibrant array of parallels and inserts that highlight top rookies and stars.",
        disabled: true,
    },
    {
        brandId: "panini-mosaic-football",
        name: "Panini Mosaic",
        sport: "Football",
        description: "A bold, chromium-based line known for its eye-catching geometric patterns, strong rookie presence, and wide range of colorful parallels and inserts.",
        disabled: true,
    },
    {
        brandId: "panini-phoenix-football",
        name: "Panini Phoenix",
        sport: "Football",
        description: "A mid- to high-end NFL trading card line known for its vibrant, fire-themed design aesthetic and bold foil treatments.",
        longDescription: "Panini Phoenix Football is a mid- to high-end NFL trading card line known for its vibrant, fire-themed design aesthetic and bold foil treatments. The brand blends strong visual appeal with a mix of rookie cards, inserts, and parallels that attract both collectors and investors. Each release typically emphasizes dynamic action photography and chase-worthy hits, making it a staple product in the football card hobby.",
    },
    {
        brandId: "panini-mosaic-football",
        name: "Panini Mosaic",
        sport: "Football",
        description: "A vibrant, modern trading-card line known for its bold geometric patterns, chromium stock, and eye-catching parallels.",
        longDescription: "Panini Mosaic Football is a vibrant, modern trading-card line known for its bold geometric patterns, chromium stock, and eye-catching parallels. It blends a sleek, mosaic-inspired design with a wide range of inserts, autographs, and color variations that appeal to both collectors and casual fans. The brand emphasizes visual impact and chase value, making it a staple in contemporary football card releases.",
    },
];

export function getAllBrands() {
    return BRANDS;
}

export function getBrand(brandId?: string) {
    return BRANDS.find(brand => brand.brandId === brandId);
}