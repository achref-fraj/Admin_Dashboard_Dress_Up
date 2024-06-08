import { getSession, signOut } from 'next-auth/react';

export default function Admin({ session }) {
  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 mt-4 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
      >
        Sign out
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/pages/index.js',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
