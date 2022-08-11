import Container from './Container';

export default function BlogLayout({ children, data }) {
  const postImage = data.properties['Cover'].files[0];
  const postImageUrl =
    postImage?.type === 'file' ? postImage.file.url : postImage?.external.url;

  return (
    <Container
      title={data.properties.Title.title[0].plain_text}
      description={data.properties.slug.rich_text[0].plain_text}
      date={new Date(data.properties.Date.date.start)}
      type="article"
      image={postImageUrl}
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        {children}
      </article>
    </Container>
  );
}
