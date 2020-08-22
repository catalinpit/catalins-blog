import Layout from '../components/layout'
import { getPostsIDs, getPostData } from '../lib/posts'

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.postID}
            <br />
            {postData.title}
            <br />
            {postData.date}
            <br />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPostsIDs()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.postID)

    return {
        props: {
            postData
        }
    }
}