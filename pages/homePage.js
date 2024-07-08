exports.homePage = class homePage {

    constructor(page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto('https://thinkingmachin.es/')
    }

    async clickExploreSolutionsButton() {
        const solutionsOverview = this.page.getByRole('link', { name: 'Explore our solutions' });
        await solutionsOverview.click();
    }

    async clickTakeDataReadinessButton() {
        const dataReadiness = this.page.getByRole('link', { name: 'Take our data readiness' });
        await dataReadiness.click();
    }

    async clickGenaiWidget() {
        const genaiWidget = this.page.locator('div').filter({ hasText: /^Discover ourEnterprise GenAI Solutions$/ }).first();
        await genaiWidget.click();
    }

    async clickTelcom(){
        await this.page.getByText('Telecommunications').click();
        await this.popup('Read case study', true)
    }

    async clickFinService(){
        await this.page.getByText('Financial Services').click();
        await this.popup('Read case study', true)
    }

    async clickSocialImpact(){
        await this.page.getByText('Social Impact').click();
        await this.popup('Read case study', true)
    }

    async clickRealEstate(){
        await this.page.getByText('Real Estate').click();
        await this.popup('Read case study', true)
    }

    async clickOtherIndustries() {
        await this.page.getByText('Telecommunications').click();
        await this.page.getByText('Others').click();
        await this.popup('Contact Us', true)
    }

    async popup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    async clickDataPlat() {
        await this.popup('Data Platforms Build secure,')
    }

    async clickDocumentInt() {
        await this.popup('Document Intelligence Integrate, search, and gain insights from documents that')
    }

    async clickLocationInt() {
        await this.popup('Location Intelligence Make')
    }

    async clickCustomerInt() {
        await this.popup('Customer Intelligence Combine')
    }

    async clickContactLink(){
        await this.popup('Contact Us.')
    }

    async clickContactButton(){
        await this.popup('Get in touch')
    }
}