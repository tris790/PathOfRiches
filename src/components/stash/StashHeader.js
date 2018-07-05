import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// const tabs = [
//     { id: 0, name: "tab 1" },
//     { id: 1, name: "Currency" },
//     { id: 2, name: "Maps" }
// ];

export default props => (
    <Tabs
        value={props.currentTab}
        onChange={props.onChange}
        indicatorColor="primary"
        textColor="primary"
        scrollable
        scrollButtons="auto"
    >
        {props.tabs && props.tabs.map(tab => <Tab key={tab.i} label={tab.n} />)}
    </Tabs>
);
