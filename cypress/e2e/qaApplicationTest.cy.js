import { ProductPage } from '../pages/productPage';

describe('qa application', () => {
        beforeEach(() => {
                cy.login();
                cy.wait(1000);
        })

        it('first scenario', () => {
                const pPage = new ProductPage();
                //getting product list from chart
                pPage.getProductList().then(productList => {
                        // Access the object in the productList array
                        const p = productList[productList.length - 1];
                        // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                        cy.wrap(p.series).as('series');
                        cy.wrap(p.group).as('group');
                        cy.wrap(p.value).as('value');
                });

                // set order by 10
                cy.get('.a-GV-headerLabel').contains('Order').click();
                cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('10')
                cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('{enter}')
                cy.wait(1000);

                //getting chart again to comparate with previous chart data
                pPage.getProductList().then(productList => {
                        // Access the object in the productList array
                        const p2 = productList[productList.length - 1];
                        //Comparing old chart state with new state
                        cy.get('@series').then(old_seriesData => {
                                cy.log(old_seriesData);
                        })
                        cy.get('@group').then(old_groupData => {
                                cy.log(old_groupData);
                        })
                        cy.get('@value').then(old_valueData => {
                                cy.log(old_valueData);
                        })

                        // Log the properties of the first product
                        cy.log("newProduct Series: " + p2.series);
                        cy.log("newProduct Group: " + p2.group);
                        cy.log("newProduct Value: " + p2.value);
                });

                //removing filter by order
                cy.get('.a-IG-button--remove').should('be.visible').click();
                cy.wait(500);

                // set customer to Deli
                cy.get('.a-GV-headerLabel').contains('Customer').click();
                cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('Deli')
                cy.get('.a-IRR-sortWidget-searchField').should('be.visible').type('{enter}')
                cy.wait(1000);

                //getting chart again to comparate with previous chart data
                pPage.getProductList().then(productList => {
                        // Access the object in the productList array
                        const p3 = productList[productList.length - 1];

                        //Comparing old chart state with new state
                        cy.get('@series').then(old_seriesData => {
                                cy.log(old_seriesData);
                        })
                        cy.get('@group').then(old_groupData => {
                                cy.log(old_groupData);
                        })
                        cy.get('@value').then(old_valueData => {
                                cy.log(old_valueData);
                        })

                        // Log the properties of the first product
                        cy.log("newProduct Series: " + p3.series);
                        cy.log("newProduct Group: " + p3.group);
                        cy.log("newProduct Value: " + p3.value);
                });
        });
});
