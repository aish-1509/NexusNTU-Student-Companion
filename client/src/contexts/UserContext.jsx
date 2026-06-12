// UserContext.js

import { createContext, useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';

/**
 * Creates a context for user information and authentication status.
 * @type {React.Context}
 */
export const UserContext = createContext();

/**
 * Provides the user context to child components and manages the user's authentication state.
 * @function UserProvider
 * @param {object} props - The props object.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {React.ReactElement} - The provider component for the UserContext.
 */
export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [token,setToken]=useState( localStorage.getItem('auth'));

  /**
   * Fetches the user's profile from the server using the stored authentication token.
   * Sets the user profile on successful fetch or sets an error on failure.
   */
  const fetchUserProfile = useCallback(async () => {
    if (!token || token === "null") {
      setError('No token found. User is probably not logged in.');
      return;
    }

    try {
      const response = await axios.get('/api/v1/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setUserProfile(response.data);
      setError('');
    } catch (error) {
      setError(`Error fetching user profile: ${error}`);
    }
  }, [token]);

  /**
   * Checks authentication status and fetches the profile when a token is present.
   */
  useEffect(() => {
    const hasToken = Boolean(token && token !== "null");
    setIsLoggedIn(hasToken);

    if (!hasToken) {
      setUserProfile(null);
      return;
    }

    fetchUserProfile();
  }, [token, fetchUserProfile]);

      /**
   * Updates the authentication token stored in local storage and state.
   * @param {string} newToken - The new token to update.
   */
  const updateToken = (newToken) => {
    localStorage.setItem('auth', newToken);
    setToken(localStorage.getItem('auth'));
  };

  return (
    <UserContext.Provider value={{ userProfile, isLoggedIn, error, fetchUserProfile,updateToken }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Custom hook to use the user context.
 * @returns {object} The user context with user profile, authentication status, and associated actions.
 */
export const useUser = () => useContext(UserContext);
