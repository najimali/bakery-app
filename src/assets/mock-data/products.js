// all images imported from images directory
import { CAKE, COOKIE, PASTRY } from "../constants"

// Cakes
import cake_1 from "../images/cake1.png"
import cake_2 from "../images/cake2.png"
import cake_3 from "../images/cake3.png"
import cake_4 from "../images/cake4.png"
import cake_5 from "../images/cake5.png"

// Cookies
import cookie_1 from "../images/cookie1.png"
import cookie_2 from "../images/cookie2.png"
import cookie_3 from "../images/cookie3.png"
import cookie_4 from "../images/cookie4.png"

//Pastry
import pastry_1 from "../images/pastry1.png"
import pastry_2 from "../images/pastry2.png"
import pastry_3 from "../images/pastry3.png"

const products = [
  {
    id: "01",
    title: "Angel Food Cake",
    price: 30,
    image: cake_1,
    category: CAKE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },
  {
    id: "03",
    title: "Chiffon Cake",
    price: 35,
    image: cake_3,
    category: CAKE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "04",
    title: "Pound Cake",
    price: 40,
    image: cake_4,
    category: CAKE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "05",
    title: "Profiteroles",
    price: 10,
    image: pastry_1,
    category: PASTRY,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Baklava",
    price: 15,
    image: pastry_2,
    category: PASTRY,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Chocolate Chip Cookies",
    price: 25,
    image: cookie_1,
    category: COOKIE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
  {
    id: "08",
    title: "Macaron Cookies",
    price: 28,
    image: cookie_2,
    category: COOKIE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Biscotti Cookies",
    price: 20,
    image: cookie_3,
    category: COOKIE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  
  {
    id: "10",
    title: "Oatmeal Raisin Cookies",
    price: 22,
    image: cookie_4,
    category: COOKIE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "11",
    title: "Pumpkin Spice Cake",
    price: 100,
    image: cake_5,
    category: CAKE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "02",
    title: "Genoise Cake",
    price: 60,
    image: cake_2,
    category: CAKE,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "12",
    title: "Apricot Danish",
    price: 20,
    image: pastry_3,
    category: PASTRY,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
];

export default products;
