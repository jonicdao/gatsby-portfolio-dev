import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jose Nicdao | Full Stack Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! my name is',
  name: 'Jose Nicdao.',
  subtitle: "I'm a full stack software engineer.",
  cta: 'about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Having been involved in the education industry for more than a decade, I am confident at teaching difficult subjects not only others but also to myself--I take great pride in declaring that I love learning for its own sake. So during these challenging times in mid 2020, I've taught myself web development where I can create apps to help boost sales for companies. Pursuing this long-standing passion in tech has finally become a reality and I'm so excited to launch a brand-new career. Learning new technologies and finding solutions to real-world problems that motivate me to keep on improving on what I know.",
  paragraphTwo:
    'From the earliest days of static websites just using vanilla HTML and CSS, I have upskilled to using up-to-date technologies. I work on developing full stack web applications using Python, Django, Javascript, HTML, CSS, Bootstrap, React, and Node. I am excited to be a part of a thriving industry that constantly is improving. I know that there are so many other technologies out there and I am eager to learn more. I am open as well to other possible roles in software development.',
  paragraphThree: 'Do check out my full resume and some of my projects below.',
  resume: 'https://drive.google.com/open?id=1YBeHweAItjR8-5jEX4WKowOnpT5tK3MD', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'thomas-tucker-MNtag_eXMKw-unsplash.jpg',
    title: 'Everyone loves Pizza!',
    info:
      'I love pizza! And what better way to express this than creating a site which sells something everyone loves? The site features a fully-developed e-commerce app which includes registration and login for users, product lists with categories, shopping cart, shopping cart updates, and payment using stripe',
    info2:
      "Crafted using Django's powerful MVC on the backend and an elegant Bootstrap on the frontend. Photo by Thomas Tucker on Unsplash",
    url: 'https://young-springs-80964.herokuapp.com/shop/',
    repo: 'https://github.com/jonicdao/ecommerce.git', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ochir-erdene-oyunmedeg-VsYqEcDAR8A-unsplash.jpg',
    title: 'A penny for your thoughts?',
    info:
      "Who said only Twitter can make Twitter?  A fully-functional twitter clone where users can register/login, express their thoughts, like other people's thoughts, and share with others.",
    info2:
      'Built with Python from the ground up and using Flask, the site demonstrates basic CRUD operations and MVC model. Photo by Ochir-Erdene Oyunmedeg on Unsplash',
    url: 'http://penny.josenicdao.com',
    repo: 'https://github.com/jonicdao/thoughts.git', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'roger-erdvig-g6y5mm9Zby0-unsplash.jpg',
    title: 'Professional photographer in the room',
    info:
      "A portfolio website that showcases a real photographer's works and services. The website displays galleries, contact form, and blog. I've worked as a professional photographer and I know the value of a landing page to attract and book leads.",
    info2: 'Showcasing great images using Django and Bootstrap. Photo by Roger Erdvig on Unsplash',
    url: 'http://photos.josenicdao.com',
    repo: 'https://github.com/jonicdao/photo-portfolio.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jonicdao@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'http://www.twitter.com/josenicdao',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/josenicdao/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/jonicdao',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
