import sliderImg1 from "../../public/assets/images/hero/1.jpg";
import sliderImg2 from "../../public/assets/images/hero/2.jpg";
import sliderImg3 from "../../public/assets/images/hero/3.jpg";

export const ImageList = [
    {
        id: 1,
        img: sliderImg1,
        title: "Journey to",
        textspan:"Learn Carousel",
        description:
            "His Life will forever be changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        img: sliderImg2,
        title: "Journey to",
        textspan:"Learn Carousel",
        description:
            "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttons: [
            { text: "Contact Us", link: "/contact" },
        ],
    },
    {
        id: 3,
        img: sliderImg3,
        title: "Journey to",
        textspan:"Learn Carousel",
        description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        buttons: [
            { text: "Join Now", link: "/join" },
        ],
    },
];