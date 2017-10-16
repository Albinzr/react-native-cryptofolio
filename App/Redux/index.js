import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    navigation: require('./NavigationRedux').reducer,
    appState: require('./AppStateRedux').reducer,
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer,
    auth: require('./AuthRedux').reducer,
    accounts: require('./AccountsRedux').reducer,
    transactions: require('./TransactionsRedux').reducer,
    prices: require('./CryptoPricesRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
