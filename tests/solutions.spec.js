import { test, expect } from '@playwright/test'
import { homePage } from '../pages/homePage'
import { siteHeader } from '../components/header'
import { siteFooter } from '../components/footer'
import { companyInfo } from '../pages/companyInfoPage'
import { solutionsOver } from '../pages/solutionsOverviewPage'
import { dataPlatforms } from '../pages/dataPlatformsPage'

test.describe('Navigate to Solutions Overview and Individual Solutions Pages', () => {
    let home;
    let header;
    let companyInfoPage;
    let solutionsOverPage;
    let dataPlatformsPage;
    let footer;

    test.beforeEach(async ({ page }) => {
        home = new homePage(page);
        header = new siteHeader(page);
        companyInfoPage = new companyInfo(page);
        solutionsOverPage = new solutionsOver(page);
        dataPlatformsPage = new dataPlatforms(page);
        footer = new siteFooter(page);
        // await home.gotoHomePage();
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })


    // Navigate to Solutions Overview Page
    test('Navigate to Solutions Overview Page from TM Home Page', async () => {
        await home.gotoHomePage();
        await home.clickExploreSolutionsButton();
    })

    test('Navigate to Solutions Overview Page from Header', async () => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickSolutionsOverview();
    })

    test('Navigate to Solutions Overview Page from Company Information Page', async() => {
        await companyInfoPage.gotoCompanyInfoPage();
        await companyInfoPage.clickDiscoverSolutionsButton();
    })

    // Navigate to Data Platforms Page
    test.only('Navigate to Data Platforms Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Solutions Overview Page', async() => {
        await solutionsOverPage.gotoSolutionsOverviewPage();
        await solutionsOverPage.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Footer', async() => {
        await home.gotoHomePage();
        await footer.clickDataPlatLink();
    })

    // Navigate to Document Intelligence Page
    test('Navigate to Document Intelligence Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickDocumentInt();
    })

    test('Navigate to Document Intelligence Page from Solutions Overview Page', async() => {
        await solutionsOverPage.gotoSolutionsOverviewPage();
        await solutionsOverPage.clickDocumentInt();
    })

    test('Navigate to Document Intelligence Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickDocumentInt();
    })
    
    test('Navigate to Document Intelligence Page from Footer', async() => {
        await home.gotoHomePage();
        await footer.clickDocumentIntLink();
    })

    test('Navigate to Document Intelligence Page from Data Platforms Page', async() => {
        await dataPlatformsPage.gotoDataPlatformsPage();
        await dataPlatformsPage.clickDocumentInt();
    })

    // Navigate to Location Intelligence Page
    test.only('Navigate to Location Intelligence Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickLocationInt();
    })

    test('Navigate to Location Intelligence Page from Solutions Overview Page', async() => {
        await solutionsOverPage.gotoSolutionsOverviewPage();
        await solutionsOverPage.clickLocationInt();
    })

    test('Navigate to Location Intelligence Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickLocationInt();
    })
    
    test('Navigate to Location Intelligence Page from Footer', async() => {
        await footer.clickLocationIntLink();
    })

    test('Navigate to Location Intelligence Page from Data Platforms Page', async() => {
        await dataPlatformsPage.gotoDataPlatformsPage();
        await dataPlatformsPage.clickLocationInt();
    })

    // Navigate to Customer Intelligence Page
    test('Navigate to Customer Intelligence Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickCustomerInt();
    })

    test('Navigate to Customer Intelligence Page from Solutions Overview Page', async() => {
        await solutionsOverPage.gotoSolutionsOverviewPage();
        await solutionsOverPage.clickCustomerInt();
    })

    test('Navigate to Customer Intelligence Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickCustomerInt();
    })
    
    test('Navigate to Customer Intelligence Page from Footer', async() => {
        await home.gotoHomePage();
        await footer.clickCustomerIntLink();
    })

    test('Navigate to Customer Intelligence Page from Data Platforms Page', async() => {
        await dataPlatformsPage.gotoDataPlatformsPage();
        await dataPlatformsPage.clickCustomerInt();
    })

})


