import { Item } from "../types/item";
import { v4 as uuidv4 } from "uuid";
let items: Item[] = [];

export const getAll = (): Item[] => {
  return items;
};

export const addItem = (item: Omit<Item, "id">) => {
  const newItem: Item = { ...item, id: uuidv4() };
  items.push(newItem);
  return newItem;
};
