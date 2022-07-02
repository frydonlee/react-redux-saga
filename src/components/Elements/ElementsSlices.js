import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
  status: "idle",
};

export const elementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
    },
    removeElement: (state, action) => {
      const index = state.elements.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) {
        state.elements.splice(index, 1);
      }
    },
  },
});

export const { addElement, removeElement } = elementSlice.actions;

// export const selectElements = (state) => state.elements;
//export const selectTodo = (state) => state.todo;
export const selectElement = (state) => state.element;

export default elementSlice.reducer;
