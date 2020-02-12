// import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';

const Hello = () => (
  <div>
    <a>글로벌 스타일 테스트</a>
  </div>
);

const Post = (props) => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
    {props.show.image ? <img src={props.show.image.medium} alt="" /> : null}
    <div className="global_test">
      <Hello />
    </div>
    <style jsx global>
      {`
        .global_test a{
          color:red;
        }
        .global_test a:hover{
          color:blue;
        }
      `}
    </style>
  </Layout>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
// const Content = ({ router }) => (
//   <div>
//     <h1>{router.query.id}</h1>
//     <p>This is the blog post content</p>
//   </div>
// );

// export default () => {
//   const router = useRouter();
//   return (
//     <Layout>
//       <Content router={router} />
//     </Layout>
//   );
// };
