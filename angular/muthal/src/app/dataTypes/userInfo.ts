import { Time } from "@angular/common";
import { IRelativeInfo } from "./RelativeInfo";

export interface IUserInfo {
    Id: number;
    RegistrationDate: Date;
    Name: string;
    Sex: string;
    DateOfBirth: Date;
    Height: number;
    Complexion: string;
    EducationOrQualification: string;
    Star: string;
    Pdm: string;
    Dhosham: boolean;
    DhoshamType: string;
    BirthTime: Time;
    BirthPlace: string;
    Occupation: string;
    Designation: string;
    CompanyName: string;
    Salary: number;
    PhoneNumber: string;
    Brothers: number;
    BrothersMarried: boolean;
    Sisters: number;
    SistersMarried: boolean;
    DescriptionOfReq: string;
    CommunityName: string;
    Address: string;
    Father: IRelativeInfo[];
    Mother: IRelativeInfo[];
    Guardian: IRelativeInfo[];
}

export class UserInfo {
    Id: number;
    RegistrationDate: Date;
    Name: string;
    Sex: string;
    DateOfBirth: Date;
    Height: number;
    Complexion: string;
    EducationOrQualification: string;
    Star: string;
    Pdm: string;
    Dhosham: boolean;
    DhoshamType: string;
    BirthTime: Time;
    BirthPlace: string;
    Occupation: string;
    Designation: string;
    CompanyName: string;
    Salary: number;
    PhoneNumber: string;
    Brothers: number;
    BrothersMarried: boolean;
    Sisters: number;
    SistersMarried: boolean;
    DescriptionOfReq: string;
    CommunityName: string;
    Address: string;
    Father: IRelativeInfo[];
    Mother: IRelativeInfo[];
    Guardian: IRelativeInfo[];

    /**
     *
     */
    constructor(
        public registrationDate: Date,
        public name: string,
        public sex: string,
        public dob: Date,
        public height: number,
        public complexion: string,
        public educationOrQualtification: string,
        public star: string,
        public pdm: string,
        public dhosham: boolean,
        public dhoshamType: string,
        public birthTime: Time,
        public birthPlace: string,
        public occupation: string,
        public designation: string,
        public companyName: string,
        public salary: number,
        public phoneNumber: string,
        public brothers: number,
        public brothersMarried: boolean,
        public sisters: number,
        public sistersMarried: boolean,
        public descriptionOfReq: string,
        public communityName: string,
        public address: string,
        public father: string,
        public mother: string,
        public guardian: string,

    ) {


    }
}