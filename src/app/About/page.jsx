// "use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  // const raouter = useRouter();
  return (
    <>
      <h1>About</h1>
      <Link href="/About/aboutcollege">
        <button>click college</button>
      </Link>
      <br />
      <Link href="/About/aboutstudent">
        <button>click student</button>
      </Link>
      <br />
    </>
  );
};

export default About;
