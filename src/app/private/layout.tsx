interface ILoginLayoutProps {
    children: React.ReactNode;
}

const LoginLayout = ({ children }: ILoginLayoutProps) => {
    return (
      <main className="grid place-items-center min-w-full min-h-screen bg-white">
        {children}
      </main>
    );
  };

export default LoginLayout;