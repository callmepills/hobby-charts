import './App.css'
import { Chart } from 'react-google-charts';

export const activeParallels = [
  [
    { type: 'string', id: 'Parallel' },
    { type: 'string', id: 'Print Run' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],

  // 2014
  [
    'Golden Treasures',
    '1/1',
    new Date(2014, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Seismic Gold',
    '#/50',
    new Date(2014, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Red Prism',
    '#/139',
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
  ],
  [
    'Red Prism',
    '#/149',
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
  ],
  [
    'Red Prism',
    '#/199',
    new Date(2016, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Rainbow',
    'N/A',
    new Date(2014, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2015
  [
    'Emerald Surge',
    '#/10',
    new Date(2015, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2016
  [
    'Orange Checkers',
    '#/25',
    new Date(2016, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2017
  [
    'Violet Pixels',
    'N/A',
    new Date(2017, 0, 1),
    new Date(2019, 0, 1),
  ],
  [
    'Violet Pixels',
    '#/399',
    new Date(2019, 0, 1),
    new Date(2021, 0, 1),
  ],
  [
    'Violet Pixels',
    '#/299',
    new Date(2021, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2018
  [
    'Arctic Freeze',
    '#/79',
    new Date(2018, 0, 1),
    new Date(2019, 0, 1),
  ],
  [
    'Arctic Freeze',
    '#/99',
    new Date(2019, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2020
  [
    'Cosmic',
    '#/65',
    new Date(2020, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Yellow Surge',
    'N/A',
    new Date(2020, 0, 1),
    new Date(2025, 0, 1),
  ],

  // 2022
  [
    'Liquid Metal',
    '#/349',
    new Date(2022, 0, 1),
    new Date(2025, 0, 1),
  ],

  [
    'Bioluminescence',
    '#/5',
    new Date(2023, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Blue Fragments',
    '#/125',
    new Date(2023, 0, 1),
    new Date(2025, 0, 1),
  ],
  [
    'Pink Magma',
    'N/A',
    new Date(2024, 0, 1),
    new Date(2025, 0, 1),
  ],
];


export const discontinuedParallels = [
  [
    { type: 'string', id: 'Parallel' },
    { type: 'string', id: 'Print Run' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ],

  // 2014
  [
    'Black Ice',
    '#/25',
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
  ],
  [
    'Blue Cubes',
    '#/65',
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
  ],
  [
    'White Ice',
    '#/199',
    new Date(2014, 0, 1),
    new Date(2016, 0, 1),
  ],
  [
    'Rainbow Trax',
    'N/A',
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
  ],

  // 2015
  [
    'Purple',
    '#/25',
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
  ],

  // 2016
  [
    'Rainbow Orange',
    '#/25',
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
  ],
  [
    'Blue Cubes',
    '#/99',
    new Date(2016, 0, 1),
    new Date(2018, 0, 1),
  ],
  [
    'Ice Blue Traxx',
    'N/A',
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
  ],

  // 2019
  [
    'Matte Pink',
    'N/A',
    new Date(2019, 0, 1),
    new Date(2024, 0, 1),
  ],

  // 2020
  [
    'Yellow Traxx',
    '#/249',
    new Date(2020, 0, 1),
    new Date(2021, 0, 1),
  ],
  [
    'Aquamarine',
    '#/499',
    new Date(2020, 0, 1),
    new Date(2021, 0, 1),
  ],
  [
    'Blue Surge',
    'N/A',
    new Date(2020, 0, 1),
    new Date(2022, 0, 1),
  ],
  [
    'Red Surge',
    'N/A',
    new Date(2020, 0, 1),
    new Date(2022, 0, 1),
  ],

  // 2021
  [
    'Hot Magma',
    '#/499',
    new Date(2021, 0, 1),
    new Date(2023, 0, 1),
  ],

  // 2022
  [
    'Aquamarine',
    '#/149',
    new Date(2022, 0, 1),
    new Date(2023, 0, 1),
  ],

  // 2023
  [
    'Pond Hockey',
    'SSP',
    new Date(2023, 0, 1),
    new Date(2024, 0, 1),
  ],
];

export default function App() {
  return <>
    <h2>O-Pee-Chee Platinum Hockey</h2>

    <h3>Active Parallels</h3>
    <Chart chartType='Timeline' data={activeParallels} width='1200px' height='630px'
      options={{
        timeline: { singleColor: 'black' }
      }} />

    <h3>Discontinued Parallels</h3>
    <Chart chartType='Timeline' data={discontinuedParallels} width='1100px' height='630px'
      options={{
        timeline: { singleColor: 'black' }
      }} />
  </>
}
