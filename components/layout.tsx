interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "white" }}>
      <div className="sticky top-0 w-full"></div>
      
      <div>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
