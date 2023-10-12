import React from 'react'
import IconProfile from './icon-profile'

describe('<IconProfile />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconProfile />)
  })
})