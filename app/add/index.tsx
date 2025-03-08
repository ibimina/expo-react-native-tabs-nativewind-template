import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import AmountIndex from '@/components/enteramount';

const SendMoneyScreen = () => {
  const [amount, setAmount] = useState('');
  const router = useRouter();

  const handleNumberPress = (number: number) => {
    setAmount((prev) => prev + number);
  };

  const handleDelete = () => {
    setAmount((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    router.push('/add/success');
  };

  return (
    <AmountIndex
      buttonText="Add money"
      amount={amount}
      handleNumberPress={handleNumberPress}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
    />
  );
};

export default SendMoneyScreen;
