import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { getCardInfo } from '../lib/card';
import { StoreContext } from '../lib/store';
import Layout from '../components/layout';
import CardForm from '../components/cardForm';
import ModalMessages from '../components/modalMessages';
import CardCover from '../components/cardCover';
import CardInfo from '../components/cardInfo';
import { Cover } from '../lib/types';
import { CARD_INFO_QUERY_KEY, COVERS, COVER_DEFAULT } from '../lib/constants';

export function Home() {
  const router = useRouter();
  const queryKey = router.query[CARD_INFO_QUERY_KEY];
  const cardInfo = useMemo(() => {
    const info = getCardInfo(queryKey);

    if (info) {
      return {
        isValid: true,
        cover: COVERS.find((item) => item.name === info.c) as Cover,
        cardDate: new Date(info.d),
        cardTo: info.t,
        cardFrom: info.f,
        message: info.m,
      };
    } else {
      return {
        isValid: false,
        cover: COVER_DEFAULT,
        cardTo: '',
        cardFrom: '',
        cardDate: new Date(),
        message: '',
      };
    }
  }, [queryKey]);
  const [isMounted, setIsMounted] = useState(false);
  const [cover, setCover] = useState(() => cardInfo.cover);
  const [cardTo, setCardTo] = useState(() => cardInfo.cardTo);
  const [cardFrom, setCardFrom] = useState(() => cardInfo.cardFrom);
  const [cardDate, setCardDate] = useState(() => cardInfo.cardDate);
  const [message, setMessage] = useState(() => cardInfo.message);
  const [isCardOwner, setIsCardOwner] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const storeValues = {
    cover,
    cardTo,
    cardFrom,
    cardDate,
    message,
    isCardOwner,
    isCardOpen,
    isModalOpen,
    setCover,
    setCardTo,
    setCardFrom,
    setMessage,
    setIsCardOwner,
    setIsCardOpen,
    setIsModalOpen,
  };

  useEffect(() => {
    setCover(cardInfo.cover);
    setCardTo(cardInfo.cardTo);
    setCardFrom(cardInfo.cardFrom);
    setCardDate(cardInfo.cardDate);
    setMessage(cardInfo.message);

    const timeout = setTimeout(() => setIsMounted(true), 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [cardInfo]);

  return (
    <StoreContext.Provider value={storeValues}>
      {isMounted && (
        <Layout>
          {cardInfo.isValid ? (
            <>
              <CardCover />
              <CardInfo />
            </>
          ) : (
            <>
              <CardForm />
              <ModalMessages />
            </>
          )}
        </Layout>
      )}
    </StoreContext.Provider>
  );
}

export default Home;
