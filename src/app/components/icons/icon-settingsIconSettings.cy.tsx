import React from 'react'
import IconSettings from './icon-settings'

describe('<IconSettings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconSettings />)
  })
})