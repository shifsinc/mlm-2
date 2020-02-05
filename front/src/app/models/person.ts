import { job, profile, contact } from "./schema";

export class person {
    _id: String;
    user: String;
    profile: profile;
    contact?: contact;
    associated?: job[];
    estado: Number;
}