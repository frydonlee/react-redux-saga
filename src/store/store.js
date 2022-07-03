import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import elementsSlices from "../components/Elements/ElementsSlices";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../components/Elements/ElementsSaga";

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

//

// const SagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: {
//     element: elementsSlices,
//   },
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
//   },
// });

// SagaMiddleware.run(rootSaga);

//

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    element: elementsSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
