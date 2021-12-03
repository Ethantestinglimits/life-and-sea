import SearchTemplate from "@template/SearchTemplate";
import SearchLayout from "@layout/SearchLayout";

export default function App(props) {
    return (
        <>
            <SearchLayout>
                <SearchTemplate />
            </SearchLayout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
