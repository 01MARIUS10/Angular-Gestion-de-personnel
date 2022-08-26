import { User } from "./user";

export class responseTab {
    message !: string ;
    data !: User[] ;
}

export class responseVal {
    message !: string ;
    data !: User ;
}