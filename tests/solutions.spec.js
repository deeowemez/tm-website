import { test, expect } from '@playwright/test'
import { homePage } from '../pages/homePage'
import { siteHeader } from '../components/header'
import { companyInfo } from '../pages/companyInfo'
import { solutionsOver } from '../pages/solutionsOverviewPage'

test.describe('Navigate to Solutions Overview and Individual Solutions Pages', () => {
    let home;
    let header;
    let companyInfoPage;
    let solutionsOverPage;

    test.beforeEach(async ({ page }) => {
        home = new homePage(page);
        header = new siteHeader(page);
        companyInfoPage = new companyInfo(page);
        solutionsOverPage = new solutionsOver(page);
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
    test('Navigate to Data Platforms Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Solutions Overview Page', async() => {
        await home.gotoHomePage();
        await solutionsOverPage.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickDataPlat();
    })

    test('Navigate to Data Platforms Page from Footer', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickDataPlat();
    })

    // Navigate to Document Intelligence Page
    test('Navigate to Document Intelligence Page from TM Home Page', async() => {
        await home.gotoHomePage();
        await home.clickDocumentInt();
    })

    test('Navigate to Document Intelligence Page from Solutions Overview Page', async() => {
        await home.gotoHomePage();
        await solutionsOverPage.clickDocumentInt();
    })

    test('Navigate to Document Intelligence Page from Header', async() => {
        await home.gotoHomePage();
        await header.clickSolutionsDir();
        await header.clickDocumentInt();
    })

})


