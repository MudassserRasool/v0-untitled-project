const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_BACKEND_API_URL || 'https://api.example.com';

const ENVIRONMENTS = {
  BACKEND_API_URL: BACKEND_API_URL,
};

export default ENVIRONMENTS;
