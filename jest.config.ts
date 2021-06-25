import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    roots: [
        "<rootDir>/test",
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "jsom", "node"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(jpg)$":"<rootDiv>/test/mockFile.ts",
        "\\.(css)$":"<rootDiv>/test/mockFile.ts"
    },
    collectCoverage: true,
    collectCoverageFrom: [ 
        'src/**/*.{ts, tsx}',
        '!src/services/**'
     ]
    
}

export default config;

