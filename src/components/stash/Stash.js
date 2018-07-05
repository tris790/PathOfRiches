import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import StashHeader from "./StashHeader";
import TableView from "../TableView";
import GridView from "../GridView";

import sample from "../../assets/samples/profile.json";
import { getStashFromIndex, getRates } from "../../poeapi";

export default class Stash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            externalData: null,
            currentTabIndex: 0,
            username: "tris790",
            league: "Incursion",
            loading: false,
            rates: {}
        };
        this.updateCurrentTab = this.updateCurrentTab.bind(this);
    }

    updateCurrentTab(index) {
        this.setState({ loading: true });
        const { username, league } = this.state;
        getStashFromIndex(username, index, league, 1).then(externalData => {
            this.setState({ externalData, loading: false });
        });
    }

    setSessionID(id) {
        if (
            !document.cookie.split(";").filter(item => {
                return item.includes(`POESESSID=${id};`);
            }).length
        ) {
            console.log("cookie was not present");
            document.cookie = `POESESSID=${id};`;
        }
    }

    handleChange = (event, currentTabIndex) => {
        this.setState({ currentTabIndex });
        this.updateCurrentTab(currentTabIndex);
    };

    componentDidMount() {
        this.setSessionID("SESSION");
        this.updateCurrentTab();
        getRates().then(rates => {
            this.setState({ rates });
            console.log("r", rates);
        });
    }

    render() {
        let progressBar = <CircularProgress />;
        let items = [];
        let tabs = [];

        let { currentTabIndex, externalData, loading } = this.state;
        if (externalData !== null && externalData.items !== null) {
            console.log("external", externalData);
            items = externalData.items
                .map((item, index) => {
                    const itemName =
                        item.name.replace("<<set:MS>><<set:M>><<set:S>>", "") ||
                        item.typeLine;

                    const itemIcon = item.icon.replace(/&stackSize=\d*/, "");
                    const stackSize = item.stackSize || 1;
                    const itemRate = this.state.rates.filter(
                        x => x.name === itemName
                    );
                    console.log("ir", itemRate);
                    const unitPrice =
                        (itemRate.length && itemRate[0].price) || 0;
                    const total = Math.floor(stackSize * unitPrice);

                    return {
                        name: itemName,
                        id: index,
                        count: stackSize,
                        price: unitPrice,
                        total,
                        icon: itemIcon
                    };
                })
                .sort((x, y) => {
                    return y.total - x.total;
                });
        }

        if (externalData !== null && externalData.tabs !== null) {
            tabs = externalData.tabs;
            console.log("TABS", tabs);
        }

        let centerView = loading ? (
            progressBar
        ) : (
            <GridView items={items} />
            // <TableView items={items} />
        );
        console.log("rates", this.state.rates);
        return (
            <div>
                <Button
                    variant="raised"
                    color="secondary"
                    onClick={this.updateCurrentTab}
                >
                    Refresh
                </Button>
                <hr />
                <StashHeader
                    currentTab={currentTabIndex}
                    onChange={this.handleChange.bind(this)}
                    tabs={tabs}
                />
                {centerView}
            </div>
        );
    }
}
