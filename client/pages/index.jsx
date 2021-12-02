import HomePage from "@template/HomePage";
import Default from "@layout/Default";

export default function App(props) {
  return (
    <>
      <Default>
        <HomePage data={props} />
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
