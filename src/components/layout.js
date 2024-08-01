const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl">Interview Management System</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-4">
        {children}
      </main>
      <footer className="bg-blue-600 text-white py-4 mt-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Interview System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
