import { createContext, Dispatch, SetStateAction } from 'react';
import { Cover } from './types';

export const StoreContext = createContext(
  {} as {
    cover: Cover;
    cardDate: Date;
    cardTo: string;
    cardFrom: string;
    message: string;
    isCardOpen: boolean;
    isModalOpen: boolean;
    setCover: Dispatch<SetStateAction<Cover>>;
    setCardTo: Dispatch<SetStateAction<string>>;
    setCardFrom: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
    setIsCardOpen: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  }
);
