// Object containing predefined data
const randomData = {
  usernames: [
    "John Doe",
    "Jane Smith",
    "Sam Wilson",
    "Emma Brown",
    "Liam White",
    "Emily Davis",
    "Chris Green",
    "Sophia Lee",
    "Olivia Brown",
    "David Wilson",
  ],
  userImages: [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
    "https://randomuser.me/api/portraits/women/6.jpg",
    "https://randomuser.me/api/portraits/men/7.jpg",
    "https://randomuser.me/api/portraits/women/8.jpg",
    "https://randomuser.me/api/portraits/men/9.jpg",
    "https://randomuser.me/api/portraits/women/10.jpg",
  ],
  comments: [
    "This is an amazing video! Thanks for sharing.",
    "I agree! It was really helpful.",
    "Absolutely! This was very informative.",
    "Couldn't agree more! Great insights.",
    "Yes, this is exactly what I needed!",
    "Totally! Learned a lot from this.",
    "Same here! Great explanation.",
    "The Redux part was especially helpful.",
    "Thanks for explaining! This makes sense now.",
    "Great content as always!",
  ],
};

export const getRandomUserName = () => {
  return randomData.usernames[
    Math.floor(Math.random() * randomData.usernames.length)
  ];
};

export const randomImage = () => {
  return randomData.userImages[
    Math.floor(Math.random() * randomData.userImages.length)
  ];
};
export const randomComment = () => {
  return randomData.comments[
    Math.floor(Math.random() * randomData.comments.length)
  ];
};
