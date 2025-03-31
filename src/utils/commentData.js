export const commentData = [
  {
    id: 1,
    username: "John Doe",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    comment: "This is an amazing video! Thanks for sharing.",
    replies: [
      {
        id: 101,
        username: "Jane Smith",
        userImage: "https://randomuser.me/api/portraits/women/2.jpg",
        comment: "I agree! It was really helpful.",
        replies: [
          {
            id: 1011,
            username: "Sam Wilson",
            userImage: "https://randomuser.me/api/portraits/men/7.jpg",
            comment: "Absolutely! This was very informative.",
            replies: [
              {
                id: 10111,
                username: "Emma Brown",
                userImage: "https://randomuser.me/api/portraits/women/8.jpg",
                comment: "Couldn't agree more! Great insights.",
                replies: [
                  {
                    id: 101111,
                    username: "Liam White",
                    userImage: "https://randomuser.me/api/portraits/men/9.jpg",
                    comment: "Yes, this is exactly what I needed!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 102,
        username: "Mike Johnson",
        userImage: "https://randomuser.me/api/portraits/men/3.jpg",
        comment: "Totally! Learned a lot from this.",
        replies: [
          {
            id: 1021,
            username: "Emily Davis",
            userImage: "https://randomuser.me/api/portraits/women/10.jpg",
            comment: "Same here! Great explanation.",
            replies: [
              {
                id: 10211,
                username: "Chris Green",
                userImage: "https://randomuser.me/api/portraits/men/11.jpg",
                comment: "The Redux part was especially helpful.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    username: "Alice Brown",
    userImage: "https://randomuser.me/api/portraits/women/4.jpg",
    comment: "Can someone explain the part about Redux?",
    replies: [
      {
        id: 201,
        username: "Chris Green",
        userImage: "https://randomuser.me/api/portraits/men/5.jpg",
        comment: "Sure! Redux is a state management library.",
        replies: [
          {
            id: 2011,
            username: "Sophia Lee",
            userImage: "https://randomuser.me/api/portraits/women/12.jpg",
            comment: "Redux helps manage global state efficiently.",
            replies: [
              {
                id: 20111,
                username: "Liam White",
                userImage: "https://randomuser.me/api/portraits/men/13.jpg",
                comment: "Exactly! It simplifies state management.",
                replies: [
                  {
                    id: 201111,
                    username: "Olivia Brown",
                    userImage:
                      "https://randomuser.me/api/portraits/women/14.jpg",
                    comment: "Thanks for explaining! This makes sense now.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    username: "David Wilson",
    userImage: "https://randomuser.me/api/portraits/men/6.jpg",
    comment: "Great content as always!",
    replies: [],
  },
];
