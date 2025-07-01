export interface ICard {
  id: string;
  name: string;
  avatar: string;
  cell: string;
  phone: string;
  favorite: boolean;
}

export type StackParamList = {
  Contacts: undefined;
  Details: {user: ICard};
  Favorite: undefined;
};
