import { Button, Card, CardActions, CardContent, Chip, Grid, Paper, Typography } from "@mui/material";

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
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid size={3}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Chip label="Hockey" />
                            <Typography variant="h6">
                                O-Pee-Chee Platinum
                            </Typography>
                            <Typography variant="body2">
                                A modern, chromium-style (Opti-Chrome) hockey card line produced by Upper Deck that blends the nostalgic
                                O-Pee-Chee brand with a premium, shiny finish.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href="/hobby-charts/brands/o-pee-chee-platinum-hockey">View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Chip label="Baseball" />
                            <Typography variant="h6">
                                Topps Chrome
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis ut sapien ut feugiat. In eget 
                                ligula sit amet nulla interdum elementum ac id ante.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Chip label="Football" />
                            <Typography variant="h6">
                                Panini Prizm
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis ut sapien ut feugiat. In eget 
                                ligula sit amet nulla interdum elementum ac id ante.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={3}>
                    <Card sx={{ height: "100%" }}>
                        <CardContent>
                            <Chip label="Basketball" />
                            <Typography variant="h6">
                                Select
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis ut sapien ut feugiat. In eget 
                                ligula sit amet nulla interdum elementum ac id ante.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Paper>
    </>
}