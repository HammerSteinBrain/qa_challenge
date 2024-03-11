export class ProductPage {
    constructor(series, group, value) {
        this.series = series;
        this.group = group;
        this.value = value;
    }

    getProductList() {
        return cy.get('g[fill="rgba(0,0,0,0)"] [cursor="pointer"]').then($els => {
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
    
            // Return the productList array wrapped in a Cypress promise
            return cy.wrap(productList);
        });
    }
}