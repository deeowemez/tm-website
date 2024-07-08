exports.solutionsOver = class solutionsOver{

    async gotoSolutionsOverviewPage(){
        await this.page.goto('https://thinkingmachin.es/solutions')
    }

    async clickExploreSolution(){
        const clickExploreSolution = this.page.getByRole('link', { name: 'Explore Solution' });
        await clickExploreSolution.click();
    }

    async popup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    // Solutions Pages Buttons
    async clickDataPlat(){
        await this.page.locator('div').filter({ hasText: /^Data PlatformsDemocratize data access$/ }).nth(1).click;
        await this.clickExploreSolution();
    }

    async clickDocumentInt(){
        await this.page.locator('div').filter({ hasText: /^Document IntelligenceExtract information easily$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    async clickLocationInt(){
        await this.page.locator('div').filter({ hasText: /^Location IntelligenceUnlock spatial insights$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    async clickCustomerInt(){
        await this.page.locator('div').filter({ hasText: /^Customer IntelligenceFast track customer insights$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    // Case Study Buttons
    async clickDataPlatCaseStudy(){
        await this.popup('faster processing Reports')
    }

    async clickDocumentIntCaseStudyOne(){
        await this.popup('1M pages per second Extract')
    }

    async clickDocumentIntCaseStudyTwo(){
        await this.popup('1,000+ file types Capture')
    }

    async clickLocationIntCaseStudy(){
        await this.popup('152M predictions Understand')
    }

    async clickCustomerIntCaseStudy(){
        await this.popup('93% correct recall of')
    }

    // Contact Link/Button
    async clickContactLink(){
        const contactLink = this.page.getByRole('link', { name: 'Contact us.' });
        await contactLink.click();
    }

    async clickContactButton(){
        const contactLink = this.page.getByRole('link', { name: 'Get in touch' });
        await contactLink.click();
    }

}