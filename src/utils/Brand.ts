import BRANDS_2000 from "../data/2000.brands.json";
import BRANDS_2001 from "../data/2001.brands.json";
import BRANDS_2002 from "../data/2002.brands.json";
import BRANDS_2003 from "../data/2003.brands.json";
import BRANDS_2004 from "../data/2004.brands.json";
import BRANDS_2005 from "../data/2005.brands.json";
import BRANDS_2006 from "../data/2006.brands.json";
import BRANDS_2007 from "../data/2007.brands.json";
import BRANDS_2008 from "../data/2008.brands.json";
import BRANDS_2009 from "../data/2009.brands.json";
import BRANDS_2010 from "../data/2010.brands.json";
import BRANDS_2011 from "../data/2011.brands.json";
import BRANDS_2012 from "../data/2012.brands.json";
import BRANDS_2013 from "../data/2013.brands.json";
import BRANDS_2014 from "../data/2014.brands.json";
import BRANDS_2015 from "../data/2015.brands.json";
import BRANDS_2016 from "../data/2016.brands.json";
import BRANDS_2017 from "../data/2017.brands.json";
import BRANDS_2018 from "../data/2018.brands.json";
import BRANDS_2019 from "../data/2019.brands.json";
import BRANDS_2020 from "../data/2020.brands.json";
import BRANDS_2021 from "../data/2021.brands.json";
import BRANDS_2022 from "../data/2022.brands.json";
import BRANDS_2023 from "../data/2023.brands.json";
import BRANDS_2024 from "../data/2024.brands.json";
import BRANDS_2025 from "../data/2025.brands.json";

const BRANDS: Brand[] = [
    ...BRANDS_2000,
    ...BRANDS_2001,
    ...BRANDS_2002,
    ...BRANDS_2003,
    ...BRANDS_2004,
    ...BRANDS_2005,
    ...BRANDS_2006,
    ...BRANDS_2007,
    ...BRANDS_2008,
    ...BRANDS_2009,
    ...BRANDS_2010,
    ...BRANDS_2011,
    ...BRANDS_2012,
    ...BRANDS_2013,
    ...BRANDS_2014,
    ...BRANDS_2015,
    ...BRANDS_2016,
    ...BRANDS_2017,
    ...BRANDS_2018,
    ...BRANDS_2019,
    ...BRANDS_2020,
    ...BRANDS_2021,
    ...BRANDS_2022,
    ...BRANDS_2023,
    ...BRANDS_2024,
    ...BRANDS_2025,
];

export function convertBrandsToData(brands: Brand[], showDiscontinued = false) {
    const maxYear = Math.max(...brands.map((b) => b.year));
    const activeBrands = brands.filter((b) => b.year === maxYear).map((b) => b.name);

    const columns = [
        { type: 'string', id: 'Brand' },
        { type: 'string', id: 'Manufacturer' },
        { type: 'date', id: 'Start' },
        { type: 'date', id: 'End' },
    ];

    const rows: (string | Date)[][] = [];
    brands
        .sort((a, b) => a.name.localeCompare(b.name))
        .filter(b => showDiscontinued || activeBrands.includes(b.name))
        .forEach(b => {
            const manufacturer = b.manufacturer || "";
            const endDate = new Date(b.year + 1, 0, 1);
            const existing = rows.findLast(row => row[0] === b.name && row[1] === manufacturer && (row[3] as Date).getFullYear() === b.year);
            if (existing) {
                existing[3] = endDate;
            } else {
                rows.push([b.name, manufacturer, new Date(b.year, 0, 1), endDate]);
            }
        });

    return [columns, ...rows];
}

export function findBrandsBySportId(sportId?: string): Brand[] {
    return BRANDS.filter(b => b.sportId === sportId);
}