import { FormControlLabel, FormGroup, Paper, Switch, Typography } from "@mui/material";
import { useState } from "react";
import Chart from "react-google-charts";
import { useParams } from "react-router";
import { convertBrandsToData, findBrandsBySportId } from "../utils/Brand";
import { getSportById } from "../utils/Sport";

export default function SportDetails() {
    const { sportId } = useParams();
    const [showDiscontinued, setShowDiscontinued] = useState(false);
    const sport = getSportById(sportId!);

    const brands = findBrandsBySportId(sportId);

    const activeData = convertBrandsToData(brands, false);
    const activeRowCount = new Set(activeData.map(row => row[0])).size - 1;

    const totalData = convertBrandsToData(brands, true);
    const totalRowCount = new Set(totalData.map(row => row[0])).size - 1;

    const data = showDiscontinued ? totalData : activeData;
    const rowCount = showDiscontinued ? totalRowCount : activeRowCount;

    return <>
        <Paper elevation={1} sx={{ marginTop: 2, padding: 2 }}>
            <Typography variant="h3">{sport!.name}</Typography>
            <Typography variant="body1">
                {sport!.longDescription}
            </Typography>

            <Typography variant="h5" sx={{ marginTop: 2 }}>Parallels</Typography>
            <FormGroup>
                <FormControlLabel control={<Switch onChange={() => setShowDiscontinued(!showDiscontinued)}></Switch>} label="Show Discontinued" />
            </FormGroup>
            <Chart chartType='Timeline' data={data} width='100%' height={Math.min(950, rowCount * 45) + 'px'}
                options={{
                    timeline: { fontName: 'Roboto', singleColor: '#616161' }
                }} />
        </Paper>
    </>
} 