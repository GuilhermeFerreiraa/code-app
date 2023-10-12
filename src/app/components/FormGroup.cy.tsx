import React from 'react'
import FormGroup from './FormGroup'

describe('<FormGroup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FormGroup />)
  })
})