import Layout from "../components/Layout";
import { getCampusesFromDb } from "../db";

export default function Campuses({ campuses, date, time }) {
    return (
        <Layout pageTitle="Campuses">
            <p>Page last updated on : {date} at {time}</p>
            <h1>Our Campuses</h1>
            {campuses.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
            })}
        </Layout>
    );
}

export async function getStaticProps() {
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString()
    const campuses = await getCampusesFromDb();
    return {
        props: {
            campuses,
            date,
            time
        }
    };
}
