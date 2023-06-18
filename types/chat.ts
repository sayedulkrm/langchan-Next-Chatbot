import { Document } from "langchain/document";

export type Message = {
    type: "apiMessage" | "userMessage";
    message: string;
    isStreaming?: boolean;
    sourceDocs?: Document[];
    time?: number | string;
    day?: number | string;
};
