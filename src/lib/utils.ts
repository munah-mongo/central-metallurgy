import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const metasitedata = {
  title: "Central Metallurgical Kenya & Labs",
  description:
    "Central Metallurgical Kenya and Labs is a premier metallurgical testing laboratory dedicated to delivering accurate and insightful material analysis. With advanced technology and a skilled team, we serve diverse industries, ensuring quality, compliance, and informed decision-making. Trust us to uncover the hidden properties of your materials and drive excellence in your products.",
};
