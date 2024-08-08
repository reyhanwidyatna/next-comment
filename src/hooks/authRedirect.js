import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem('username');
    
    if (!username && router.pathname !== '/login') {
      router.push('/login');
    }
  }, [router]);
};

export default useAuthRedirect;
