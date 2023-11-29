'use client';
export default function Student({ params }) {
  console.log(params);
  return (
    <>
      <h1>Student List name is: {params.student}</h1>
    </>
  );
}
