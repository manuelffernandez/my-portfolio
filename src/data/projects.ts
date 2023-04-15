import blogImg from '../assets/img/Blogs-screenshot.jpg';
import giffyImg from '../assets/img/giphy-screenshot.jpg';
import jompaImg from '../assets/img/Jompa-screenshot.jpg';
import coffeeImg from '../assets/img/coffeeshop-screenshot.jpg';
import lhotseImg from '../assets/img/lhotse-screenshot.jpg';

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  repoLink: string;
  deployLink?: string;
}

export const projects: Project[] = [
  {
    title: 'Giffy app',
    description:
      'My most recent React work. It let users search gifs by name or ranking by consuming the GiphyAPI. Its layout using MUI v5 and it have concepts of conditional render, async queries, custom hooks and routing-navigation provided by React Router. Its still in development.',
    imgUrl: giffyImg,
    repoLink: 'https://github.com/manuelffernandez/giffy-app',
    deployLink: 'https://giffy-app-sable.vercel.app/',
  },
  {
    title: 'CoffeeShop',
    description:
      'Shopping cart simulator made with Vanilla JS. Its primary objective is to implement the fundamentals of the language. Also integrates the asynchronous logic of the global fetch() method. mockapi.io platform was employed as the database.',
    imgUrl: coffeeImg,
    repoLink: 'https://github.com/manuelffernandez/coffe-shopping-cart',
    deployLink: 'https://manuelffernandez.github.io/coffe-shopping-cart/',
  },
  {
    title: 'Jompa shop',
    description:
      'This front-end e-commerce project is built with React and utilizes context. It uses Firebase as a database to store its products. Users can browse through the selection of products, add items to their shopping cart, and make simulated purchases with an asynchronous HTTP request to the API.',
    imgUrl: jompaImg,
    repoLink: 'https://github.com/manuelffernandez/react-spa-ecomm',
  },
  {
    title: 'Custom Blog',
    description:
      'Blog SPA where you can add your own blogs. Integrates the concepts of async queries, global states provided by react context and the routing-navigation of React Router. Its made with React.',
    imgUrl: blogImg,
    repoLink: 'https://github.com/manuelffernandez/jsonsv-practice',
  },
  {
    title: 'Lhotse ski',
    description:
      'My first major project. It was built using HTML and Bootstrap as the frontend toolkit. To customize the default styles, I used the SCSS preprocessor, which achieves a consistent appearance with the fictitious brand.',
    imgUrl: lhotseImg,
    repoLink: 'https://github.com/manuelffernandez/static-website-coderhouse',
    deployLink: 'https://cerro-lhotse.netlify.app/index.html',
  },
];
