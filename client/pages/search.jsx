import SearchPage from "@template/SearchPage";
import Default from "@layout/Default";

export default function Search() {
  return (
    <>
      <Default>
        <SearchPage />
      </Default>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
