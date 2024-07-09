exports.siteFooter = class siteFooter {

    constructor(page) {
        this.page = page;
    }

    async logo() {
        const logo = this.page.locator('.__wab_flex-container > div > div > div > .__wab_flex-container > a');
        await logo.click();
    }

    async popup(attribute, isExact = false) {
        const pagePromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: attribute, exact: isExact }).click();
        await pagePromise;
    }

    // Services Column
    async clickDataPlat() {
        await this.popup('Data Platforms', true);
    }

    async clickDocumentInt() {
        await this.popup('Document Intelligence', true);
    }

    async clickLocationInt() {
        await this.popup('Location Intelligence', true);
    }

    async clickCustomerInt() {
        await this.popup('Customer Intelligence', true);
    }

    // Company Column
    async clickAboutLink() {
        await this.popup('About');
    }

    async clickPressRoomLink() {
        await this.popup('Press Room');
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
        await this.popup('Data Stories');
    }
    
    async clickCaseStudiesLink(){
        await this.popup('Case Studies');
    }
    
    // Company Policies
    async clickCookiePolicyLink(){
        await this.popup('Cookie Policy');
    }

    async clickResponsibleDisclosureLink(){
        await this.popup('Responsible Disclosure Policy');
    }

    async clickPrivacySecurityLink(){
        await this.popup('Privacy & Security');
    }

    // Social Media Platforms
    async clickLinkedinProfileLink(){
        await this.popup('Linkedin');
    }
    
    async clickTwitterProfileLink(){
        await this.popup('Twitter');
    }
    
    async clickFacebookProfileLink(){
        await this.popup('Facebook');
    }
    
    async clickInstagramProfileLink(){
        await this.popup('Instagram');
    }
  
}