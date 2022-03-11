import { combineReducers } from "@reduxjs/toolkit";
import { newsReducer } from "./newsReducer";

export const reducers = combineReducers(newsReducer)