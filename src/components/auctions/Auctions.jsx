import React from 'react';
import styles from './Auctions.module.scss';
import classNames from "classnames";
import { Container, Grid, Select, MenuItem } from '@mui/material';
import NftCard from '../card/Card';

export default function Auctions({cards=[]}) {

  return (
    <div className={classNames(styles.container)} maxWidth="xl">
      <div className={classNames(styles.containerMenu)}>
      <div className={classNames(styles.headingMenu)}>
      <img src="images/fire2.png" alt="Fire Emoji" className={classNames(styles.fireIcon)}/>
      <h2 className={classNames(styles.heading)}>Live Auctions</h2>
      </div>
      <Select value={'This week'} defaultValue="This week" className={classNames(styles.selectMenu)}>
          <MenuItem value="This week">This week</MenuItem>
      </Select>
      </div>
      <Container maxWidth="xl" className={classNames(styles.containerGrid)}>
      <Grid container className={classNames(styles.gridCont)} >
          {cards.map((card, index) => (
          <Grid item  xs={3} sm={6} md={3} key={index} columnGap={0}>
            <NftCard {...card} />
          </Grid>
          ))}
      </Grid>
      </Container>
    </div>
  );
}
