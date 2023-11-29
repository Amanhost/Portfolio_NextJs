import Link from 'next/link';

export default function studentlist() {
  const data = ['Aman', 'Aditya', 'Anant', 'Pragati', 'Raj'];
  return (
    <>
      <h1>Student List</h1>
      <ul>
        {data.map((a, b) => (
          <li>
            <Link href={`/studentList/${a}`}>{a}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
