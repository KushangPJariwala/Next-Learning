
export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
        <>
        <h3>doc header</h3>
        <div>{children}</div>
        <h3>doc footer</h3>
      </>
  );
}
