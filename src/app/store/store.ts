import { combineReducers, configureStore } from "@reduxjs/toolkit";
import padovanReducer from "../../features/padovan/model/PadovanReducer";
import searchReducer from "../../widget/header/model/search/model/searchReducer";
import spesiesReducer from "../../features/birdSpecies/model/birdSpeciesReducer";
import rioReducer from "../../features/rio/model/rioReducer";
import izbaReducer from "../../features/izba/model/izbaReducer";
import cartReducer from "../../features/core/cartReducer";
import counterReducer from "../../features/core/counter/model/counterReducer";
const rootReducer = combineReducers({
  padovan: padovanReducer,
  search: searchReducer,
  species: spesiesReducer,
  rio: rioReducer,
  izba: izbaReducer,
  cart: cartReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
