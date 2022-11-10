import Head from "next/head";
import CardWrapper from "../Components/CardWrapper";
import Image from "next/image";
import { useEffect, useState } from "react";
import BrandAdvertisement from "../Components/BrandAdvertisement";
import Footer from "../Components/Footer";
import CarouselItem from "../Components/CarouselItem";
import Header from "../Components/Header";
import axios from "axios";
import APIUrls from "../utils/URL";
import Logo from "../public/assets/images/ShortLogo.png";

export default function Home() {
  const [cardList, setCardList] = useState({});
  const [bannerData, setBannerData] = useState();
  useEffect(() => {
    try {
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);
  const Img = ({ prop }) => {
    return (
      <>
        {prop.map((data, i) => {
          return (
            <>
              <img src={data.desktopURL} alt="" className="BannerImages" />
            </>
          );
        })}
      </>
    );
  };
  const fetchProducts = () => {
    const urlParams = encodeURIComponent(
      JSON.stringify(["outdoor", "new", "bestseller"])
    );
    const url = `?category=${JSON.stringify([
      "home",
    ])}&subCategory=${urlParams}`;
    axios.get(`${APIUrls.product}/${url}`).then((res) => {
      console.log("product list", res.data);
      setCardList(res.data.data);
      setBannerData(res.data.data.banners);
    });
  };
  console.info("bannerData", bannerData);
  return (
    <>
      <Head>
        <title>Vedayuu</title>
        <link rel="icon" type="image/x-icon" href={Logo} />
      </Head>
      <Header />
      {bannerData && <Img prop={bannerData} />}
      {/* {bannerData && <CarouselItem data={bannerData} />} */}
      <CardWrapper
        title="Bestsellers"
        category={"bestseller"}
        cardList={cardList && cardList["bestseller"]}
      />
      <CardWrapper
        title="New"
        category={"new"}
        cardList={cardList && cardList["new"]}
      />
      <CardWrapper
        title="Outdoor Collection"
        category={"outdoor"}
        cardList={cardList && cardList["outdoor"]}
      />
      <BrandAdvertisement />
      <Footer />
    </>
  );
}
