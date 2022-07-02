import { configureStore } from "@reduxjs/toolkit";
import elementsSlices from "../components/Elements/ElementsSlices";

export const store = configureStore({
  reducer: {
    element: elementsSlices,
  },
});
