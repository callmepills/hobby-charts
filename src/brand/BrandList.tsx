import { Button, Card, CardActions, CardContent, Chip, Grid, Paper, Typography } from "@mui/material";

const BRANDS = [
    {
        name: "O-Pee-Chee Platinum",
        sport: "Hockey",
        description: "A modern, chromium-style (Opti-Chrome) hockey card line produced by Upper Deck that blends the nostalgic O-Pee-Chee brand with a premium, shiny finish.",
        link: "/hobby-charts/brands/o-pee-chee-platinum-hockey",
    },
    {
        name: "Topps Chrome",
        sport: "Baseball",
        description: "A premium, glossy, chromium-stock version of the Topps flagship set that highlights rookies, stars, and parallels with a focus on shine, color refractors, and collectability.",
    },
    {
        name: "Panini Prizm",
        sport: "Football",
        description: "A flagship chromium-style card line known for its sleek design, deep checklist, and highly sought-after color parallels and rookie cards.",
    },
    {
        name: "Panini Select",
        sport: "Basketball",
        description: "A tiered, chromium-based product known for its premium feel, multi-level base set, and vibrant array of parallels and inserts that highlight top rookies and stars.",
    },
    {
        name: "Panini Mosaic",
        sport: "Football",
        description: "A bold, chromium-based line known for its eye-catching geometric patterns, strong rookie presence, and wide range of colorful parallels and inserts.",
    },
];

export default function BrandList() {
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
            {BRANDS.map((brand) => (
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
                            <Button href={brand.link} disabled={!brand.link}>View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
}