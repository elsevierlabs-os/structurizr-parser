import { ILexingError } from "chevrotain";

const formatLocation = (error: ILexingError): string => {
    const parts: string[] = [];

    if (error.line !== undefined) {
        parts.push(`line ${error.line}`);
    }

    if (error.column !== undefined) {
        parts.push(`column ${error.column}`);
    }

    if (error.offset !== undefined) {
        parts.push(`offset ${error.offset}`);
    }

    if (error.length !== undefined) {
        parts.push(`length ${error.length}`);
    }

    return parts.length > 0 ? ` (${parts.join(", ")})` : "";
};

export const formatLexingErrors = (errors: ILexingError[]): string => {
    if (errors.length === 0) {
        return "No lexing errors.";
    }

    return errors
        .map((error, index) => `${index + 1}. ${error.message}${formatLocation(error)}`)
        .join("\n");
};