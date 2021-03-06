import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const Index = (props) => (
  <Layout>
    <h1>Batman TV show</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        h1, a{
          font-family: "Arial";
        }
        ul{
          padding:0
        }
        li{
          list-style: none;
        }
      `}
    </style>
  </Layout>
);
Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Index;
