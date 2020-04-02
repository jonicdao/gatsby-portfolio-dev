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
  subtitle: "I'm a full stack web developer",
  cta: 'about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Having started in the education industry, I am great at teaching not only others but also myself so I taught myself how to code. Learning new technologies and finding solutions to real-world problems motivate me to keep on improving what I know.',
  paragraphTwo:
    'I work on developing full stack web applications using Python, Django, Javascript, HTML, CSS, Bootstrap, and React',
  paragraphThree: 'Do check out some of my projects below.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Everyone loves Pizza!',
    info:
      'I love pizza! And what better way to express this than creating a site which sells something everyone loves.',
    info2: 'Crafted using Django and Bootstrap',
    url: 'http://pizza.josenicdao.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'A penny for your thoughts?',
    info:
      "Who said only Twitter can make Twitter? In this website, people can express their thoughts, like other people's thoughts, and share.",
    info2:
      'Built with Python from the ground up and using Flask, the site demonstrates basic CRUD operations.',
    url: 'http://penny.josenicdao.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Professional photographer in the room',
    info: "A portfolio website that showcases a real photographer's works and services",
    info2: 'Showcasing great images using Django and Bootstrap',
    url: 'http://photos.josenicdao.com',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
