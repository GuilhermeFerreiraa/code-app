import React from 'react'
import StyledComponentsRegistry from './StyledComponentsRegistry'

describe('<StyledComponentsRegistry />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StyledComponentsRegistry />)
  })
})