exports.dataPlatforms = class dataPlatforms {

    constructor(page){
        this.page = page;
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact}).click();
    }

    async handlePopup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    async gotoDataPlatformsPage(){
        await this.page.goto('https://thinkingmachin.es/data-platforms')
    }

    async clickConsultationButtonOne(){
        const consult = this.page.getByRole('link', { name: 'Schedule a consult' }).first();
        await consult.click();
    }

    async clickLearnMoreButton(){
        await this.clickElementByName('Learn more');
    }

    async clickOrientLogo(){
        await this.handlePopup('Orient future Singapore');
    }

    async clickConsultationButtonTwo(){
        const consultOne =  this.page.locator('div').filter({ hasText: /^at least 36x faster processingwith Cloud Data PlatformsSchedule a consult$/ }).getByRole('link');
        await consultOne.click();
    }

    async clickCustomerInt(){
        await this.handlePopup('Customer Intelligence Combine');
    }

    async clickDocumentInt(){
        await this.handlePopup('Document Intelligence Integrate, search, and gain insights from documents that');
    }

    async clickLocationInt(){
        await this.handlePopup('Location Intelligence Make');
    }

    async clickConsultationButtonThree(){
        await this.clickElementByName('Schedule a Consult', true)
    }
    
}