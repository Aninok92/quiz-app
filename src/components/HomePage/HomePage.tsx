import PageTitle from "../PageTitle/PageTitle";
import Container from "../Container/Container";

const HomePage = () => {
  return (
    <Container>
      <PageTitle title={'Добро пожаловать на главную страницу!'} />
      <p className="text-lg">Здесь вы можете добавить описание вашего приложения или предоставить ссылки на другие разделы.</p>
    </Container>
  );
};

export default HomePage;