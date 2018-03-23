export const tags = [
  { label: "Seafood", background: "#7bbed6", hoverBg: "#7bbed6" },
  { label: "Spicy", background: "#82689a", hoverBg: "#82689a" },
  { label: "Romantic", background: "#ed837f", hoverBg: "#ed837f" },
  { label: "Junk", background: "#feb677", hoverBg: "#feb677" },
  { label: "Fusion", background: "#75c1a5", hoverBg: "#75c1a5" },
  { label: "Drinks", background: "#7ba8d6", hoverBg: "#7ba8d6" },
  { label: "Italian", background: "#6dcccb", hoverBg: "#6dcccb" },
  { label: "Asian", background: "#7bbed6", hoverBg: "#7bbed6" }
];

export const foodList = [
  {
    img: "/img/food/italian.png",
    partOf: "152",
    title: "Mamma mia",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "5",
    reviews: "70",
    price: "230",
    currency: "EUR"
  },
  {
    img: "/img/food/bbq.png",
    partOf: "12",
    title: "BBQ dinner outside",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "3",
    reviews: "120",
    price: "30",
    currency: "EUR"
  },
  {
    img: "/img/food/mexican.png",
    partOf: "1",
    title: "Mexican stories",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "3",
    reviews: "1263",
    price: "26",
    currency: "EUR"
  },
  {
    img: "/img/food/italian.png",
    partOf: "152",
    title: "Mamma mia",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "5",
    reviews: "70",
    price: "230",
    currency: "EUR"
  },
  {
    img: "/img/food/bbq.png",
    partOf: "12",
    title: "BBQ dinner outside",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "3",
    reviews: "120",
    price: "30",
    currency: "EUR"
  },
  {
    img: "/img/food/mexican.png",
    partOf: "1",
    title: "Mexican stories",
    excerpt: "Winter pearl in the heart of Europe.",
    rating: "3",
    reviews: "1263",
    price: "26",
    currency: "EUR"
  }
];

export const restaurant = {
  title: "Mamma mia",
  description:
    "Originally a delishop for wines and hams that came through midtown, it was transformed into a wine bar and general store. After the 2008 flood the cellars were restored. Under an old ceiling, Italian style, is now possible to eat in this suggestivs, 18th-century location.",
  location: "New York, USA",
  tags: [
    { label: "Romantic", background: "#ed837f", hoverBg: "#eb8e8a" },
    { label: "Spicy", background: "#82689a", hoverBg: "#9379ab" }
  ],
  rating: "4",
  reviews: {
    count: "125",
    items: [
      {
        rating: "5",
        summary: "Great place!",
        comment:
          "I've been here at least 10 times in last few years and everytime I leave here happy and satisfied. Good location, cozy interior and ambience and huge selection of great wines. And don't forget to taste their great selection of cheeses, salamis etc.",
        user: {
          name: "Joanna Doe",
          location: "Helsinki, Finland",
          avatar: "#"
        }
      }
    ]
  },
  images: [
    { src: "/img/food/mamamia.jpg", label: "mamamia 1" },
    { src: "/img/food/mamamia2.jpg", label: "mamamia 2" }
  ],
  partOf: [
    {
      img: "/img/trips/new-york.png",
      title: "Explore New York",
      excerpt: "Winter pearl in the heart of Europe and other stuff here.",
      rating: "5",
      reviews: "70",
      price: "230"
    },
    {
      img: "/img/trips/bali.png",
      title: "Balinese secrets",
      excerpt: "Winter pearl in the heart.",
      rating: "4",
      reviews: "23",
      price: "1530"
    },
    {
      img: "/img/trips/africa.png",
      title: "African sunsets",
      excerpt: "Winter pearl in the heart of Europe.",
      rating: "3",
      reviews: "10",
      price: "430"
    },
    {
      img: "/img/trips/paris.png",
      title: "French baguettes",
      excerpt: "Winter pearl in the heart of.",
      rating: "5",
      reviews: "1555",
      price: "50"
    }
  ],
  openHours: [
    { working: true, open: "9:00", close: "17:00" },
    { working: true, open: "9:00", close: "17:00" },
    { working: true, open: "9:00", close: "17:00" },
    { working: true, open: "9:00", close: "17:00" },
    { working: true, open: "9:00", close: "17:00" },
    { working: false },
    { working: false }
  ],
  phone: "(718) 473-9555",
  website: "sugarcanerawbargrill.com"
};