exports.siteHeader = class header{

    constructor(page){
        this.page = page;
    }

    async logo(){
        const logo = this.page.locator('div').filter({ hasText: /^SolutionsIndustryEnterprise GenAINew!StoriesCareersCompanyContact us$/ }).getByRole('link').first();
        await logo.click();
    }

    // Solutions Directory
    async solutionsDir(){
        const solutionsDir = this.page.locator('a').filter({ hasText: 'Solutions' }).nth(3)
        await solutionsDir.click();
    }

    async dataPlat(){
        const dataPlat = this.page.getByRole('link', { name: 'Data Platforms' }).nth(2);
        await dataPlat.click();
    }

    async documentInt(){
        const documentInt = this.page.getByRole('link', { name: 'Document Intelligence' }).nth(2);
        await documentInt.click();
    }

    async locationInt(){
        const locationInt = this.page.getByRole('link', { name: 'Location Intelligence' }).nth(2);
        await locationInt.click();
    }

    async customerInt(){
        const customerInt = this.page.getByRole('link', { name: 'Customer Intelligence' }).nth(2);
        await customerInt.click();
    }

    async solutionsOver(){
        const solutionsOver = this.page.getByRole('link', { name: 'See Overview' });
        await solutionsOver.click();
    }
    
    // Enterprise GenAI
    async genaiSolutions(){
        const genaiSol = this.page.getByRole('link', { name: 'See Overview' });
        await solutionsOver.click();
    }

}