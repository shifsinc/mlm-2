import { job, contact, profile } from 'src/app/models/schema';

export class invitation {
    _id: String;
    codeInvitation: String;
    profile?: profile;
    contact?: contact;
    job: job;
    password: String;
    date: Date;
    estado: Number;
}