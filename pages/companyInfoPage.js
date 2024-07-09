exports.companyInfo = class companyInfo{

    constructor(page){
        this.page = page;
    }

    async gotoCompanyInfoPage(){
        await this.page.goto('https://thinkingmachin.es/about');
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact}).click();
    }

    async clickDiscoverSolutionsButton(){
        await this.clickElementByName('Discover our solutions');
    }

    async clickReadCaseStudiesButton(){
        await this.clickElementByName('Read our case studies');
    }

    async clickBecomePartnerButton(){
        await this.clickElementByName('Become our partner');
    }

    async hanlePopup(attribute){
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.locator(attribute).first().click();
        await pagePromise;
    }

    async clickPressReleases(){
        await this.hanlePopup('div:nth-child(2) > div > div > div > a');
        await this.hanlePopup('div:nth-child(2) > div > a');
        await this.hanlePopup('div:nth-child(3) > div > a')
    }

    async clickPressFeatures(){
        await this.hanlePopup('div:nth-child(6) > div > div:nth-child(2) > div > div > div > a');
        await this.hanlePopup('div:nth-child(6) > div > div:nth-child(2) > div > div:nth-child(2) > div > a');
        await this.hanlePopup('div:nth-child(6) > div > div:nth-child(2) > div > div:nth-child(3) > div > a');
    }

}
