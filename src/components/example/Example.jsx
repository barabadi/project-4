import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Header from '../header/Header'
import HeaderNew from '../header/HeaderNew'
import Avatar from "../avatar/Avatar";


export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Avatar url='/images/avatar.png' size={240} verified></Avatar>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
            Hi
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
