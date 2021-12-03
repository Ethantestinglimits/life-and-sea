import ProfileTemplate from "@template/ProfileTemplate";
import Default from "@layout/Default";

export default function Profile() {
    return (
        <Default>
            <ProfileTemplate/>
        </Default>
    );
}

export async function getStaticProps({params}) {
    // retrieve data from the api
    // TODO: NOT YET IMPLEMENTED
    //const res = await axios.get(`localhost:3000/api/search?p=${params.id}`)
    //console.log(res);
    return {props: {id: "1234"}}
}

export async function getStaticPaths() {
    return {
        paths: genAllCodes(),
        fallback: false,
    };
}

function genAllCodes() {
    let arr = []
    for (let i = 0; i < 999999; i++) {
        arr.push({params: {id: i.toString()}})
    }
    return arr
}