import React from 'react'
import IconShoppings from './icon-shoppings'

describe('<IconShoppings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconShoppings />)
  })
})