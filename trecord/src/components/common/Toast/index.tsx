import React, { useState, ReactNode } from 'react';
import * as S from './style';
interface ToastContextProps {
  showToast: (message: string, duration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextProps | undefined>(
  undefined,
);

interface ToastProps {
  message: string;
  duration: number;
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (message: string, duration: number = 2000) => {
    setToast({ message, duration });
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <S.Layout>
          <div className={`toast ${toast ? '' : 'exiting'}`}>
            {toast.message}
          </div>
        </S.Layout>
      )}
    </ToastContext.Provider>
  );
};
