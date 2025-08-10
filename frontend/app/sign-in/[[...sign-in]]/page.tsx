'use client';

import { SignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  // Don't render sign-in component if user is already signed in
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return <div>Redirecting to dashboard...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        forceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
      />
    </div>
  );
}
