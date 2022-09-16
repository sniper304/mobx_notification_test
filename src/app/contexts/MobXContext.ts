import { createContext } from "react";
import { RootStores } from "../types/stores";
import { rootStores } from "../stores";

export const MobXContext = createContext<RootStores>(rootStores);
