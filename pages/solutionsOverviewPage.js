exports.solutionsOver = class solutionsOver{

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
    async dataPlat(){
        await this.page.locator('div').filter({ hasText: /^Data PlatformsDemocratize data access$/ }).nth(1).click;
        await this.clickExploreSolution();
    }

    async documentInt(){
        await this.page.locator('div').filter({ hasText: /^Document IntelligenceExtract information easily$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    async locationInt(){
        await this.page.locator('div').filter({ hasText: /^Location IntelligenceUnlock spatial insights$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    async customerInt(){
        await this.page.locator('div').filter({ hasText: /^Customer IntelligenceFast track customer insights$/ }).nth(1).click();
        await this.clickExploreSolution();
    }

    // Case Study Buttons
    async dataPlatCaseStudy(){
        await this.popup('faster processing Reports')
    }

    async documentIntCaseStudyOne(){
        await this.popup('1M pages per second Extract')
    }

    async documentIntCaseStudyTwo(){
        await this.popup('1,000+ file types Capture')
    }

    async locationIntCaseStudy(){
        await this.popup('152M predictions Understand')
    }

    async customerIntCaseStudy(){
        await this.popup('93% correct recall of')
    }

    // Contact Link/Button
    async contactLink(){
        const contactLink = this.page.getByRole('link', { name: 'Contact us.' });
        await contactLink.click();
    }

    async contactButton(){
        const contactLink = this.page.getByRole('link', { name: 'Get in touch' });
        await contactLink.click();
    }

}