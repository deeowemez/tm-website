exports.solutionsOver = class solutionsOver {

    constructor(page) {
        this.page = page;
    }

    async gotoSolutionsOverviewPage() {
        await this.page.goto('https://thinkingmachin.es/solutions');
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
    }

    async handlePopup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    async clickExploreSolution() {
        await this.clickElementByName('Explore Solution');
    }

    // Solutions Pages Buttons
    async clickDataPlat() {
        // await this.page.locator('div').filter({ hasText: /^Data PlatformsDemocratize data access$/ }).nth(1).click();
        await this.page.locator('div').filter({ hasText: /^Data Platforms$/ }).click();
        await this.clickExploreSolution();
    }

    async clickDocumentInt() {
        // await this.page.locator('div').filter({ hasText: /^Document IntelligenceExtract information easily$/ }).nth(1).click();
        await this.page.locator('div').filter({ hasText: /^Document Intelligence$/ }).click();
        await this.clickExploreSolution();
    }

    async clickLocationInt() {
        // await this.page.locator('div').filter({ hasText: /^Location IntelligenceUnlock spatial insights$/ }).nth(1).click();
        await this.page.locator('div').filter({ hasText: /^Location Intelligence$/ }).click();;
        await this.clickExploreSolution();
    }

    async clickCustomerInt() {
        // await this.page.locator('div').filter({ hasText: /^Customer IntelligenceFast track customer insights$/ }).nth(1).click();
        await this.page.locator('div').filter({ hasText: /^Customer Intelligence$/ }).click();
        await this.clickExploreSolution();
    }

    // Case Study Buttons
    async clickDataPlatCaseStudy() {
        await this.handlePopup('faster processing Reports');
    }

    async clickDocumentIntCaseStudyOne() {
        await this.handlePopup('1M pages per second Extract');
    }

    async clickDocumentIntCaseStudyTwo() {
        await this.handlePopup('1,000+ file types Capture');
    }

    async clickLocationIntCaseStudy() {
        await this.handlePopup('152M predictions Understand');
    }

    async clickCustomerIntCaseStudy() {
        await this.handlePopup('93% correct recall of');
    }

    // Contact Link/Button
    async clickContactLink() {
        await this.clickElementByName('Contact us.');
    }

    async clickContactButton() {
        await this.clickElementByName('Get in touch');
    }

}