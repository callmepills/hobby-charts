import { ViewTimeline } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function Home() {
    const theme = useTheme();
    return <>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={12}>
                <Paper
                    elevation={1}
                    sx={{
                        height: 360,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <ViewTimeline sx={{ color: theme.palette.primary.main, fontSize: 256 }} />
                    <Typography variant="h3">HOBBY CHARTS</Typography>
                </Paper>
            </Grid>
            <Grid size={4}>
                <Card sx={{ height: "100%" }}>
                    {/* <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Brands
                        </Typography>
                        <Typography variant="body2">
                            Several major brands define the sports card hobby, each with its own identity. Together, these brands cover 
                            everything from entry-level collecting to ultra-premium releases.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/hobby-charts/brands">Explore Brands</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card sx={{ height: "100%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Placeholder
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis ut sapien ut
                            feugiat. In eget ligula sit amet nulla interdum elementum ac id ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={4}>
                <Card sx={{ height: "100%" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Placeholder
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis ut sapien ut
                            feugiat. In eget ligula sit amet nulla interdum elementum ac id ante.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </>
}