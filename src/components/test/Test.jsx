import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Test.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo"
import Header from "../header/Header"
import Avatar from "../avatar/Avatar"
import User from "../user/User"
import NftCard from "../card/Card"
import Trending from "../trending/Trending"
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";
import Step from "../how/Step"
import How from "../how/How"

const nftCards=[ {
   "name":"Ivy",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":1,
   "currency":"ETH",
   "timeLeft":100000
},
{
   "name":"Judie",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":2.3,
   "currency":"ETH",
   "timeLeft":100000
},
{
   "name":"Juniper",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":5,
   "currency":"ETH",
   "timeLeft":100000
},
{
   "name":"Maple",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":10,
   "currency":"ETH",
   "timeLeft":100000
}];

const card= {
   "name":"Ivy",
   "user":{
      "avatar":{
         "url":"images/avatar.png"
      },
      "verified":true
   },
   "mediaUrl":"images/nft.jpg",
   "price":1,
   "currency":"ETH",
   "timeLeft":100000
}

const decs= {
   "number":1,
   "title":"Digital Currency",
   "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange"
  }

  const howInfo= {
   "description":"Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
   "title":"HOW IT WORKS",
   "items":[
      {
         "title":"Digital Currency",
         "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchangeg"
      },
      {
         "title":"Digital Currency",
         "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchangeg"
      },
      {
         "title":"Digital Currency",
         "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchangeg"
      },
      {
         "title":"Digital Currency",
         "description":"You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchangeg"
      }
   ],
   "link":"www.google.com"
  }
  

export default function Test() {
  return (
    <div className={classNames(styles.wrapper)}>
      <How {...howInfo}/>
    </div>
  );
}

//
//      <NftCard {...nft}/>
// <Trending cards={nftCards}/>
//
//     <User name="terika77" info="125 items" avatar='images/avatar.png' verified='true'/>
// <Auctions cards={nftCards}/>
//       <Header/>
// <Footer/>
