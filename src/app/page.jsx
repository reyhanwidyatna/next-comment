import CommentsTable from '@/components/pages/table-comment';

const getCommentData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (!response.ok) {
    throw new Error("failed to fetch comment")
  }
  return response.json();
};

const Home = async () => {
  const data = await getCommentData()
  return <CommentsTable data={data} />
}

export default Home;
