import { Button, Card, CardActions, CardContent, Chip, Grid, Paper, Typography } from "@mui/material";
import { getAllBrandDefintions } from "../utils/BrandDefinition";

export default function BrandList() {
    const brands = getAllBrandDefintions();

    return <>
        <Paper elevation={1} sx={{ marginTop: 2, padding: 2 }}>
            <Typography variant="h3">Brands</Typography>
            <Typography variant="body1">
                Several major brands define the sports card hobby, each with its own identity. <b>Topps</b> is known for its flagship
                baseball line and classic designs, offering a mix of accessibility and tradition. <b>Panini</b> dominates basketball
                and football, producing popular lines like Prizm, Select, and National Treasures that emphasize parallels, autographs,
                and premium hits. <b>Upper Deck</b> focuses heavily on hockey and high-end products like The Cup, blending strong
                photography with premium memorabilia. <b>Leaf</b> operates as an unlicensed brand known for autograph-heavy products
                and prospecting. Together, these brands cover everything from entry-level collecting to ultra-premium releases.
            </Typography>
        </Paper>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {brands.map((brand) => (
                <Grid size={3}>
                    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <CardContent>
                            <Chip label={brand.sport} />
                            <Typography variant="h6">
                                {brand.name}
                            </Typography>
                            <Typography variant="body2">
                                {brand.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginTop: "auto" }}>
                            <Button href={`/hobby-charts/brands/${brand.brandId}`} disabled={brand.disabled}>View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
}