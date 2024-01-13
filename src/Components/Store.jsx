import { applyMiddleware } from "redux"
import { createStore } from "redux"
import { thunk } from "redux-thunk"
import  Reducer  from "./Reducer"

const store = createStore(Reducer, applyMiddleware(thunk))

export default store;