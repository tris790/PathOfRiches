import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default props => (
    <Card
        style={{
            maxWidth: 300
        }}
    >
        <CardMedia
            style={{
                height: 38,
                width: 38
            }}
            image={props.icon}
            title="Contemplative Reptile"
        />
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                {props.name || "Unknown"}
            </Typography>
            <Typography component="p">Price: 100c | 1.1ex</Typography>
        </CardContent>
        <CardActions>
            <Button
                size="small"
                color="primary"
                href={
                    "http://pathofexile.gamepedia.com/" +
                    props.name.split(" ").join("_")
                }
                target="_blank"
            >
                Wiki
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </CardActions>
    </Card>
);
