import { Chip, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { convertParallelsToData, OPC_PLATINUM_PARALLELS } from './Parallel';

export default function BrandDetails() {
  const [showDiscontinued, setShowDiscontinued] = useState(false);
  const data = convertParallelsToData(OPC_PLATINUM_PARALLELS, showDiscontinued);

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
        <FormControlLabel control={<Switch onChange={() => setShowDiscontinued(!showDiscontinued)}></Switch>} label="Show Discontinued" />
      </FormGroup>
      <Chart chartType='Timeline' data={data} width='100%' height={showDiscontinued ? '1160px' : '630px'}
        options={{
          timeline: { fontName: 'Roboto', singleColor: '#616161' }
        }} />

      <Typography variant="subtitle1">
        *: Technically, the Orange Checkers parallel was called Rainbow Orange in 2016 but I've combined them for now.
      </Typography>
    </Paper>
  </>
}
