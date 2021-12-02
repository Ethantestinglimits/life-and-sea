import AuthPage from "@template/AuthPage";

const Auth = ({}) => {
  return <AuthPage />;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Auth;
