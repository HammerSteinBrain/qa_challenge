import { ProductPage } from '../pages/productPage';

describe('qa application', () => {
        beforeEach(() => {
                cy.login();
        })

        it('first scenario', () => {
                let firstReturnAlias = 'firstProductList';
                let secondReturnAlias = 'secondProductList';
                const pPage = new ProductPage();
                
                //waiting chart to be fully rendered
                cy.wait(1500);
                
                //getting current state of chart
                pPage.getProductListFromChart().as(firstReturnAlias);

                // set order by 10
                pPage.setOrderFilterValue(10);

                //getting chart again to comparate with previous chart data
                pPage.getProductListFromChart().as(secondReturnAlias);
                cy.get(`@${firstReturnAlias}`).then(firstProductList => {
                        cy.get(`@${secondReturnAlias}`).then(secondProductList => {
                                // Perform the comparison
                                expect(firstProductList).to.not.deep.equal(secondProductList);
                        });
                });

                //removing filter by order
                pPage.removingFilter();

                // set order by 20
                pPage.setOrderFilterValue(20);

                //getting chart again to comparate with previous chart data
                pPage.getProductListFromChart().as(secondReturnAlias);
                cy.get(`@${firstReturnAlias}`).then(firstProductList => {
                        cy.get(`@${secondReturnAlias}`).then(secondProductList => {
                                // Perform the comparison
                                expect(firstProductList).to.not.deep.equal(secondProductList);
                        });
                });

                //removing filter by order
                pPage.removingFilter();

                // set customer to Deli
                pPage.setCustomerFilter('Deli')

                //getting chart again to comparate with previous chart data
                pPage.getProductListFromChart().as(secondReturnAlias);
                cy.get(`@${firstReturnAlias}`).then(firstProductList => {
                        cy.get(`@${secondReturnAlias}`).then(secondProductList => {
                                // Perform the comparison
                                expect(firstProductList).to.not.deep.equal(secondProductList);
                        });
                });
        });
});
