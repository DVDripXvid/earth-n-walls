import { readable } from "svelte/store";
import { hu } from "./hu";

export const t = readable(hu, (set) => {});
