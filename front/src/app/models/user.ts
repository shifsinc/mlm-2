import { job } from "./schema";

export class user {
    _id: String;
    ci: String;
    email: String;
    phone: String;
    password: String;
    job?: job[];
    estado: Number;
}