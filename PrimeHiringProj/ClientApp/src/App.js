import './App.css'
import React from 'react'
import { store } from './actions/store'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import CandidateList from './containers/candidateList'
import Header from './containers/header'
import Footer from './containers/footer'
import Home from './containers/home'
import { Layout } from 'antd'
import Employees from './components/Employees'

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <Layout>
          <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/candidatelist'>
                <CandidateList />
              </Route>
              <Route exact path='/Employees'>
                <Employees />
              </Route>
            </Switch>
          <Footer />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
