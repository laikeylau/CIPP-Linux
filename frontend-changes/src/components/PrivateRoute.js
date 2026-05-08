/**
 * PrivateRoute - Modified for Local Authentication (Linux deployment)
 * 
 * No Azure AD / SWA dependency.
 * Uses local auth context for authentication.
 */

import { useLocalAuth } from "../contexts/local-auth-context";
import { ApiGetCall } from "../api/ApiCall.jsx";
import LoadingPage from "../pages/loading.js";
import ApiOfflinePage from "../pages/api-offline.js";
import LoginPage from "../pages/login.js";

export const PrivateRoute = ({ children, routeType }) => {
  const { isAuthenticated, isLoading: authLoading } = useLocalAuth();

  // Call /api/me to get CIPP roles and permissions
  const apiRoles = ApiGetCall({
    url: "/api/me",
    queryKey: "authmecipp",
    retry: 2,
    waiting: isAuthenticated,
  });

  // Show loading while checking auth or loading roles
  if (authLoading || (isAuthenticated && apiRoles.isLoading)) {
    return <LoadingPage />;
  }

  // Check if API is offline
  if (
    apiRoles?.error?.response?.status === 404 ||
    apiRoles?.error?.response?.status === 502 ||
    apiRoles?.error?.response?.status === 503 ||
    (apiRoles?.isSuccess && !apiRoles?.data)
  ) {
    return <ApiOfflinePage />;
  }

  // Not authenticated -> show login page
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Check API returned an auth error (token expired/invalid)
  if (apiRoles?.error?.response?.status === 401) {
    return <LoginPage />;
  }
  if (apiRoles?.error?.response?.status === 403) {
    return <LoginPage />;
  }

  // Get roles from API response
  let roles = null;
  if (null !== apiRoles?.data?.clientPrincipal && undefined !== apiRoles?.data) {
    roles = apiRoles?.data?.clientPrincipal?.userRoles ?? [];
  } else if (apiRoles?.isSuccess && (null === apiRoles?.data?.clientPrincipal || undefined === apiRoles?.data)) {
    return <LoginPage />;
  }

  if (null === roles) {
    return <LoginPage />;
  }

  const blockedRoles = ["anonymous", "authenticated"];
  const userRoles = roles?.filter((role) => !blockedRoles.includes(role)) ?? [];
  const isUserAuthenticated = userRoles.length > 0 && !apiRoles?.error;
  const isAdmin = roles?.includes("admin") || roles?.includes("superadmin");

  if (routeType === "admin" && !isAdmin) {
    return <LoginPage />;
  }

  if (!isUserAuthenticated) {
    return <LoginPage />;
  }

  return children;
};
