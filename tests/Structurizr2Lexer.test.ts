import { describe, test, expect } from '@jest/globals';
import * as fsPromise from 'fs/promises';
import { StructurizrLexer2 } from '../src/StructurizrLexer2';
import { LexerVisualizer } from '../src/LexerVisualizer';
import { formatLexingErrors } from '../src/formatLexingErrors';

describe('Testing StructurizrLexer2', () => {
    test('Can scan getting started file', async() => {
        var dsl = await fsPromise.readFile('./tests/data/getting-started.dsl', 'utf-8');
        let lexingResult = StructurizrLexer2.tokenize(dsl);
        if (lexingResult){
            let viz = new LexerVisualizer("getting-started.dsl");
            let htmlText = viz.createVisual(lexingResult);
            await fsPromise.writeFile("./tests/diagrams2/getting-started.html", htmlText);
        }
        expect(lexingResult).toBeDefined();
        if (lexingResult.errors.length > 0) {
            console.error(formatLexingErrors(lexingResult.errors));
        }
        expect(lexingResult.errors.length).toBe(0);
    });
    test('Can scan random Elsevier file', async() => {
        var dsl = await fsPromise.readFile('./tests/data/elsevier.dsl', 'utf-8');
        let lexingResult = StructurizrLexer2.tokenize(dsl);
        if (lexingResult){
            let viz = new LexerVisualizer("elsevier.dsl");
            let htmlText = viz.createVisual(lexingResult);
            await fsPromise.writeFile("./tests/diagrams2/elsevier.html", htmlText);
        }
        expect(lexingResult).toBeDefined();
        if (lexingResult.errors.length > 0) {
            console.error(formatLexingErrors(lexingResult.errors));
        }        
        expect(lexingResult.errors.length).toBe(0);
    });
    test('Can scan big bank file', async() => {
        var dsl = await fsPromise.readFile('./tests/data/big-bank-plc.dsl', 'utf-8');
        let lexingResult = StructurizrLexer2.tokenize(dsl);
        if (lexingResult){
            let viz = new LexerVisualizer("big-bank-plc.dsl");
            let htmlText = viz.createVisual(lexingResult);
            await fsPromise.writeFile("./tests/diagrams2/big-bank-plc.html", htmlText);
        }
        expect(lexingResult).toBeDefined();
        if (lexingResult.errors.length > 0) {
            console.error(formatLexingErrors(lexingResult.errors));
        }
        expect(lexingResult.errors.length).toBe(0);
    });      
});