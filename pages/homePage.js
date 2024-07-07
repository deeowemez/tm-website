exports.homePage = class homePage {

    constructor(page) {
        this.page = page;
    }

    async gotoHomePage() {
        await this.page.goto('https://thinkingmachin.es/')
    }

    async solutionsButton() {
        const solutionsOverview = this.page.getByRole('link', { name: 'Explore our solutions' });
        await solutionsOverview.click();
    }

    async dataReadinessButton() {
        const dataReadiness = this.page.getByRole('link', { name: 'Take our data readiness' });
        await dataReadiness.click();
    }

    async genaiWidget() {
        const genaiWidget = this.page.locator('div').filter({ hasText: /^Discover ourEnterprise GenAI Solutions$/ }).first();
        await genaiWidget.click();
    }

    async telcom(){
        await this.page.getByText('Telecommunications').click();
        await this.popup('Read case study', true)
    }

    async finService(){
        await this.page.getByText('Financial Services').click();
        await this.popup('Read case study', true)
    }

    async socialImpact(){
        await this.page.getByText('Social Impact').click();
        await this.popup('Read case study', true)
    }

    async realEstate(){
        await this.page.getByText('Real Estate').click();
        await this.popup('Read case study', true)
    }

    async otherIndustries() {
        await this.page.getByText('Telecommunications').click();
        await this.page.getByText('Others').click();
        await this.popup('Contact Us', true)
    }

    // async industries() {
    //     const industries = [
    //         { name: 'Telecommunications' },
    //         { name: 'Financial Services' },
    //         { name: 'Social Impact' },
    //         { name: 'Real Estate' },
    //     ]

    //     for (let industry of industries) {
    //         await this.page.getByText(industry.name).click();
    //         const pagePromise = this.page.waitForEvent('popup');
    //         await this.page.getByRole('link', { name: 'Read case study' }).click();
    //         await pagePromise;
    //     }
    // }

    async popup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    async dataPlatforms() {
        await this.popup('Data Platforms Build secure,')
    }

    async documentIntelligence() {
        await this.popup('Document Intelligence Integrate, search, and gain insights from documents that')
    }

    async locationIntelligence() {
        await this.popup('Location Intelligence Make')
    }

    async customerIntelligence() {
        await this.popup('Customer Intelligence Combine')
    }

    async contactLink(){
        await this.popup('Contact Us.')
    }

    async contactButton(){
        await this.popup('Get in touch')
    }
}