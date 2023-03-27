import { createSlice } from ".@reduxjs/toolkit";

export const initialsCourseState = {
  value: 42,
};

const courseSlice = createSlice({
  name: "course",
  initialState: initialsCourseState,
});

export const selectCourse = (state) => state.course.value;
export default courseSlice.reducer;
