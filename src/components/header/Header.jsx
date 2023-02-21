import React from "react";
import classNames from "classnames";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from '../logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import { ButtonBase, InputBase } from "@mui/material";
import { Grade } from "@mui/icons-material";
import Button from '@mui/material/Button'


export default function Header() {

    return (
        <Container className={classNames(styles.container)} maxWidth="x1">
            <Grid container spacing={1}  columnSpacing={10} className={classNames(styles.grid)}>
                <Grid item xs={2}>
                    <Logo> </Logo>
                </Grid>
                <Grid item xs={4}  >
                    <div className={classNames(styles.searchField)}>
                        <div>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Find assets, users and activity..."
                            className={classNames(styles.searchInput)}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={1}  columnSpacing={6} className={classNames(styles.buttonContainer)}>
                        <Grid item xs={4}><ButtonBase className={classNames(styles.link)}>Home</ButtonBase></Grid>
                        <Grid item xs={4}> <ButtonBase className={classNames(styles.link)}>Activity</ButtonBase></Grid>
                         <Grid item xs={4}> <Button className={classNames(styles.btn)}>EXPLORE</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}