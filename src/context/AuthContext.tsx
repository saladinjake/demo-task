import React, { createContext, useState, useEffect, useCallback } from "react";
import { getUserProfile } from "../api/services/User";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext({
  user: {},
  token: null,
  loading: false,
  login: (token) => {},
  logout: () => {},
  refreshProfile: () => {},
});
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const profileMutation = useQuery(
    ["get_customer_information_by_customer_id"],
    () => getUserProfile(),
    {
      enabled: true,
      onSuccess(response) {
        setUserProfile(response.data);
        setToken(response.data); //demo only
      },
    },
  );

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user: userProfile,
        token,
        loading,
        login,
        logout,
        refreshProfile: profileMutation.refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
