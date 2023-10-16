import bcrypt from "bcryptjs";
const users = [
  {
    Fullname: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic1.png",
    followers: [],
  },
  {
    Fullname: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic2.png",
    followers: [],
  },
  {
    Fullname: "Alice Johnson",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic3.png",
    followers: [],
  },
  {
    Fullname: "Robert Wilson",
    email: "robert@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic4.png",
    followers: [],
  },
  {
    Fullname: "Emily Brown",
    email: "emily@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic5.png",
    followers: [],
  },
  {
    Fullname: "Michael Lee",
    email: "michael@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic6.png",
    followers: [],
  },
  {
    Fullname: "Sophia Davis",
    email: "sophia@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic7.png",
    followers: [],
  },
  {
    Fullname: "Daniel Wilson",
    email: "daniel@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic8.png",
    followers: [],
  },
  {
    Fullname: "Olivia Clark",
    email: "olivia@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic9.png",
    followers: [],
  },
  {
    Fullname: "William Johnson",
    email: "william@example.com",
    password: bcrypt.hashSync("123456", 10),
    ProfilePic: "/images/profile-pic10.png",
    followers: [],
  },
];

export default users;
