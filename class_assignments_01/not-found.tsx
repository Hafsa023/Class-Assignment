
 


import Link from 'next/link';  // If you're using Next.js, you can import Link for navigation.

export default function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial, sans-serif',  }}>
      <h1 style={{ fontSize: '4rem', color: '#ff4040' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0' }}>Oops! Page Not Found</h2>
      <p style={{ fontSize: '1.2rem' }}>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}
