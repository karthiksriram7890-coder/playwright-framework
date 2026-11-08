# Playwright TypeScript Automation Framework

UI automation framework using Playwright with TypeScript and Page Object Model.

## Tech Stack
- Playwright, TypeScript
- Page Object Model
- Data-driven testing (JSON, CSV, Excel)
- Allure and HTML reports
- GitHub Actions / Jenkins CI

## Folder Structure
- `pages/` - Page Object classes
- `tests/` - Test specs
- `utils/` - CSV and Excel readers
- `test-data/` - Test data files
- `playwright.config.ts` - Configuration

## Setup
```
npm ci
npx playwright install
```

## Run
```
npx playwright test
npx playwright test --headed
npx playwright show-report
```
