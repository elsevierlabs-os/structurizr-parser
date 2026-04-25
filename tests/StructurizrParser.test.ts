import * as fsPromise from 'fs/promises';
import { StructurizrParser } from '../src/Parser';
import { createSyntaxDiagramsCode } from 'chevrotain';
import { StructurizrLexer } from '../src/Lexer';
import { describe, test, expect } from '@jest/globals';

describe('Testing StructurizrParser', () => {
    test('Can generate syntax diagrams', async () => {
        const targetDir = './tests/diagrams/';
        const serializedGrammar = StructurizrParser.getSerializedGastProductions();
        const htmlText = createSyntaxDiagramsCode(serializedGrammar);
        await fsPromise.writeFile(targetDir + "generated_syntax_diagrams.html", htmlText);
        expect(htmlText.length).toBeGreaterThan(0);
    });

    test('Can parse getting started dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/getting-started.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.log(StructurizrParser.errors);
        };
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });

    test('Can parse extension to getting started dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/getting-started-extended.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.log(StructurizrParser.errors);
        };
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });

    test('Can parse root properties in getting started dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/getting-started-properties.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.log(StructurizrParser.errors);
        };
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });

    test('Can parse Elsevier dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/elsevier.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.log(StructurizrParser.errors);
        };
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });

    test('Can parse shapes dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/shapes.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.error(`Parser errors: ${StructurizrParser.errors.length}`);
            StructurizrParser.errors.forEach((err, i) => {
                console.error(
                    `[${i + 1}] ${err.message} ` +
                    `(token: ${err.token?.image ?? "N/A"}, ` +
                    `line: ${err.token?.startLine ?? "?"}, ` +
                    `col: ${err.token?.startColumn ?? "?"})`
                );
            });
        }
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });

    test('Can parse big bank dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/big-bank-plc.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        if (StructurizrParser.errors.length > 0) {
            console.log(StructurizrParser.errors);
        };
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
    });
});