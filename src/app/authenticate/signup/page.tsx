import { Input } from "@/components";
import { Button } from "@/components";

function Signup() {
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
            <form className="space-y-6" action="#" method="POST">
              <Input
                id="email"
                label="Email address*"
                placeholder="johndoe@example.com"
                type="email"
              />

              <Input
                id="password"
                label="Password*"
                type="password"
                placeholder="Enter a password"
              />

              <Input
                id="password"
                label="Confirm Password*"
                type="password"
                placeholder="Confirm your password"
              />

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
    </>
  );
}

export default Signup;
