export type Parallel = {
    year: number;
    name: string;
    printRun?: number;
    ssp?: boolean;
};

export function compareParalllels(a: Parallel, b: Parallel) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;

    if (a.printRun && !b.printRun) return -1;
    if (!a.printRun && b.printRun) return 1;
    if (a.printRun && b.printRun) {
        if (a.printRun < b.printRun) return -1;
        if (a.printRun > b.printRun) return 1;
    }

    if (a.ssp && !b.ssp) return -1;
    if (!a.ssp && b.ssp) return 1;

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}

export function convertParallelsToData(parallels: Parallel[], showDiscontinued = false) {
  const maxYear = Math.max(...parallels.map((p) => p.year));
  const activeParallels = parallels.filter((p) => p.year === maxYear).map((p) => p.name);

  const columns = [
    { type: 'string', id: 'Parallel' },
    { type: 'string', id: 'Print Run' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ];

  const rows: (string | Date)[][] = [];
  parallels
    .sort(compareParalllels)
    .filter(p => showDiscontinued || activeParallels.includes(p.name))
    .forEach(p => {
      const printRun = p.printRun ? `#/${p.printRun}` : p.ssp ? 'SSP' : '';
      const endDate = new Date(p.year + 1, 0, 1);
      const existing = rows.find((row) => row[0] === p.name && row[1] === printRun);
      if (existing) {
        existing[3] = endDate;
      } else {
        rows.push([p.name, printRun, new Date(p.year, 0, 1), endDate]);
      }
    });

  return [columns, ...rows];
}

export const OPC_PLATINUM_PARALLELS: Parallel[] = [

    // 2014
    { year: 2014, name: "Rainbow", },
    { year: 2014, name: "Rainbow Trax", },
    { year: 2014, name: "White Ice", printRun: 199, },
    { year: 2014, name: "Red Prism", printRun: 139, },
    { year: 2014, name: "Blue Cubes", printRun: 65, },
    { year: 2014, name: "Seismic Gold", printRun: 50, },
    { year: 2014, name: "Black Ice", printRun: 25, },
    { year: 2014, name: "Golden Treasures", printRun: 1, },

    // 2015
    { year: 2015, name: "Rainbow", },
    { year: 2015, name: "White Ice", printRun: 199, },
    { year: 2015, name: "Red Prism", printRun: 149, },
    { year: 2015, name: "Black Ice", printRun: 99, },
    { year: 2015, name: "Blue Cubes", printRun: 75, },
    { year: 2015, name: "Seismic Gold", printRun: 50, },
    { year: 2015, name: "Purple", printRun: 25, },
    { year: 2015, name: "Emerald Surge", printRun: 10, },
    { year: 2015, name: "Golden Treasures", printRun: 1, },

    // 2016
    { year: 2016, name: "Rainbow", },
    { year: 2016, name: "Ice Blue Traxx", },
    { year: 2016, name: "Red Prism", printRun: 199, },
    { year: 2016, name: "Blue Cubes", printRun: 99, },
    { year: 2016, name: "Seismic Gold", printRun: 50, },
    { year: 2016, name: "Orange Checkers", printRun: 25, },
    { year: 2016, name: "Emerald Surge", printRun: 10, },
    { year: 2016, name: "Golden Treasures", printRun: 1, },

    // 2017
    { year: 2017, name: "Rainbow", },
    { year: 2017, name: "Violet Pixels", },
    { year: 2017, name: "Red Prism", printRun: 199, },
    { year: 2017, name: "Blue Cubes", printRun: 99, },
    { year: 2017, name: "Seismic Gold", printRun: 50, },
    { year: 2017, name: "Orange Checkers", printRun: 25, },
    { year: 2017, name: "Emerald Surge", printRun: 10, },
    { year: 2017, name: "Golden Treasures", printRun: 1, },

    // 2018
    { year: 2018, name: "Rainbow", },
    { year: 2018, name: "Violet Pixels", },
    { year: 2018, name: "Red Prism", printRun: 199, },
    { year: 2018, name: "Arctic Freeze", printRun: 79, },
    { year: 2018, name: "Seismic Gold", printRun: 50, },
    { year: 2018, name: "Orange Checkers", printRun: 25, },
    { year: 2018, name: "Emerald Surge", printRun: 10, },
    { year: 2018, name: "Golden Treasures", printRun: 1, },

    // 2019
    { year: 2019, name: "Rainbow", },
    { year: 2019, name: "Matte Pink", },
    { year: 2019, name: "Violet Pixels", printRun: 399, },
    { year: 2019, name: "Red Prism", printRun: 199, },
    { year: 2019, name: "Arctic Freeze", printRun: 99, },
    { year: 2019, name: "Seismic Gold", printRun: 50, },
    { year: 2019, name: "Orange Checkers", printRun: 25, },
    { year: 2019, name: "Emerald Surge", printRun: 10, },
    { year: 2019, name: "Golden Treasures", printRun: 1, },

    // 2020
    { year: 2020, name: "Rainbow", },
    { year: 2020, name: "Matte Pink", },
    { year: 2020, name: "Blue Surge", },
    { year: 2020, name: "Red Surge", },
    { year: 2020, name: "Yellow Surge", },
    { year: 2020, name: "Aquamarine", printRun: 499, },
    { year: 2020, name: "Violet Pixels", printRun: 399, },
    { year: 2020, name: "Yellow Traxx", printRun: 249, },
    { year: 2020, name: "Red Prism", printRun: 199, },
    { year: 2020, name: "Arctic Freeze", printRun: 99, },
    { year: 2020, name: "Cosmic", printRun: 65, },
    { year: 2020, name: "Seismic Gold", printRun: 50, },
    { year: 2020, name: "Orange Checkers", printRun: 25, },
    { year: 2020, name: "Emerald Surge", printRun: 10, },
    { year: 2020, name: "Golden Treasures", printRun: 1, },

    // 2021
    { year: 2021, name: "Rainbow", },
    { year: 2021, name: "Matte Pink", },
    { year: 2021, name: "Blue Surge", },
    { year: 2021, name: "Red Surge", },
    { year: 2021, name: "Yellow Surge", },
    { year: 2021, name: "Hot Magma", printRun: 499, },
    { year: 2021, name: "Violet Pixels", printRun: 299, },
    { year: 2021, name: "Red Prism", printRun: 199, },
    { year: 2021, name: "Arctic Freeze", printRun: 99, },
    { year: 2021, name: "Cosmic", printRun: 65, },
    { year: 2021, name: "Seismic Gold", printRun: 50, },
    { year: 2021, name: "Orange Checkers", printRun: 25, },
    { year: 2021, name: "Emerald Surge", printRun: 10, },
    { year: 2021, name: "Golden Treasures", printRun: 1, },

    // 2022
    { year: 2022, name: "Rainbow", },
    { year: 2022, name: "Matte Pink", },
    { year: 2022, name: "Yellow Surge", },
    { year: 2022, name: "Hot Magma", printRun: 499, },
    { year: 2022, name: "Liquid Metal", printRun: 349, },
    { year: 2022, name: "Violet Pixels", printRun: 299, },
    { year: 2022, name: "Red Prism", printRun: 199, },
    { year: 2022, name: "Aquamarine", printRun: 149, },
    { year: 2022, name: "Arctic Freeze", printRun: 99, },
    { year: 2022, name: "Cosmic", printRun: 65, },
    { year: 2022, name: "Seismic Gold", printRun: 50, },
    { year: 2022, name: "Orange Checkers", printRun: 25, },
    { year: 2022, name: "Emerald Surge", printRun: 10, },
    { year: 2022, name: "Golden Treasures", printRun: 1, },

    // 2023
    { year: 2023, name: "Rainbow", },
    { year: 2023, name: "Matte Pink", },
    { year: 2023, name: "Yellow Surge", },
    { year: 2023, name: "Pond Hockey", ssp: true, },
    { year: 2023, name: "Liquid Metal", printRun: 349, },
    { year: 2023, name: "Violet Pixels", printRun: 299, },
    { year: 2023, name: "Red Prism", printRun: 199, },
    { year: 2023, name: "Blue Fragments", printRun: 125, },
    { year: 2023, name: "Arctic Freeze", printRun: 99, },
    { year: 2023, name: "Cosmic", printRun: 65, },
    { year: 2023, name: "Seismic Gold", printRun: 50, },
    { year: 2023, name: "Orange Checkers", printRun: 25, },
    { year: 2023, name: "Emerald Surge", printRun: 10, },
    { year: 2023, name: "Bioluminescence", printRun: 5, },
    { year: 2023, name: "Golden Treasures", printRun: 1, },

    // 2024
    { year: 2024, name: "Rainbow", },
    { year: 2024, name: "Pink Magma", },
    { year: 2024, name: "Yellow Surge", },
    { year: 2024, name: "Liquid Metal", printRun: 349, },
    { year: 2024, name: "Violet Pixels", printRun: 299, },
    { year: 2024, name: "Red Prism", printRun: 199, },
    { year: 2024, name: "Blue Fragments", printRun: 125, },
    { year: 2024, name: "Arctic Freeze", printRun: 99, },
    { year: 2024, name: "Cosmic", printRun: 65, },
    { year: 2024, name: "Seismic Gold", printRun: 50, },
    { year: 2024, name: "Orange Checkers", printRun: 25, },
    { year: 2024, name: "Emerald Surge", printRun: 10, },
    { year: 2024, name: "Bioluminescence", printRun: 5, },
    { year: 2024, name: "Golden Treasures", printRun: 1, },
];