
import React from "react";
import classNames from "classnames";
import styles from "../how/How.module.scss";
import Grid from "@mui/material/Grid";

export default function Step ({ number, title, description }) {
    return (
        <Grid container className={classNames(styles.containerStep)}>
            <Grid item xs={4} className={classNames(styles.numbers)}>
                <div className={classNames(styles.numbersDiv)}> {number} </div>
            </Grid>
            <Grid item xs={8} className={classNames(styles.info)} >
                <div className={classNames(styles.infoDiv)}>
                    <div className={classNames(styles.title)}> {title} </div>
                    <div className={classNames(styles.description)}> {description} </div>
                </div>
            </Grid>
        </Grid>
    );
};