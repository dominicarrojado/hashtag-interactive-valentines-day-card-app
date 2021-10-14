import { createContext, Dispatch, SetStateAction } from 'react';
import { Cover } from './types';

export const StoreContext = createContext(
  {} as {
    cover: Cover;
    cardDate: Date;
    cardTo: string;
    cardFrom: string;
    message: string;
    isCardOwner: boolean;
    isCardOpen: boolean;
    isModalOpen: boolean;
    setCover: Dispatch<SetStateAction<Cover>>;
    setCardTo: Dispatch<SetStateAction<string>>;
    setCardFrom: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
    setIsCardOwner: Dispatch<SetStateAction<boolean>>;
    setIsCardOpen: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  }
);
