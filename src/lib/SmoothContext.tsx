import { createContext, useContext } from "react";

export type SmoothScrollFn = (target: string) => void;

export const SmoothContext = createContext<SmoothScrollFn>(() => {});

export function useSmooth(): SmoothScrollFn {
  return useContext(SmoothContext);
}
