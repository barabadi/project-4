import { Button, Grid, Typography } from '@mui/material';
import Step from '../how/Step';
import classNames from "classnames";
import styles from "../how/How.module.scss";

export default function How ({ description, title, items = [], link }) {
return (
<Grid container className={classNames(styles.containerHow)}>
    <div className={classNames(styles.back)}></div>
    <Grid item xs={5} className={classNames(styles.containerHowItWorks)}>
        <div className={classNames(styles.containerHowDiv)}>
            <div className={classNames(styles.titleHow)}>{title}</div>
            <div className={classNames(styles.descriptionHow)}>{description}</div>
            <Button className={classNames(styles.btn)} href={link}>LEARN MORE</Button>
        </div>
    </Grid>
    <Grid item xs={5} className={classNames(styles.containerStepHow)}>
        {items.map((item, index) => (
        <Step key={index} number={index + 1} title={item.title} description={item.description} />
        ))}
    </Grid>
</Grid>
);
};

