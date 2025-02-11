



function SignUpLayout({children}: {children: React.ReactNode}) {

   return (
      <>
      <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
         {children}
         </div>   
      </div>
      </>
   )
}

export default SignUpLayout