

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="flex h-full w-full items-center justify-center rounded-lg text-white p-2">

          if you are a customer and you just want to see what did I do,
          you can use this email and password to login<br/>
          boltojordu@gufum.com<br/>
          Customer@123
          </div>
         
         
        </div>
        {children}
      </div>
    </main>
  );
}
