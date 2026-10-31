import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Watch",
    category: "Lifestyle",
    price: 1200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw4TQ2d3hyWr9rW6qYfejVIjoWDIuDNprmL06ObgFLQ&s=10",
  },
  {
    id: 2,
    name: "Bag",
    category: "Fashion",
    price: 1500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIc3TBgTuXDNyqGQJFmHG9e3Ol93vASOufFNUhOB4u8g&s=10",
  },
  {
    id: 3,
    name: "Laptop",
    category: "Electronics",
    price: 45000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqiv3buE786rzCJQd1jIeBs0f5SKc_Yvkd2PfopMRcvQ&s=10",
  },
  {
    id: 4,
    name: "Shoes",
    category: "Fashion",
    price: 2000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw70vsPfBdg3T-nUCRcOXeNZ8Lb0gDUx66tFurOmOCkQ&s",
  },
  {
    id: 5,
    name: "Headphones",
    category: "Electronics",
    price: 1800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuUdCijgjKUrEFz-D1ofr7DCJRYHmuCfoeIeccmAXrA&s=10",
  },
  {
    id: 6,
    name: "Bottle",
    category: "Lifestyle",
    price: 500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC23O_1fLAWZaMOb8K_SgjlCVhcMWVGSrknHVIUUcXtw&s=10",
  },
  {
    id: 7,
    name: "T-Shirt",
    category: "Fashion",
    price: 800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7E4u8G7vJaKJT-tg-Noy5CcuVfX_pw8-qlEwOkKMog&s=10",
  },
  {
    id: 8,
    name: "Mouse",
    category: "Electronics",
    price: 700,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_Bk70nO5qIiixUrIDkoYEa375OITFJvAbf6BnAfPdg&s=10",
  },
  {
    id: 9,
    name: "Sunglasses",
    category: "Fashion",
    price: 900,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVEaQwm2-fIIZSJ1O06UOElQPB6AW3UbBa4dddSIe9A&s=10",
  },
  {
    id: 10,
    name: "Smart Watch",
    category: "Electronics",
    price: 2500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7D9jN6EXvq5zQC_9MeO2ye-VMX_GGzC_q-1Q-FagKnA&s=10",
  },
  {
    id: 11,
    name: "Coffee Mug",
    category: "Lifestyle",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw35VruvgC9Onwmjb4nvrs_GtLFFWajuZB3NSU2miUvg&s=10",
  },
  {
    id: 12,
    name: "Lamp",
    category: "Lifestyle",
    price: 1000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNmPW2BcGW78uBf0VvcPB3iutXXAu20sr-LPXuDiXtA&s=10",
  },
];

export default products;
