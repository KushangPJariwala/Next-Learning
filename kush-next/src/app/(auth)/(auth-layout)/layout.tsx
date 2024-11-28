
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <>
        <h3>auth header</h3>
        <div>{children}</div>
        <h3>auth footer</h3>
      </>
  );
}
