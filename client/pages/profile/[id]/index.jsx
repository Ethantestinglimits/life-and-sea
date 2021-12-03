import { useRouter } from 'next/router'
import axios from "axios";

export default function Profile() {
    const router = useRouter()
    const { pid } = router.query

    return <p>Post: {pid}</p>
}

export async function getStaticPaths() {
    return {
        paths: generateAccountList(),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { id } = params
    const res = await axios.get(`/api/search?q=${id}`)
    const post = res.data

    return {
        props: {
            post
        }
    }
}

// Flemme de faire mieux
function generateAccountList() {
    let arr = []
    for(let i = 0; i < 999999; i++) {
        arr.push({
            params: {
                id: i.toString()
            }
        })
    }
    return arr;
}