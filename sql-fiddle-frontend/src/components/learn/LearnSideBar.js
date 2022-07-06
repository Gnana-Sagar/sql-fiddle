import React, { useState } from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse, withStyles } from "@mui/material";

const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        background: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4
    }
});
function getItems() {
    var json = {
        list: [
            {
                id: 1,
                title: "Select",
                items: [
                    {
                        id: 1,
                        name: "Ex1"
                    },
                    {
                        id: 2,
                        name: "Ex2"
                    }
                ]
            },
            {
                id: 2,
                title: "Create",
                items: [
                    {
                        id: 1,
                        name: "Ex1"
                    },
                    {
                        id: 2,
                        name: "Ex2"
                    }
                ]
            }
        ]
    };
    return json;
}
class LearnSideBar extends React.Component {
    state = {};
    handleClick = e => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const items = getItems();
        return (
            <List dense sx={{height: '94vh'}}>
                {items.list.map(item => {
                    return (
                        <div key={item.id}>
                            <ListItem
                                button
                                key={item.id}
                                onClick={this.handleClick.bind(
                                    this,
                                    item.title
                                )}
                            >
                                <ListItemText
                                    primary={item.title}
                                />
                                {this.state[item.title] ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse
                                key={items.id}
                                component="li"
                                in={this.state[item.title]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List disablePadding dense sx={{ ml: '20px' }}>
                                    {item.items.map(
                                        sitem => {
                                            return (
                                                <ListItem
                                                    button
                                                    key={
                                                        sitem.id
                                                    }
                                                >
                                                    <ListItemText
                                                        key={
                                                            sitem.id
                                                        }
                                                        primary={
                                                            sitem.name
                                                        }
                                                    />
                                                </ListItem>
                                            );
                                        }
                                    )}
                                </List>
                            </Collapse>
                        </div>
                    );
                })}
            </List >
        );
    }
}

export default LearnSideBar;