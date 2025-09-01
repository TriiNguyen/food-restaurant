export interface MenuItem {
  id: number;
  nameKey: string;
  descriptionKey: string;
  price: string;
  image: string;
  category: string;
  name?: string;
  description?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nameKey: "menu.items.phoCuon.name",
    descriptionKey: "menu.items.phoCuon.description",
    price: "$120",
    image: "/food-restaurant/src/assets/bun-cha.png",
    category: "Appetisers",
  },
  {
    id: 2,
    nameKey: "menu.items.mewink.name",
    descriptionKey: "menu.items.mewink.description",
    price: "$290",
    image: "/food-restaurant/src/assets/goi-ra-muu.png",
    category: "Main Dishes",
  },
  {
    id: 3,
    nameKey: "menu.items.bunCha.name",
    descriptionKey: "menu.items.bunCha.description",
    price: "$180",
    image: "/food-restaurant/src/assets/goi-ran.png",
    category: "Main Dishes",
  },
  {
    id: 4,
    nameKey: "menu.items.saidFreirew.name",
    descriptionKey: "menu.items.saidFreirew.description",
    price: "$290",
    image: "/food-restaurant/src/assets/nem-ran.png",
    category: "Appetisers",
  },
  {
    id: 5,
    nameKey: "menu.items.nemRan.name",
    descriptionKey: "menu.items.nemRan.description",
    price: "$300",
    image: "/food-restaurant/src/assets/mewink.png",
    category: "Appetisers",
  },
  {
    id: 6,
    nameKey: "menu.items.goiRan.name",
    descriptionKey: "menu.items.goiRan.description",
    price: "$390",
    image: "/food-restaurant/src/assets/goi-ran.png",
    category: "Main Dishes",
  },
  {
    id: 7,
    nameKey: "menu.items.repning.name",
    descriptionKey: "menu.items.repning.description",
    price: "$300",
    image: "/food-restaurant/src/assets/goi-ra-muu.png",
    category: "Appetisers",
  },
  {
    id: 8,
    nameKey: "menu.items.goiRaMuu.name",
    descriptionKey: "menu.items.goiRaMuu.description",
    price: "$290",
    image: "/food-restaurant/src/assets/goi-ra-muu.png",
    category: "Main Dishes",
  },
];
