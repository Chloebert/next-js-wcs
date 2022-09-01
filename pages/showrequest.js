import getRawBody from "raw-body";
import Layout from "../components/Layout";

export default function ShowRequest({body, headers, query, lastUpdated}) {
    return (
        <Layout pageTitle="Show Request">
            <p>This page was last updated on : { lastUpdated }</p>
            <pre>{JSON.stringify({body}, null, 1)}</pre>
            <pre>{JSON.stringify({headers}, null, 1)}</pre>
            <pre>{JSON.stringify({query}, null, 1)}</pre>
        </Layout>
    );
}

export async function getServerSideProps ({ req, query }) {
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString()
    const lastUpdated = date + " at " + time;
        let body = {};
    const headers = req.headers;
    if (req.method === "POST") {
        body = await getRawBody(req);
    }

    return { props: {
        body,
            headers,
            query,
            lastUpdated
        } };
};
