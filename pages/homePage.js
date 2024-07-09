exports.homePage = class homePage {

    constructor(page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto('https://thinkingmachin.es/');
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact}).click();
    }

    async clickExploreSolutionsButton() {
        await this.clickElementByName('Explore our solutions');
    }

    async clickTakeDataReadinessButton() {
        await this.clickElementByName('Take our data readiness');
    }

    async clickGenaiWidget() {
        const genaiWidget = this.page.locator('div').filter({ hasText: /^Discover ourEnterprise GenAI Solutions$/ }).first();
        await genaiWidget.click();
    }

    // click Target Industries
    async clickTelcom() {
        await this.page.getByText('Telecommunications').click();
        await this.handlePopup('Read case study', true);
    }

    async clickFinService() {
        await this.page.getByText('Financial Services').click();
        await this.handlePopup('Read case study', true);
    }

    async clickSocialImpact() {
        await this.page.getByText('Social Impact').click();
        await this.handlePopup('Read case study', true);
    }

    async clickRealEstate() {
        await this.page.getByText('Real Estate').click();
        await this.handlePopup('Read case study', true);
    }

    async clickOtherIndustries() {
        await this.page.getByText('Telecommunications').click();
        await this.page.getByText('Others').click();
        await this.handlePopup('Contact Us', true);
    }

    async handlePopup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    // click Solutions
    async clickDataPlat() {
        await this.handlePopup('Data Platforms Build secure,');
    }

    async clickDocumentInt() {
        await this.handlePopup('Document Intelligence Integrate, search, and gain insights from documents that');
    }

    async clickLocationInt() {
        await this.handlePopup('Location Intelligence Make');
    }

    async clickCustomerInt() {
        await this.handlePopup('Customer Intelligence Combine');
    }

    // click Contact Button/Link
    async clickContactLink() {
        await this.handlePopup('Contact Us.');
    }

    async clickContactButton() {
        await this.handlePopup('Get in touch');
    }
}