import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderItems = [
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
      title: "Latest Milling Machinery",
      description: "Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage.",
    },
    {
      imgSrc: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
      title: "Reasonable Rates",
      description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
      title: "Time Efficiency",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      link: "#"
    },
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
      title: "Expertise in Industry",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    },
    {
      imgSrc: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
      title: "Latest Milling Machinery",
      description: "Temporibus autem quibusdam et aut officiis debitis is aut necessitatibus saepe eveniet ut et seo lage.",
    },
  ];

  return (
    <section className="text-gray-700 body-font m-3" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col items-center text-gray-800 text-center pt-16">
        <img src="../../images/Border.png" alt="decorative border" className="my-4" />
        <h1 className="my-4 text-3xl font-bold text-black">OUR SERVICES</h1>
        <p className="leading-relaxed text-black mb-3">Always dedicated and devoted</p>
        <img src="../../images/HorizontalBorder.png" alt="decorative horizontal border" />
      </div>

      <div className="container px-5 py-12 mx-auto">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="flex flex-col items-center px-4 py-6 transform transition duration-500 hover:scale-110">
                <img src={item.imgSrc} className="w-32 mb-3 filter sepia saturate-10 hue-rotate-40 brightness-120" alt={item.title} />
                <h2 className="title-font text-2xl text-gray-900 text-center">{item.title}</h2>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Service;
