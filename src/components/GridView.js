import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

const chaosIconURL =
    "https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&scaleIndex=3&w=1&h=1&v=c60aa876dd6bab31174df91b1da1b4f9";

export default function FullWidthGrid(props) {
    const { classes, items } = props;
    // console.log(items);
    return (
        <Grid container spacing={24}>
            {items.map((item, index) => (
                <Grid key={index} item xs={4}>
                    <Paper>
                        <Grid container justify="space-around">
                            <div style={{ display: "inline" }}>
                                <Tooltip
                                    title={item.name || "Unkown"}
                                    placement="top"
                                >
                                    <img
                                        src={item.icon}
                                        style={{ maxWidth: 37, maxHeight: 37 }}
                                    />
                                </Tooltip>
                                x {item.count}
                            </div>
                            →
                            {item.price}
                            <div style={{ display: "inline" }}>
                                {item.total} x
                                <Tooltip title="Chaos" placement="top">
                                    <img
                                        src={chaosIconURL}
                                        style={{ maxWidth: 37, maxHeight: 37 }}
                                    />
                                </Tooltip>
                            </div>
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}
