import { test, expect } from '@playwright/test'
import { homePage } from '../pages/homePage'
import { siteHeader } from '../components/header'

test('test', async({page}) =>{
    const home = new homePage(page)
    await home.gotoHomePage()
    // await home.solutionsButton();
    // await home.dataReadinessButton();
    // await home.dataReadinessButton();
    // await home.genaiWidget();
    // await home.industries();
    // await home.otherIndustries();
    // await home.dataPlatforms();
    // await home.solutionsButton();
    // await home.solutionsButton();
})


test.only('header', async({page}) =>{
    const header = new siteHeader(page)
    const home = new homePage(page)
    await home.gotoHomePage()
    // await header.logo();
    await header.solutionsDir();
    // await header.dataPlat();
    // await header.documentInt();
    // await header.locationInt();
    // await header.customerInt();
    await header.solutionsOver();
})