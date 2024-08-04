import React from "react";
import BrandCard from "./brand-card/BrandCard";
import ardenGrane from "@/assets/images/home/brand-card/arden-grane.png";
import burns from "@/assets/images/home/brand-card/burns.png";
import scrumbles from "@/assets/images/home/brand-card/scrumbles.jpg";
import dollyParton from "@/assets/images/home/brand-card/dolly-parton.jpg";
import lilysKitchen from "@/assets/images/home/brand-card/lilys-kitchen.png";
import petsAtHome from "@/assets/images/home/brand-card/pets-at-home.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { src: ardenGrane, alt: "Arden Grane logo" },
  { src: petsAtHome, alt: "Pets at Home logo" },
  { src: burns, alt: "Burns logo" },
  { src: scrumbles, alt: "Scrumbles logo" },
  { src: lilysKitchen, alt: "Lily's Kitchen logo" },
  { src: dollyParton, alt: "Dolly Parton logo" },
];

export default function TopBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings}>
      {brands.map((brand, index) => (
        <BrandCard key={index} src={brand.src} alt={brand.alt} />
      ))}
    </Slider>
  );
}
