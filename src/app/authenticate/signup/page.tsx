// "use client";

// import { Input } from "@/components";
// import { Button } from "@/components";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { FirebaseError } from "firebase/app";
// import { firebase_auth } from "../../../../actions/firebase-config";

// import Notification from "@/components/Notification";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordsMatch, setPasswordsMatch] = useState(true);
//   const [notification, setNotification] = useState<{
//     title: string;
//     description: string;
//     type: "Success" | "Error";
//   } | null>(null);

//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setPasswordsMatch(false);
//       setNotification({
//         title: "Error",
//         description: "Passwords do not match!",
//         type: "Error",
//       });
//     } else {
//       setPasswordsMatch(true);

//       try {
//         await createUserWithEmailAndPassword(firebase_auth, email, password);
//         setNotification({
//           title: "Success",
//           description: "Account created successfully!",
//           type: "Success",
//         });
//         router.push("/authenticate/login");
//       } catch (error) {
//         if (error instanceof FirebaseError) {
//           switch (error.code) {
//             case "auth/email-already-in-use":
//               setNotification({
//                 title: "Error",
//                 description:
//                   "This email is already in use. Please try logging in or use a different email.",
//                 type: "Error",
//               });
//               break;
//             case "auth/invalid-email":
//               setNotification({
//                 title: "Error",
//                 description:
//                   "Invalid email address. Please check and try again.",
//                 type: "Error",
//               });
//               break;
//             case "auth/weak-password":
//               setNotification({
//                 title: "Error",
//                 description:
//                   "Password is too weak. Please use a stronger password.",
//                 type: "Error",
//               });
//               break;
//             default:
//               setNotification({
//                 title: "Error",
//                 description:
//                   "An error occurred while creating your account. Please try again.",
//                 type: "Error",
//               });
//           }
//         }
//       }
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md my-12">
//           <h1 className="text-center my-10 text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
//             Sign up
//           </h1>
//           <h2 className="mt-5 text-center text-lg font-semibold leading-9 tracking-tight text-gray-100">
//             Enjoy 5 free credits on us!
//           </h2>
//         </div>

//         <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
//           <div className="border border-gray-400 dark:border-gray-400 px-6 py-12 shadow sm:rounded-lg sm:px-12">
//             <form className="space-y-6" onSubmit={handleSubmit} method="POST">
//               <Input
//                 id="email"
//                 label="Email address*"
//                 placeholder="johndoe@example.com"
//                 type="email"
//                 value={email}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                   setEmail(e.target.value)
//                 }
//               />

//               <Input
//                 id="password"
//                 label="Password*"
//                 type="password"
//                 placeholder="Enter a password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <Input
//                 id="confirmPassword"
//                 label="Confirm Password*"
//                 type="password"
//                 placeholder="Confirm your password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />

//               {!passwordsMatch && (
//                 <p className="text-orange-500 text-sm">
//                   Passwords do not match!
//                 </p>
//               )}

//               <div>
//                 <Button width="w-full" name="Sign up" />
//               </div>
//             </form>

//             <div>
//               <div className="relative mt-10 dark:text-gray-400 text-gray-500">
//                 <div
//                   className="absolute inset-0 flex items-center"
//                   aria-hidden="true"
//                 >
//                   <div className="w-full border-t border-gray-400" />
//                 </div>
//                 <div className="relative flex justify-center text-sm font-medium leading-6">
//                   <span className="bg-black px-6">Or</span>
//                 </div>
//               </div>

//               <div className="mt-6 gap-4">
//                 <a
//                   href="#"
//                   className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-500 px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
//                 >
//                   <img src="/google.svg" alt="Google" height={20} width={20} />
//                   <span className="text-sm font-semibold leading-6 text-gray-100">
//                     Sign up with Google
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <p className="mt-4 text-center text-sm text-gray-300 dark:text-gray-900">
//             Already have an account?{" "}
//             <a
//               href="/authenticate/login"
//               className="font-semibold leading-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text hover:text-red-500"
//             >
//               Log in
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;


"use client";

import { Input } from "@/components";
import { Button } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { firebase_auth } from "../../../../actions/firebase-config";

import Notification from "@/components/Notification";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [notification, setNotification] = useState<{
    title: string;
    description: string;
    type: "Success" | "Error";
  } | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      setNotification({
        title: "Error",
        description: "Passwords do not match!",
        type: "Error",
      });
    } else {
      setPasswordsMatch(true);

      try {
        await createUserWithEmailAndPassword(firebase_auth, email, password);
        setNotification({
          title: "Success",
          description: "Account created successfully!",
          type: "Success",
        });
        router.push("/authenticate/login");
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case "auth/email-already-in-use":
              setNotification({
                title: "Error",
                description:
                  "This email is already in use. Please try logging in or use a different email.",
                type: "Error",
              });
              break;
            case "auth/invalid-email":
              setNotification({
                title: "Error",
                description:
                  "Invalid email address. Please check and try again.",
                type: "Error",
              });
              break;
            case "auth/weak-password":
              setNotification({
                title: "Error",
                description:
                  "Password is too weak. Please use a stronger password.",
                type: "Error",
              });
              break;
            default:
              setNotification({
                title: "Error",
                description:
                  "An error occurred while creating your account. Please try again.",
                type: "Error",
              });
          }
        }
      }
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md my-12">
          <h1 className="text-center my-10 text-4xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
            Sign up
          </h1>
          <h2 className="mt-5 text-center text-lg font-semibold leading-9 tracking-tight text-gray-100">
            Enjoy 5 free credits on us!
          </h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="border border-gray-400 dark:border-gray-400 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <Input
                id="email"
                label="Email address*"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />

              <Input
                id="password"
                label="Password*"
                type="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                id="confirmPassword"
                label="Confirm Password*"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {!passwordsMatch && (
                <p className="text-orange-500 text-sm">
                  Passwords do not match!
                </p>
              )}

              <div>
                <Button width="w-full" name="Sign up" />
              </div>
            </form>

            <div>
              <div className="relative mt-10 dark:text-gray-400 text-gray-500">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-400" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-black px-6">Or</span>
                </div>
              </div>

              <div className="mt-6 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-500 px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <img src="/google.svg" alt="Google" height={20} width={20} />
                  <span className="text-sm font-semibold leading-6 text-gray-100">
                    Sign up with Google
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-300 dark:text-gray-900">
            Already have an account?{" "}
            <a
              href="/authenticate/login"
              className="font-semibold leading-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text hover:text-red-500"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          description={notification.description}
        />
      )}
    </>
  );
}

export default Signup;
