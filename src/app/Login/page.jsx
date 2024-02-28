"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = () => {
    const router=useRouter()
    const page=(item)=>{
      router.push(item)
    }
  return (
    <>
      <h1>Login</h1>
      <div>
        <button onClick={()=>page("/")} className="bg-blue-600 text-yellow-200 p-5 font-semibold text-2xl text-center align-middle">
          on click
        </button>
      </div>

       <Link href="/Login/aboutteaher">
        <button >click Teaher</button>
      </Link>
    </>
  );
};

export default Login;
