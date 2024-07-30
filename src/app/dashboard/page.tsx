"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { firebase_auth } from "../../../actions/firebase-config";
import { unsubscribe } from "diagnostics_channel";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase_auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        alert("Please sign in!")
        router.push('/authenticate/login')
        setUser(null); 
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="text-white mt-20">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName || "User"}!</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
