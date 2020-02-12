import Layout from '../components/Layout';

const Content = ({ url }) => (
  <div>
    <h1>{url.query.title}</h1>
    <p>This is the blog post content</p>
  </div>
);

export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
