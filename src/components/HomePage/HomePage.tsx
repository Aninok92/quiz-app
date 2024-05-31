import PageTitle from "../PageTitle/PageTitle";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <PageTitle title={'Добро пожаловать на главную страницу!'} />
      <p className="text-lg">Здесь вы можете добавить описание вашего приложения или предоставить ссылки на другие разделы.</p>
    </div>
  );
};

export default HomePage;