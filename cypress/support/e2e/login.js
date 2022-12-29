const xpath = require("cypress-xpath")

describe('Login', function login(){
  it('should allow a user to login', () => {
    cy.visit('https://customerdev.everpro.id/auth/login')

    cy.get('#input-email-or-phone').type('89998881212')
    cy.get('#submit-login').click()
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div.flex.flex-col.flex-grow.items-center > div:nth-child(1)').click()
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(1) > input').type('9')
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(2) > input').type('9')
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(3) > input').type('8')
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div > div > div:nth-child(2) > div > div > div > div:nth-child(4) > input').type('8')
    cy.get('#modalbody > div.bg-white.px-4.py-4.flex-grow.flex.flex-col.relative > div > div > div > div:nth-child(3) > button').click()
    cy.wait(2)
    
    // Assert that the user was redirected to the dashboard
    cy.get('#main-content > nav > div.flex.justify-between.bg-white.border-b.border-neutral-300.items-center.h-20.px-3\.5 > div:nth-child(2) > div.relative.md\:m-6.inline-flex.w-fit > button > div.hidden.sm\:block > div > div.flex.flex-col.md\:flex-row.items-center > span.font-semibold.text-tertiary-700.text-sm.mr-2').contains('Apple Tester')

    cy.get('#send-package-button').click()

  })
})

