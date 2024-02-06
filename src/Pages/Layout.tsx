import Header from "../Components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="py-10 min-h-[100vh]">
      <Header />
      <div className="mt-40">{children}</div>
    </div>
  );
};

export default Layout;
