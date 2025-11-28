import { Chip, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { Parallel } from '../parallel';

const ALL_PARALLELS = [

  // 2014
  Parallel.newParallel('Golden Treasures', '1/1', new Date(2014, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Black Ice', '#/25', new Date(2014, 0, 1), new Date(2015, 0, 1), false),
  Parallel.newParallel('Seismic Gold', '#/50', new Date(2014, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Blue Cubes', '#/65', new Date(2014, 0, 1), new Date(2015, 0, 1), false),
  Parallel.newParallel('Red Prism', '#/139', new Date(2014, 0, 1), new Date(2015, 0, 1), true),
  Parallel.newParallel('White Ice', '#/199', new Date(2014, 0, 1), new Date(2016, 0, 1), false),
  Parallel.newParallel('Rainbow Trax', 'N/A', new Date(2014, 0, 1), new Date(2015, 0, 1), false),
  Parallel.newParallel('Rainbow', 'N/A', new Date(2014, 0, 1), new Date(2025, 0, 1), true),

  // 2015
  Parallel.newParallel('Emerald Surge', '#/10', new Date(2015, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Purple', '#/25', new Date(2015, 0, 1), new Date(2016, 0, 1), false),
  Parallel.newParallel('Blue Cubes', '#/75', new Date(2015, 0, 1), new Date(2016, 0, 1), false),
  Parallel.newParallel('Black Ice', '#/99', new Date(2015, 0, 1), new Date(2016, 0, 1), false),
  Parallel.newParallel('Red Prism', '#/149', new Date(2015, 0, 1), new Date(2016, 0, 1), true),

  // 2016
  Parallel.newParallel('Orange Checkers*', '#/25', new Date(2016, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Blue Cubes', '#/99', new Date(2016, 0, 1), new Date(2018, 0, 1), false),
  Parallel.newParallel('Red Prism', '#/199', new Date(2016, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Ice Blue Traxx', 'N/A', new Date(2016, 0, 1), new Date(2017, 0, 1), false),

  // 2017
  Parallel.newParallel('Violet Pixels', 'N/A', new Date(2017, 0, 1), new Date(2019, 0, 1), true),

  // 2018
  Parallel.newParallel('Arctic Freeze', '#/79', new Date(2018, 0, 1), new Date(2019, 0, 1), true),

  // 2019
  Parallel.newParallel('Arctic Freeze', '#/99', new Date(2019, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Violet Pixels', '#/399', new Date(2019, 0, 1), new Date(2021, 0, 1), true),
  Parallel.newParallel('Matte Pink', 'N/A', new Date(2019, 0, 1), new Date(2024, 0, 1), false),

  // 2020
  Parallel.newParallel('Cosmic', '#/65', new Date(2020, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Yellow Traxx', '#/249', new Date(2020, 0, 1), new Date(2021, 0, 1), false),
  Parallel.newParallel('Aquamarine', '#/499', new Date(2020, 0, 1), new Date(2021, 0, 1), false),
  Parallel.newParallel('Blue Surge', 'N/A', new Date(2020, 0, 1), new Date(2022, 0, 1), false),
  Parallel.newParallel('Red Surge', 'N/A', new Date(2020, 0, 1), new Date(2022, 0, 1), false),
  Parallel.newParallel('Yellow Surge', 'N/A', new Date(2020, 0, 1), new Date(2025, 0, 1), true),

  // 2021
  Parallel.newParallel('Violet Pixels', '#/299', new Date(2021, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Hot Magma', '#/499', new Date(2021, 0, 1), new Date(2023, 0, 1), false),

  // 2022
  Parallel.newParallel('Aquamarine', '#/149', new Date(2022, 0, 1), new Date(2023, 0, 1), false),
  Parallel.newParallel('Liquid Metal', '#/349', new Date(2022, 0, 1), new Date(2025, 0, 1), true),

  // 2023
  Parallel.newParallel('Bioluminescence', '#/5', new Date(2023, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Blue Fragments', '#/125', new Date(2023, 0, 1), new Date(2025, 0, 1), true),
  Parallel.newParallel('Pond Hockey', 'SSP', new Date(2023, 0, 1), new Date(2024, 0, 1), false),

  // 2024
  Parallel.newParallel('Pink Magma', 'N/A', new Date(2024, 0, 1), new Date(2025, 0, 1), true),
];

export default function BrandDetails() {
  const [showDiscontinued, setShowDiscontinued] = useState(false);

  function handleDiscontinuedChange() {
    setShowDiscontinued(!showDiscontinued);
  }

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
    <Paper elevation={1} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h3">O-Pee-Chee Platinum</Typography>
      <Chip label="Hockey" />

      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        O-Pee-Chee Platinum is a modern, chromium-style (Opti-Chrome) hockey card line produced by Upper Deck that
        blends the nostalgic O-Pee-Chee brand with a premium, shiny finish. It's best known for its extensive parallel
        rainbow sets, on-card autographs, and strong rookie class representation each year. Compared to traditional
        O-Pee-Chee, Platinum is more collector-focused, emphasizing hits, color parallels, and a sleek, high-end look
        while remaining relatively affordable within the premium chrome category.
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>Parallels</Typography>
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleDiscontinuedChange}></Switch>} label="Show Discontinued"></FormControlLabel>
      </FormGroup>
      <Chart chartType='Timeline' data={data} width='100%' height={showDiscontinued ? '1160px' : '630px'}
        options={{
          timeline: { fontName: 'Roboto', singleColor: '#616161' }
        }} />

      <Typography variant="subtitle1">
        *: Technically, the parallel was called Rainbow Orange in 2016 but I've combined them for now.
      </Typography>
    </Paper>
  </>
}
