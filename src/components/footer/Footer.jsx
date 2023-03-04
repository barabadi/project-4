import React from "react";
import classNames from "classnames";
import styles from "./Footer.module.scss";
import Grid from "@mui/material/Grid";
import Logo from '../logo/Logo'
import SearchIcon from '@mui/icons-material/Search'
import { ButtonBase, InputBase } from "@mui/material";
import Button from '@mui/material/Button'

export default function Footer() {

    return (
            <Grid container className={classNames(styles.container)}>
                <Grid item xs={2} className={classNames(styles.gird1)}>
                    <Logo type={'muted'}> </Logo>
                </Grid>
                <Grid item xs={3} className={classNames(styles.gird2)} >
                    <h3 className={classNames(styles.rights)}>
                    Bum All Rights Reserved 2021
                    </h3>
                </Grid>
                <Grid item xs={4} columnGap={6} className={classNames(styles.buttonContainer)}>
                        <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Privacy Policy</ButtonBase>
                        <ButtonBase variant="contained" color="primary" className={classNames(styles.buttonBase)}>Cookie Policy</ButtonBase>
                </Grid>
            </Grid>
    )
}
