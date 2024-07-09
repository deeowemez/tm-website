exports.siteFooter = class siteFooter {

    constructor(page) {
        this.page = page;
    }

    async logo() {
        const logo = this.page.locator('.__wab_flex-container > div > div > div > .__wab_flex-container > a');
        await logo.click();
    }

    async clickElementByName(attribute, isExact = false) {
        await this.page.getByRole('link', { name: attribute, exact: isExact}).click();
    }

    // Services Column
    async clickDataPlatLink() {
        await this.clickElementByName('Data Platforms', true);
    }

    async clickDocumentIntLink() {
        await this.clickElementByName('Document Intelligence', true);
    }

    async clickLocationIntLink() {
        await this.clickElementByName('Location Intelligence', true);
    }

    async clickCustomerIntLink() {
        await this.clickElementByName('Customer Intelligence', true);
    }

    // Company Column
    async clickAboutLink() {
        await this.clickElementByName('About');
    }

    async clickPressRoomLink() {
        await this.clickElementByName('Press Room');
    }

    async clickCareersLink() {
        const careers = this.page.getByRole('link', { name: 'Careers' }).first();
        await careers.click();
    }

    async clickContactLink() {
        const contact = this.page.getByRole('link', { name: 'Contact us' }).nth(1);
        await contact.click();
    }

    // Resources Column
    async clickDataStoriesLink() {
        await this.clickElementByName('Data Stories');
    }
    
    async clickCaseStudiesLink(){
        await this.clickElementByName('Case Studies');
    }
    
    // Company Policies
    async clickCookiePolicyLink(){
        await this.clickElementByName('Cookie Policy');
    }

    async clickResponsibleDisclosureLink(){
        await this.clickElementByName('Responsible Disclosure Policy');
    }

    async clickPrivacySecurityLink(){
        await this.clickElementByName('Privacy & Security');
    }

    // Social Media Platforms
    async clickLinkedinProfileLink(){
        await this.clickElementByName('Linkedin');
    }
    
    async clickTwitterProfileLink(){
        await this.clickElementByName('Twitter');
    }
    
    async clickFacebookProfileLink(){
        await this.clickElementByName('Facebook');
    }
    
    async clickInstagramProfileLink(){
        await this.clickElementByName('Instagram');
    }
  
}