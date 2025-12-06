import { Chip, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Chart } from 'react-google-charts';
import { useParams } from 'react-router';
import { getBrandDefinition } from '../utils/BrandDefinition';
import { convertParallelsToData, findParallelsByBrand } from '../utils/Parallel';

export default function BrandDetails() {
  const { brandId } = useParams();
  const [showDiscontinued, setShowDiscontinued] = useState(false);

  const brand = getBrandDefinition(brandId);
  const parallels = findParallelsByBrand(brandId);

  const activeData = convertParallelsToData(parallels, false);
  const activeRowCount = new Set(activeData.map(row => row[0])).size - 1;

  const totalData = convertParallelsToData(parallels, true);
  const totalRowCount = new Set(totalData.map(row => row[0])).size - 1;

  const data = showDiscontinued ? totalData : activeData;
  const rowCount = showDiscontinued ? totalRowCount : activeRowCount;

  return <>
    <Paper elevation={1} sx={{ marginTop: 2, padding: 2 }}>
      <Typography variant="h3">{brand?.name}</Typography>
      <Chip label={brand?.sport} />

      <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
        {brand?.longDescription}
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>Parallels</Typography>
      <FormGroup>
        <FormControlLabel control={<Switch onChange={() => setShowDiscontinued(!showDiscontinued)}></Switch>} label="Show Discontinued" />
      </FormGroup>
      <Chart chartType='Timeline' data={data} width='100%' height={Math.min(950, rowCount * 45) + 'px'}
        options={{
          timeline: { fontName: 'Roboto', singleColor: '#616161' }
        }} />

      {/* <Typography variant="subtitle1">
        *: Technically, the Orange Checkers parallel was called Rainbow Orange in 2016 but I've combined them for now.
      </Typography> */}
    </Paper>
  </>
}
