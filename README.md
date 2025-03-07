# structurizr-parser
> [!NOTE]
> This is code contributed to Elsevier Open Source by Gerry Rohling. The original repository is at [gerry-rohling/structurizr-parser](https://github.com/gerry-rohling/structurizr-parser/tree/main).

Parses Structurizr DSL files to support workspace population, code validation and other uses

> This is BETA software and should be used with caution as it is not feature complete or fully tested

The library is broken up into three parts. Each should be executed in turn depending on the outcome you are expecting.

## Lexer

This converts the input file into a set of tokens. Errors in tokenization are emitted alongside the tokens found.

```typescript
let lexingResult = StructurizrLexer.tokenize(dsl);
```

- `lexingResult.errors` is an array of errors
- `lexingResult.tokens` is an array of discovered tokens

## Parser

This takes the output of the Lexer (the set of tokens) and applies the structurizr DSL rules. This will result in a syntax tree that represents what was extracted from the tokens using the structurizr grammer asa guide. Any errors are also emitted.

```typescript
StructurizrParser.input = lexingResult.tokens;
const cst = StructurizrParser.workspaceWrapper();
```

- `StructurizrParser.errors` is an array of errors
- `cst` is the syntax tree generated by the parser

## Interpreter

This last step will take the syntax tree produced by the Parser and execute some operations to produce a given desired outcome. At present the Structurizr Interpreter tries to convert the syntax tree into the Structurizr JSON object. This interpreter may be renamed in the future to StructurizrInterpreter to be consistent with the model.

### Produce a structurizr JSON object

```typescript
const wspace = RawInterpreter.visit(cst) as Workspace;
```
### Future Work
It is for future work to see if we will continue to support multiple interpreters designed to produce final outputs like the Structurizr JSON Object, or an MX file or a PlantUML file or whatever.