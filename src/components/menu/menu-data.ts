import { StaticImageData } from "next/image";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string | StaticImageData;
  category: string;
}

import phoCuon from "@/assets/bun-cha.png";
import mewink from "@/assets/mewink.png";
import nemRan from "@/assets/nem-ran.png";
import goiRan from "@/assets/goi-ran.png";
import repning from "@/assets/goi-ra-muu.png";
import goiRaMuu from "@/assets/goi-ra-muu.png";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "phoCuon",
    description: "pho Cuon Description",
    price: "$120",
    image: phoCuon,
    category: "Appetisers",
  },
  {
    id: 2,
    name: "mewink",
    description: "mewink Description",
    price: "$290",
    image: mewink,
    category: "Main Dishes",
  },
  {
    id: 3,
    name: "bunCha",
    description: "bun Cha Description",
    price: "$180",
    image: nemRan,
    category: "Main Dishes",
  },
  {
    id: 4,
    name: "saidFreirew",
    description: "said Freirew Description",
    price: "$290",
    image: nemRan,
    category: "Appetisers",
  },
  {
    id: 5,
    name: "nemRan",
    description: "nem Ran Description",
    price: "$300",
    image: mewink,
    category: "Appetisers",
  },
  {
    id: 6,
    name: "goiRan",
    description: "goi Ran Description",
    price: "$390",
    image: goiRan,
    category: "Main Dishes",
  },
  {
    id: 7,
    name: "repning",
    description: "repning Description",
    price: "$300",
    image: repning,
    category: "Appetisers",
  },
  {
    id: 8,
    name: "goiRaMuu",
    description: "goi Ra Muu Description",
    price: "$290",
    image: goiRaMuu,
    category: "Main Dishes",
  },
];
