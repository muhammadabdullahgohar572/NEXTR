"use client"

const Student = ({params}) => {
    console.log(params)
  return (
    <>
      <div className="text-center">
       <h1>hi{params.student}</h1>
      </div>
    </>
  );
};

export default Student;