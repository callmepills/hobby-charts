import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from "@mui/material";
import { getAllSports } from "../utils/Sport";

export default function SportList() {
    const sports = getAllSports();

    return <>
        <Paper elevation={1} sx={{ marginTop: 2, padding: 2 }}>
            <Typography variant="h3">Sports</Typography>
            <Typography variant="body1">
                The sports card hobby encompasses a variety of sports, each with its own unique appeal and collector base. Baseball is 
                the oldest and most traditional sport in the hobby, known for its rich history and iconic players. Basketball has 
                surged in popularity, especially with the rise of global superstars and dynamic gameplay. Football remains a staple, 
                particularly in North America, with a strong emphasis on rookie cards and autographs. Hockey offers a passionate niche 
                market, especially in Canada and northern regions, focusing on both vintage and modern cards. Additionally, sports like 
                Soccer, Wrestling, and Golf contribute to the diversity of the hobby, each attracting dedicated collectors. Together, 
                these sports create a vibrant and multifaceted collecting experience.
            </Typography>
        </Paper>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {sports.map((sport) => (
                <Grid size={3}>
                    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                        <CardContent>
                            <Typography variant="h6">
                                {sport.name}
                            </Typography>
                            <Typography variant="body2">
                                {sport.description}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ marginTop: "auto" }}>
                            <Button href={`/hobby-charts/sports/${sport.sportId}`} disabled={sport.disabled}>View Details</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </>
}