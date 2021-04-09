interface Content {
    Notification : string,
    Description : string,
    Status : boolean
} 

export interface RatingNumber {
    RatingNumbers: number[]
}

export const FakeData : Content[] =[
    {
        Notification : "test",
        Description : "test",
        Status : true
    },
    {
        Notification : "test",
        Description : "test",
        Status : false
    },
];

export const Number = [1,2,3,4,5,6,7,8]
