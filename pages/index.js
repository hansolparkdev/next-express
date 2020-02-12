import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Park" />
      <PostLink title="Han" />
      <PostLink title="Sol" />
    </ul>
  </Layout>
);

export default Index;
