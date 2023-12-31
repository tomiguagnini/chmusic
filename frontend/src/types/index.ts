
export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
};
export type Song = {
    ID: number;
    Title: string;
    Artist: string;
    Price: string;
    Image: string;
    Listening: string;
    createdAt: string;
    updatedAt: string;
};

export type SimpleSong = {
    Title: string;
    Artist: string;
    Price: string;
    Image: string;
    File: string;
    Listening: string;
};
export type User = {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone: string;
    Dni: string;
};

export type Preference = {
    user: User,
    items: Song[];
};

export type Purchase ={
    ID: number,
    PurchaseDate: string,
    TotalPrice: number,
    State: string,
    createdAt: string,
    updatedAt: string,
    UserID: number,
    Songs: Song[]
    User: User
}

export type Login = {
  Email:string,
  Password:string
}



