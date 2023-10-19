import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

const useCurrentUser = () => {
  const { loggedIn } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loggedIn) {
      // Fetch user data from API or wherever you store user information
      // For example:
      // const user = await api.getUser();
      // setUser(user);
      setUser({ id: 1, name: 'John Doe' }); // Mock user data
    } else {
      setUser(null);
    }
  }, [loggedIn]);

  return user;
};

export default useCurrentUser;
