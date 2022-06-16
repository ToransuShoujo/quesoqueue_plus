import { Userstate } from "tmi.js";

export type Command = (sender: Userstate, args: string[]) => string;

export interface commandMapping {
    [key: string]: Command
}