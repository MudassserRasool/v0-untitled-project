const APP_ROUTES = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
  },
  WELCOME: '/welcome',
  ONBOARDING: (pageNumber: number) => `/onboarding/${pageNumber}`,
};

export default APP_ROUTES;
