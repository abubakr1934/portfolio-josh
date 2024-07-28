import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
const app = express();
const port = 8000;

app.use(cors()); // Enable CORS for all routes
export const Review = [
  {
    stars: "⭐⭐⭐⭐⭐",
    title: "Amazing Work!",
    content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    image: '/public/review-assets/image1.jpeg',
    name: "Tiana Phiips",
    designation: "Photographer"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    title: "Greate Quality",
    content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    image: '/public/review-assets/image2.jpeg',
    name: "Talon Westervelt",
    designation: "Business Man"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    title: "Amazing Work",
    content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    image: '/public/review-assets/image3.jpeg',
    name: "James Gouse",
    designation: "Graphic Designer"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    title: "Amazing Work",
    content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    image: '/public/review-assets/image4.jpeg',
    name: "Tiana Phiips",
    designation: "Photographer"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    title: "Greate Quality",
    content: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet....",
    image: '/public/review-assets/image5.jpeg',
    name: "Talon Westervelt",
    designation: "Business Man"
  },
]
const projects = [
  {
    id: 1,
    photo: '/public/projects-assets/img1.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS', 'TypeScript', 'MongoDB']
  },
  {
    id: 2,
    photo: '/public/projects-assets/img2.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS']
  },
  {
    id: 3,
    photo: '/public/projects-assets/img3.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS', 'TypeScript', 'MongoDB']
  },
  {
    id: 4,
    photo: '/public/projects-assets/img4.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS', 'TypeScript', 'MongoDB']
  },
  {
    id: 5,
    photo: '/public/projects-assets/img1.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS', 'TypeScript', 'MongoDB']
  },
  {
    id: 6,
    photo: '/public/projects-assets/img6.jpeg',
    title: 'How To Make Flyer Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel venenatis arcu.',
    techStack: ['HTML', 'React', 'Node.js', 'CSS', 'TypeScript', 'MongoDB']
  }
];
app.use(bodyParser.json());
let submissions = [];
const skillsData = [
  {
    domain: "Front End Development",
    skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "PHP", percentage: 75 },
      { name: "WordPress", percentage: 85 },
    ],
  },
  {
    domain: "Languages",
    skills: [
      { name: "Hindi", percentage: 90 },
      { name: "English", percentage: 85 },
    ],
  },
  {
    domain: "Back End Development",
    skills: [
      { name: "NodeJS", percentage: 90 },
      { name: "SSR", percentage: 85 },
    ],
  },
  {
    domain: "Front End Development",
    skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "PHP", percentage: 75 },
      { name: "WordPress", percentage: 85 },
    ],
  },
  {
    domain: "Languages",
    skills: [
      { name: "Hindi", percentage: 90 },
      { name: "English", percentage: 85 },
    ],
  },
  {
    domain: "Back End Development",
    skills: [
      { name: "NodeJS", percentage: 90 },
      { name: "SSR", percentage: 85 },
    ],
  },
];

app.get('/skills', (req, res) => {
  res.json(skillsData);
});
app.post('/submit', (req, res) => {
  const data = req.body;
  submissions.push(data);

  res.status(200).json({ message: 'Data received and stored temporarily', submissions });
});
app.get('/api/projects', (req, res) => {
  res.json(projects);
});
app.get('/api/reviews', (req, res) => {
  res.json(Review)
})

app.post('/skills', (req, res) => {
  const newSkillData = req.body;
  skillsData.push(newSkillData);
  res.status(201).json(newSkillData);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
