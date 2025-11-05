"use client";
import { Provider } from "react-redux";
import store, { useAppDispatch } from "@/redux/store";
import { ReactNode } from "react";
import { useCartStorage } from "@/hooks/useCartStorage";

export default function ReduxProvider({ children }: ProviderProps) {
  return (
    <Provider store={store}>
      <InitCartWrapper>{children}</InitCartWrapper>
    </Provider>
  );
}

function InitCartWrapper({ children }: { children: ReactNode }) {
  useCartStorage();
  return <>{children}</>;
}
