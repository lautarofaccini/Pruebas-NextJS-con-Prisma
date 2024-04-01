import Link from 'next/link'

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div>
        <h1 className="text-4xl text-bold">
            Not Found
        </h1>
        <Link href="/" className='text-slate-500 hover:text-slate-200 text-2xl mt-5'>Inicio</Link>
      </div>
    </section>
  );
}

export default NotFound;
