import { useEffect, createContext, useState, ReactNode } from 'react';

interface RealTimeProps {
  isNotification: boolean;
  handleIsActiveNotification: () => void;
}
export const RealTimeContext = createContext<RealTimeProps | null>(null);

export const RealTimeNotificationProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const getToken = localStorage.getItem('acessToken');
  const [isNotification, setIsNotification] = useState<boolean>(false);
  useEffect(() => {
    const sse = new EventSource(
      `${
        import.meta.env.VITE_BASE_URL
      }/api/v1/notifications/subscribe?token=${getToken}`,
      {
        withCredentials: true,
      },
    );
    sse.addEventListener('notification', function (event) {
      if (event.data !== 'Connection completed') {
        setIsNotification(true);
      }
    });
    sse.onerror = async (e) => {
      console.log(e);
    };
  }, []);
  const handleIsActiveNotification = () => {
    setIsNotification(false);
  };
  return (
    <RealTimeContext.Provider
      value={{ isNotification, handleIsActiveNotification }}
    >
      {children}
    </RealTimeContext.Provider>
  );
};
