exports.siteHeader = class siteHeader {

    constructor(page) {
        this.page = page;
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact}).click();
    }


    async logo() {
        const logo = this.page.locator('div').filter({ hasText: /^SolutionsIndustryEnterprise GenAINew!StoriesCareersCompanyContact us$/ }).getByRole('link').first();
        await logo.click();
    }

    // Solutions Directory
    async clickSolutionsDir() {
        const solutionsDir = this.page.locator('a').filter({ hasText: 'Solutions' }).nth(3)
        await solutionsDir.click();
    }

    async clickDataPlat() {
        const dataPlat = this.page.getByRole('link', { name: 'Data Platforms' }).nth(2);
        await dataPlat.click();
    }

    async clickDocumentInt() {
        const documentInt = this.page.getByRole('link', { name: 'Document Intelligence' }).nth(2);
        await documentInt.click();
    }

    async clickLocationInt() {
        const locationInt = this.page.getByRole('link', { name: 'Location Intelligence' }).nth(2);
        await locationInt.click();
    }

    async clickCustomerInt() {
        const customerInt = this.page.getByRole('link', { name: 'Customer Intelligence' }).nth(2);
        await customerInt.click();
    }

    async clickSolutionsOverview() {
        await this.clickElementByName('See Overview')
    }

    // Enterprise GenAI
    async clickGenaiSolutions() {
        await this.clickElementByName('See Overview');
    }

    // Stories
    async clickStories() {
        const stories = this.page.locator('a').filter({ hasText: 'Stories' }).nth(2);
        await stories.click();
    }

    // Careers
    async clickCareers() {
        const careers = this.page.getByRole('link', { name: 'Careers' }).nth(1);
        await careers.click();
    }

    // Company Directory
    async clickCompanyDir() {
        const companyDir = this.page.locator('a').filter({ hasText: 'Company' }).nth(1);
        await companyDir.click();
    }

    async clickAbout(){
        const about = this.page.getByRole('link', { name: 'About' }).nth(1);
        await about.click();
    }

    async clickPressRoom(){
        const pressRoom = this.page.getByRole('link', { name: 'Press Room' }).nth(1);
        await pressRoom.click();
    }

    // Contact Button
    async clickContactButton(){
        const contactButton = this.page.getByRole('link', { name: 'Contact us' }).first();
        await contactButton.click();
    }
  
}