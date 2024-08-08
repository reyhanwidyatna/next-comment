import { usePathname } from 'next/navigation';
import Navbar from '../ui/navbar';

const CustomNavbar = (WrappedComponent) => {
  return function CustomNavbar(props) {
    const pathname = usePathname();
    const currentPath = pathname !== '/login';

    return (
      <>
        {currentPath && <Navbar />}
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default CustomNavbar;
