import { configureStore } from "@testing-library/react";
import course from "./features/course/slice";

export const store = configureStore({
  reducer: {
    course,
  },
});
