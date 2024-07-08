exports.siteHeader = class siteHeader {

    constructor(page) {
        this.page = page;
    }

    async logo() {
        const logo = this.page.locator('div').filter({ hasText: /^SolutionsIndustryEnterprise GenAINew!StoriesCareersCompanyContact us$/ }).getByRole('link').first();
        await logo.click();
    }

    // Solutions Directory
    async solutionsDir() {
        const solutionsDir = this.page.locator('a').filter({ hasText: 'Solutions' }).nth(3)
        await solutionsDir.click();
    }

    async dataPlat() {
        const dataPlat = this.page.getByRole('link', { name: 'Data Platforms' }).nth(2);
        await dataPlat.click();
    }

    async documentInt() {
        const documentInt = this.page.getByRole('link', { name: 'Document Intelligence' }).nth(2);
        await documentInt.click();
    }

    async locationInt() {
        const locationInt = this.page.getByRole('link', { name: 'Location Intelligence' }).nth(2);
        await locationInt.click();
    }

    async customerInt() {
        const customerInt = this.page.getByRole('link', { name: 'Customer Intelligence' }).nth(2);
        await customerInt.click();
    }

    async solutionsOver() {
        const solutionsOver = this.page.getByRole('link', { name: 'See Overview' });
        await solutionsOver.click();
    }

    // Enterprise GenAI
    async genaiSolutions() {
        const genaiSol = this.page.getByRole('link', { name: 'See Overview' });
        await genaiSol.click();
    }

    // Stories
    async stories() {
        const stories = this.page.locator('a').filter({ hasText: 'Stories' }).nth(2);
        await stories.click();
    }

    // Careers
    async careers() {
        const careers = this.page.getByRole('link', { name: 'Careers' }).nth(1);
        await careers.click();
    }

    // Company Directory
    async companyDir() {
        const companyDir = this.page.locator('a').filter({ hasText: 'Company' }).nth(1);
        await companyDir.click();
    }

    async about(){
        const about = this.page.getByRole('link', { name: 'About' }).nth(1);
        await about.click();
    }

    async pressRoom(){
        const pressRoom = this.page.getByRole('link', { name: 'Press Room' }).nth(1);
        await pressRoom.click();
    }

    // Contact Button
    async contactButton(){
        const contactButton = this.page.getByRole('link', { name: 'Contact us' }).first();
        await contactButton.click();
    }
  
}