import { useState } from 'react';
import './App.css'
import { Chart } from 'react-google-charts';
import { Parallel } from './parallel';

const ALL_PARALLELS = new Array<Parallel>();

// 2014
ALL_PARALLELS.push(Parallel.newParallel('Golden Treasures', '1/1', new Date(2014, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Black Ice', '#/25', new Date(2014, 0, 1), new Date(2015, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Seismic Gold', '#/50', new Date(2014, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Blue Cubes', '#/65', new Date(2014, 0, 1), new Date(2015, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Red Prism', '#/139', new Date(2014, 0, 1), new Date(2015, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('White Ice', '#/199', new Date(2014, 0, 1), new Date(2016, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Rainbow Trax', 'N/A', new Date(2014, 0, 1), new Date(2015, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Rainbow', 'N/A', new Date(2014, 0, 1), new Date(2025, 0, 1), true));

// 2015
ALL_PARALLELS.push(Parallel.newParallel('Emerald Surge', '#/10', new Date(2015, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Purple', '#/25', new Date(2015, 0, 1), new Date(2016, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Blue Cubes', '#/75', new Date(2015, 0, 1), new Date(2016, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Black Ice', '#/99', new Date(2015, 0, 1), new Date(2016, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Red Prism', '#/149', new Date(2015, 0, 1), new Date(2016, 0, 1), true));

// 2016
ALL_PARALLELS.push(Parallel.newParallel('Orange Checkers*', '#/25', new Date(2016, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Blue Cubes', '#/99', new Date(2016, 0, 1), new Date(2018, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Red Prism', '#/199', new Date(2016, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Ice Blue Traxx', 'N/A', new Date(2016, 0, 1), new Date(2017, 0, 1), false));

// 2017
ALL_PARALLELS.push(Parallel.newParallel('Violet Pixels', 'N/A', new Date(2017, 0, 1), new Date(2019, 0, 1), true));

// 2018
ALL_PARALLELS.push(Parallel.newParallel('Arctic Freeze', '#/79', new Date(2018, 0, 1), new Date(2019, 0, 1), true));

// 2019
ALL_PARALLELS.push(Parallel.newParallel('Arctic Freeze', '#/99', new Date(2019, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Violet Pixels', '#/399', new Date(2019, 0, 1), new Date(2021, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Matte Pink', 'N/A', new Date(2019, 0, 1), new Date(2024, 0, 1), false));

// 2020
ALL_PARALLELS.push(Parallel.newParallel('Cosmic', '#/65', new Date(2020, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Yellow Traxx', '#/249', new Date(2020, 0, 1), new Date(2021, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Aquamarine', '#/499', new Date(2020, 0, 1), new Date(2021, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Blue Surge', 'N/A', new Date(2020, 0, 1), new Date(2022, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Red Surge', 'N/A', new Date(2020, 0, 1), new Date(2022, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Yellow Surge', 'N/A', new Date(2020, 0, 1), new Date(2025, 0, 1), true));

// 2021
ALL_PARALLELS.push(Parallel.newParallel('Violet Pixels', '#/299', new Date(2021, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Hot Magma', '#/499', new Date(2021, 0, 1), new Date(2023, 0, 1), false));

// 2022
ALL_PARALLELS.push(Parallel.newParallel('Aquamarine', '#/149', new Date(2022, 0, 1), new Date(2023, 0, 1), false));
ALL_PARALLELS.push(Parallel.newParallel('Liquid Metal', '#/349', new Date(2022, 0, 1), new Date(2025, 0, 1), true));

// 2023
ALL_PARALLELS.push(Parallel.newParallel('Bioluminescence', '#/5', new Date(2023, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Blue Fragments', '#/125', new Date(2023, 0, 1), new Date(2025, 0, 1), true));
ALL_PARALLELS.push(Parallel.newParallel('Pond Hockey', 'SSP', new Date(2023, 0, 1), new Date(2024, 0, 1), false));

// 2024
ALL_PARALLELS.push(Parallel.newParallel('Pink Magma', 'N/A', new Date(2024, 0, 1), new Date(2025, 0, 1), true));

export default function App() {
  const [showDiscontinued, setShowDiscontinued] = useState(false);

  const parallels = ALL_PARALLELS.filter((p) => showDiscontinued || p.active);

  const data = [
    [
      { type: 'string', id: 'Parallel' },
      { type: 'string', id: 'Print Run' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ...parallels.map((p) => p.toDataEntry())
  ];

  return <>
    <h2>O-Pee-Chee Platinum Hockey</h2>

    <button onClick={() => setShowDiscontinued(!showDiscontinued)}>
      {showDiscontinued ? 'Hide Discontinued' : 'Show Discontinued'}
    </button>

    <Chart chartType='Timeline' data={data} width='1200px' height={showDiscontinued ? '1260px' : '630px'}
      options={{
        timeline: { singleColor: 'black' }
      }} />

    <p>
      *: Technically, the parallel was called Rainbow Orange in 2016 but I've combined them for now.
    </p>
  </>
}
