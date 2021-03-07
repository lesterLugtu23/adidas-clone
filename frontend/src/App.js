import React from 'react'

import { Route } from 'react-router-dom'

import { Header } from './components/header/header.component'
import { Men } from './pages/men/men.component'

export const App = () => <>
  <Header />
  <Route exact path="/men" component={Men} />
</>
