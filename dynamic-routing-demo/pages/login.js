/**
 * Demo: useRouter to route on another url
 */
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const onRedirect = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <>
      <button onClick={ onRedirect } type='button'>
        Redirect to Dashboard Page
      </button>
    </>
  );
};

export default Login;
