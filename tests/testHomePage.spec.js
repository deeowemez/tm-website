import { test, expect } from '@playwright/test'
import { homePage } from '../pages/homePage'

test('test', async({page}) =>{
    const home = new homePage(page)
    await home.gotoHomePage()
    // await home.industries();
    // await home.otherIndustries();
    await home.dataPlatforms();
    // await home.solutionsButton();
})