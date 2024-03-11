export class ProductPage {
    constructor(series, group, value) {
        this.series = series;
        this.group = group;
        this.value = value;
    }

    getProductListFromChart() {
        return cy.get('g[fill="rgba(0,0,0,0)"] [cursor="pointer"]', { timeout:5000 }).then($els => {
            const productList = [];
            // Iterate over each element
            $els.each((index, $el) => {
                let p = new ProductPage();
                cy.wrap($el).click({ force: true });

                // Wait for the text values and populate the product object
                cy.get('.oj-dvt-datatip-table .oj-dvt-datatip-value').then($values => {
                    p.series = $values.eq(0).text();
                    p.group = $values.eq(1).text();
                    p.value = $values.eq(2).text();
                    productList.push(p);
                });
            });

            // Return the productList array wrapped
            return cy.wrap(productList);
        });
    }

    setOrderFilterValue(orderValue) {
        // set order by the provided value
        cy.get('.a-GV-headerLabel').contains('Order').click();
        cy.get('.a-IRR-sortWidget-searchField').should('be.visible').clear().type(orderValue);
        cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('{enter}');
        cy.wait(1000);
    }

    setCustomerFilter(customerValue) {
        cy.get('.a-GV-headerLabel').contains('Customer').click();
        cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type(customerValue)
        cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('{enter}')
        cy.wait(1000);
    }

    removingFilter(){
        cy.get('.a-IG-button--remove').should('be.visible').click();
        cy.wait(500);
    }
}