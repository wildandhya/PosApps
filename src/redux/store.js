import {createStore, applyMiddleware} from 'redux'

import rpm from 'redux-promise-middleware'

import rootReducer from './reducer/index'
import {createLogger} from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import createAsyncStorage from '@react-native-community/async-storage'


const logger = createLogger()
const enhancer = applyMiddleware(rpm, logger)

const storage = createAsyncStorage

const persistConfig = {
    key:'root',
    storage,
    blacklist: ['contact']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default ()=>{
    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }

}