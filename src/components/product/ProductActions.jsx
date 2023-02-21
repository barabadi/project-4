import * as React from "react";

import classNames from "classnames";
import styles from "./ProductActions.module.scss";

import { Button, Grid, Box } from "@mui/material";

export default function ProductActions({
  isLive = false,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <Box component="div" className={classNames(styles["product-actions"])} >
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button
            fullWidth={true}
            disabled={isLive ? false : true}
            onClick={onBuy}
            variant="contained"
            className={classNames(styles["button"])}
          >
           {`BUY FOR ${buyAmount} ${currency}`}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            fullWidth={true}
            disabled={isLive ? false : true}
            onClick={onBid}
            variant="outlined"
            color="success"
            className={classNames(styles["button"])}
          >
            {`PLACE BID FOR ${bidAmount} ${currency}`}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}