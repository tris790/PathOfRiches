import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

export default function TableView(props) {
    const { classes, items } = props;

    const tableBody = items.length ? (
        items.map(item => {
            const priceInEx = item.price / 100;

            return (
                <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                        <Avatar src={item.icon} />
                        {item.name || "Unknown"}
                    </TableCell>
                    <TableCell numeric>{item.count}</TableCell>
                    <TableCell numeric>{item.price}</TableCell>
                    <TableCell numeric>
                        {isNaN(priceInEx) ? "NA" : priceInEx}
                    </TableCell>
                    <TableCell>NA</TableCell>
                </TableRow>
            );
        })
    ) : (
        <TableRow />
    );

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Item Name</TableCell>
                        <TableCell numeric>Count</TableCell>
                        <TableCell numeric>Price (Chaos)</TableCell>
                        <TableCell numeric>Price (Exalted)</TableCell>
                        <TableCell>Up/Down</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{tableBody}</TableBody>
            </Table>
        </Paper>
    );
}
