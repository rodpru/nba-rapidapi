import Header from "../Components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="py-10 min-h-[100vh] max-w-2xl mx-auto">
      <Header />
      <div className="mt-40">{children}</div>
    </div>
  );
};

export default Layout;
