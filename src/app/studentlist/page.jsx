import Link from "next/link";

const List = () => {
  return (
    <>
      <div className="text-center">
        <ul>
        <Link href="/studentlist/abdullah">  <li className="text-3xl font-semibold">abdullah</li></Link>
        <Link href="/studentlist/ali">  <li className="text-3xl font-semibold">ali</li></Link>
        <Link href="/studentlist/raza">  <li className="text-3xl font-semibold">raza</li></Link>
        <Link href="/studentlist/umer">  <li className="text-3xl font-semibold">umer</li></Link>
        </ul>
      </div>
    </>
  );
};

export default List;
