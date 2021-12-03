import HomePage from "@template/HomePage";
import Default from "@layout/Default";

export default function App(props) {
  return (
    <>
      <Default>
        <HomePage />
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
