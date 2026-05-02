import { StructurizrParser } from '../src/Parser';

export function logParserErrors() {
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
