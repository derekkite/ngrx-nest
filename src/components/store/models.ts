export interface Action {
    type: string;
    payload?: any;
}

export interface User {
    email: string;
    name: string;
    roles?: string[];
    datecreated?: Date;
}

export interface ConnectionState {
    user: User;
    role?: string[];
    token;
    isLoggedIn: boolean;
    isPending: boolean;
    networkStatus?: string;
    serverStatus?: string;
    databaseStatus?: string;
    userStatus?: string;
    networkStatusText?: string;
    serverStatusText?: string;
    databaseStatusText?: string;
    userStatusText?: string;
    applicationStatus?: string;
}