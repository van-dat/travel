"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ProviderAndt } from "./ProviderAndt";

const ProviderStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ProviderAndt>{children}</ProviderAndt>
    </Provider>
  );
};

export default ProviderStore;
