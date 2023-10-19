interface comment {
  text: string;
  user: string;
  createdAt: Date;
}

interface Post {
  _id: string;
  title: string;
  author: string;
  description: string;
  categories: string;
  image: string;
  createdAt: string;
  comments: comment[];
}

interface User {
  Fullname: string;
  email: string;
  password: string;
  ProfilePic: string;
  followers: Array;
  createdAt: Date;
  updatedAt: Date;
}

interface commentType {
  comment: {
    text: string;
    user: string;
  };
}
