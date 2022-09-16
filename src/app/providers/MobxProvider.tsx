import { ReactNode, useContext, useRef } from "react";
import { MobXContext } from "../contexts/MobXContext";
import { RootStores } from "../types/stores";

export const MobXProvider = ({
  children,
  ...stores
}: {
  children: ReactNode;
} & RootStores) => {
  const contextValuesValue = useContext(MobXContext);

  const mutableProviderRef = useRef({ ...contextValuesValue, ...stores });
  const value = mutableProviderRef.current;

  return <MobXContext.Provider value={value}>{children}</MobXContext.Provider>;
};
