const Dashboard = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">Карточка 1</h2>
            <p>Содержимое карточки 1</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">Карточка 2</h2>
            <p>Содержимое карточки 2</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2">Карточка 3</h2>
            <p>Содержимое карточки 3</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;