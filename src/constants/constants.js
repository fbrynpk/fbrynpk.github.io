export const projects = [
  {
    title: "Health Intent Classification with Speech Recognition",
    description:
      "An experiment intended to create a model that could recognize what symptoms we had, using a speech recognition model to convert speech to text",
    image: "/images/0.png",
    play: "",
    tags: ["Python", "PyTorch", "NLTK"],
    source:
      "https://www.kaggle.com/datasets/paultimothymooney/medical-speech-transcription-and-intent",
    visit: "https://github.com/fbrynpk/HealthIntentClassification",
    id: 0
  },
  {
    title: "Emotion Recognition",
    description:
      "First project that is related to data science and machine learning, creating a CNN and training it to be able to accurately detect emotions including Happy, Sad, Angry, Scared, and Shocked",
    image: "/images/1.jpg",
    play: "",
    tags: ["Python", "Tensorflow"],
    source: "https://google.com",
    visit: "https://github.com/fbrynpk/RealTimeEmotionRecognition",
    id: 5
  },
  {
    title: "FoodVision",
    description:
      "Using transfer learning method creating a custom Vision-Transformer model that could detect a specific food classes, this model is trained using 20% dataset from PyTorch Food101 dataset, and the model is hosted on HuggingFace Spaces",
    image: "/images/2.png",
    play: "",
    tags: ["Python", "PyTorch", "HuggingFace"],
    source: "",
    visit: "https://huggingface.co/spaces/fbrynpk/FoodVision",
    id: 1
  },
  {
    title: "Vision-Transformer",
    description:
      "An attempt to manually create a Vision-Transformer model from scratch, this model is based on the paper An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale, in this attempt I recreated the ViT-B/16 model.",
    image: "/images/6.png",
    play: "",
    tags: ["Python", "PyTorch"],
    source: "https://arxiv.org/pdf/2010.11929.pdf",
    visit: "https://github.com/fbrynpk/Vision-Transformer",
    id: 2
  },
  {
    title: "COVID-19 Detection",
    description:
      "The purpose of this project is to compare models between TinyVGG and EfficientNetB0 on which model is better to detect COVID-19 from X-Ray images",
    image: "/images/7.png",
    play: "",
    tags: ["Python", "PyTorch", "Transfer Learning"],
    source: "https://poloclub.github.io/cnn-explainer/",
    visit: "https://github.com/fbrynpk/Covid19-Prediction",
    id: 3
  },
  {
    title: '"Crinema" Online Movie Rating System',
    description:
      "An experiment to create a functional rating system based on movies, the reason for this project is for movie lovers who at times have troubles to watch good movies, and this system will create a trust-worthy rating system that every movie lovers can rate and view regarding what movies they might find themselves suitable with",
    image: "/images/3.png",
    play: "",
    tags: ["HTML", "CSS", "JavaScript", "Git", "Firebase"],
    source: "https://google.com",
    visit: "https://github.com/fbrynpk/web-programming-final",
    id: 7
  },
  {
    title: "Minesweeper",
    description:
      "An old school windows game when the internet was not a thing, this game keeps lots of people company when they are bored!",
    image: "/images/4.jpg",
    play: "https://minesweeper-ts.vercel.app/",
    tags: ["React", "SCSS", "TypeScript"],
    source:
      "https://www.youtube.com/watch?v=hg41egLtM9o&t=5s&ab_channel=JustinKim",
    visit: "https://github.com/fbrynpk/minesweeper-ts",
    id: 6
  },
  {
    title: "Image Caption Generator (Bachelor's Thesis)",
    description:
      "Creating an image to caption generator with Transfer Learning and Deep Learning from an Inception V3 model combined into a transformer encoder and decoder model",
    image: "/images/5.jpg",
    play: "https://huggingface.co/spaces/fbrynpk/image-caption-generator",
    tags: ["Python", "Deep Learning", "Transfer Learning", "Tensorflow"],
    source:
      "https://www.analyticsvidhya.com/blog/2021/12/step-by-step-guide-to-build-image-caption-generator-using-deep-learning/",
    visit:
      "https://huggingface.co/spaces/fbrynpk/image-caption-generator/tree/main",
    id: 4
  }
];

export const TimeLineData = [
  {
    year: 2018,
    text: "Started learning python, data structures and algorithm"
  },
  {
    year: 2019,
    text: "Got introduced into machine learning and it's applications"
  },
  {
    year: 2020,
    text: "Created first ever CNN model for facial emotion recognition"
  },
  {
    year: 2021,
    text: "Dived deeper to understand more about neural networks, deep learning and theories behind state-of-the-art models"
  },
  {
    year: 2022,
    text: "Experimented with Transformer models to generate captions based on a given image (Bachelor's thesis)"
  },
  {
    year: 2023,
    text: "Conducted some experiments with speech recognition and NLP to help with early detection for medical disorders"
  }
];

export const data = [
  { image: "/images/award2.png", text: "Dean's list awards First term" },
  { image: "/images/award.jpg", text: "Dean's list awards Second term" },
  { image: "/images/award4.png", text: "Dean's list awards Third term" },
  { image: "/images/award3.png", text: "Dean's list awards Fourth term" }
];
