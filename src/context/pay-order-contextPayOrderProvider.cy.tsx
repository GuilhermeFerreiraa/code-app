import React from 'react'
import { PayOrderProvider } from './pay-order-context'

describe('<PayOrderProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PayOrderProvider />)
  })
})