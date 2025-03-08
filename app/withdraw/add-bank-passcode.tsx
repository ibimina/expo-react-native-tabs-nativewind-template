import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import PasscodeIndex from '@/components/passcode';

const PasscodeScreen = () => {
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const router = useRouter();

  const handleNumberPress = (number: number) => {
    if (isConfirming) {
      setConfirmPasscode((prev) => (prev.length < 6 ? prev + number : prev));
    } else {
      setPasscode((prev) => (prev.length < 6 ? prev + number : prev));
    }
  };

  const handleDelete = () => {
    if (isConfirming) {
      setConfirmPasscode((prev) => prev.slice(0, -1));
    } else {
      setPasscode((prev) => prev.slice(0, -1));
    }
  };

  const handleSubmit = () => {
    router.push('./withdraw-transaction-details');

    if (passcode.length === 6 && !isConfirming) {
      setIsConfirming(true);
    } else if (confirmPasscode.length === 6) {
      if (passcode === confirmPasscode) {
        alert('Passcode confirmed!');
        router.push('/');
        // Handle passcode confirmation logic here
      } else {
        alert('Passcodes do not match. Try again.');
        setPasscode('');
        setConfirmPasscode('');
        setIsConfirming(false);
        router.push('/success');
      }
    }
  };

  return (
    <PasscodeIndex
      buttonText={isConfirming ? 'Confirm passcode' : 'Set passcode'}
      passcode={passcode}
      handleNumberPress={handleNumberPress}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
    />
  );
};

export default PasscodeScreen;
