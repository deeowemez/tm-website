import { test, expect } from '@playwright/test'
import { homePage } from '../pages/homePage'
import { siteHeader } from '../components/header'
import { companyInfoPage } from '../pages/companyInfoPage'

test.only('Workflow 1: Navigate to Solutions Overview Page ', async ({ page }) => {
    const header = new siteHeader(page);
    const home = new homePage(page);
    const companyInfo = new companyInfoPage(page);
    await home.gotoHomePage();
    // await header.logo();
    // await header.solutionsDir();
    // await header.dataPlat();
    // await header.documentInt();
    // await header.locationInt();
    // await header.customerInt();
    // await header.solutionsOver();
    await header.companyDir();
    await header.about();
    await companyInfo.clickPressFeature();
})