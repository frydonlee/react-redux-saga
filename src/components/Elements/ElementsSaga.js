import { all, call, put, takeLatest } from "redux-saga/effects";
//import { createAction } from "@reduxjs/toolkit";
import { addElementAPI, addElement, addElementAsync } from "./ElementsSlices";

export default function* rootSaga() {
  yield all([elementSaga()]);
}

function* addElementSaga(action) {
  const data = yield call(addElementAPI, action.payload);
  yield put(addElement(data));
}

export function* elementSaga() {
  //yield takeLatest(addElementAsync, addElementSaga);
}

///// LINK : https://viblo.asia/p/redux-toolkit-redux-saga-Ljy5VPAVZra
