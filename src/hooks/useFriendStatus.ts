import { useState, useEffect } from 'react';

export default function useFriendStatus() {
  const [isOnline, setIsOnline] = useState<string>('offline');

  function handleStatusChange(status: string) {
    setIsOnline(status);
  }

  useEffect(() => {
    handleStatusChange('online');

    return () => {
      handleStatusChange('offline');
    };
  });

  return isOnline;
}
