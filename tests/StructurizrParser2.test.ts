import * as fsPromise from 'fs/promises';
import { createSyntaxDiagramsCode } from 'chevrotain';
import { describe, test, expect } from '@jest/globals';
import { StructurizrParser2 } from '../src/StructurizrParser2';

describe('Testing StructurizrParser', () => {
    test('Can generate syntax diagrams', async () => {
        const targetDir = './tests/diagrams2/';
        const serializedGrammar = StructurizrParser2.getSerializedGastProductions();
        const htmlText = createSyntaxDiagramsCode(serializedGrammar);
        await fsPromise.writeFile(targetDir + "generated_syntax_diagrams.html", htmlText);
        expect(htmlText.length).toBeGreaterThan(0);
    });
});