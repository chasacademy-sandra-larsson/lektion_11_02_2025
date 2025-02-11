import Link from "next/link"
// Använda alias @ - absolut sökväg från 
import LoginForm from "@/app/_components/LoginForm";

function SignInPage() {


    return (
        <>
        <h1>Login Form</h1>
        <LoginForm/>
        <p> Är du inte inloggad? </p>
        <Link href="/signup">Registrera dig</Link>
         </>

    )

}


export default SignInPage;

