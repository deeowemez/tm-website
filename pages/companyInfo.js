exports.companyInfo = class companyInfo{

    constructor(page){
        this.page = page;
    }

    async gotoCompanyInfoPage(){
        await this.page.goto('https://thinkingmachin.es/about')
    }

    async clickDiscoverSolutionsButton(){
        const clickDiscoverSolutions = this.page.getByRole('link', { name: 'Discover our solutions' });
        await clickDiscoverSolutions.click();
    }

    async clickReadCaseStudiesButton(){
        const clickReadCaseStudies = this.page.getByRole('link', { name: 'Read our case studies' });
        await clickReadCaseStudies.click();
        }
    

    async clickBecomePartnerButton(){
        const clickBecomePartner = this.page.getByRole('link', { name: 'Become our partner' });
        await clickBecomePartner.click();
    }

    async popup(attribute){
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.locator(attribute).first().click();
        await pagePromise;
    }

    async clickPressReleases(){
        await this.popup('div:nth-child(2) > div > div > div > a');
        await this.popup('div:nth-child(2) > div > a');
        await this.popup('div:nth-child(3) > div > a')
    }

    async clickPressFeatures(){
        await this.popup('div:nth-child(6) > div > div:nth-child(2) > div > div > div > a');
        await this.popup('div:nth-child(6) > div > div:nth-child(2) > div > div:nth-child(2) > div > a');
        await this.popup('div:nth-child(6) > div > div:nth-child(2) > div > div:nth-child(3) > div > a');
    }

}
