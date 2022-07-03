import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    builder
      .addCase(addElementAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addElementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.elements.push(action.payload);
      });
  },
});

//Example fetch from server
//start
// mimic the delay of response from server by using setTimeout
export const addElementAPI = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(payload), 1000);
  });
};

//createAsyncThunk will return a function with three actions: pending, fulfilled and rejected

export const addElementAsync = createAsyncThunk(
  "elementSlice/addElementAsync",
  async (payload) => {
    const data = await addElementAPI(payload);
    return data;
  }
);

//export const addElementAsync = createAction("element/addElementAsync");

// export const addElementAsync = createAction(
//   "element/addElementAsync",
//   (element) => ({ element })
// );

//end

export const { addElement, removeElement } = elementSlice.actions;

export const selectElement = (state) => state.element; //su store vi è solo element

export default elementSlice.reducer;
