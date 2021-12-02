interface IReservation {
    _id?: string
    name: string,
    phone: string,
    numberOfPeople: number,
    smoking: boolean,
    dateTime: string,
    specialRequests: string,
    createdAt?: string,
    updatedAt?: string
}

export default IReservation

export interface IDishes {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: IComments[]
}

interface IComments {
    id: number,
    rating: number,
    comment: string,
    author: string,
    date: string
}
