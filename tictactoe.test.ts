import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

describe('places Xs in squares',async () => {
    test('Places X in top left', async () => {
        let topLeftCell = await (await driver).findElement(By.id('cell-0'));
        await topLeftCell.click();
        let topLeftCellText = await topLeftCell.getText();
        expect(topLeftCellText).toContain('X')
    })
    test('Places X in top right', async () => {
        let topRightCell = await (await driver).findElement(By.id('cell-2'));
        await topRightCell.click();
        let topRightCellText = await topRightCell.getText();
        expect(topRightCellText).toContain('X')
    })
    test('Places X in bottom right', async () => {
        let bottomRightCell = await (await driver).findElement(By.id('cell-8'));
        await bottomRightCell.click();
        let bottomRightCellText = await bottomRightCell.getText();
        expect(bottomRightCellText).toContain('X')
    })
})

test('Checks if computer plays an O', async () => {
    let oppCell = await (await driver).findElement(By.id('cell-1')).getText();
    expect(oppCell).toContain('O' || 'o')
})