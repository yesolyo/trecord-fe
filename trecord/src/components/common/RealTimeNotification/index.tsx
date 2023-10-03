import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import { useEffect } from 'react';

export const RealTimeNotification = () => {
  const getToken = localStorage.getItem('acessToken');
  const EventSource = EventSourcePolyfill || NativeEventSource;
  useEffect(() => {
    const sse = new EventSource(
      `${
        import.meta.env.VITE_BASE_URL
      }/api/v1/notifications/subscribe?token=${getToken}`,
      {
        heartbeatTimeout: 120000,
        withCredentials: true,
      },
    );
    sse.onopen = async (e) => {
      console.log('sse open', e);
    };
    sse.onmessage = async (e) => {
      console.log('sse message', e);
    };
    sse.onerror = async (e) => {
      console.log('에러입니다', e);
    };
  }, []);
  return <div>provider</div>;
};
