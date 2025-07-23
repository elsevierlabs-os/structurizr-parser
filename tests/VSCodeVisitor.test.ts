import * as fsPromise from 'fs/promises';
import { StructurizrLexer } from '../src/Lexer';
import { StructurizrParser } from '../src/Parser';
import { VSCodeVisitor } from '../src/VSCodeVisitor';

describe('Testing VSCodeVisitor', () => {
    test('Can VSCode interpret getting started dsl', async () => {
        var dsl = await fsPromise.readFile('./tests/data/getting-started.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
        VSCodeVisitor.visit(cst);
        var results = VSCodeVisitor.c4result;
        expect(results).toBeDefined();
        expect(results.length).toBe(1);
    });

    test('Can VSCode interpret big bank file', async () => {
        var dsl = await fsPromise.readFile('./tests/data/big-bank-plc.dsl', 'utf-8');
        const lexingResult = StructurizrLexer.tokenize(dsl);
        expect(lexingResult.errors.length).toBe(0);
        StructurizrParser.input = lexingResult.tokens;
        const cst = StructurizrParser.workspaceWrapper();
        expect(StructurizrParser.errors.length).toBe(0);
        expect(cst.name).toBe("workspaceWrapper");
        VSCodeVisitor.visit(cst);
        var results = VSCodeVisitor.c4result;
        expect(results).toBeDefined();
        expect(results.length).toBe(15);
    });
});