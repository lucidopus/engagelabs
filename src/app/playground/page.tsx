// "use client";

// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Tooltip } from "@nextui-org/tooltip";
// import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

// import { ENGAGELABS_API_BASE, ENGAGELABS_API_KEY } from "@/config";
// import { Button } from "@/components";
// import Notification from "@/components/Notification";

// function Playground() {
//   const [persona, setPersona] = useState("");
//   const [qualities, setQualities] = useState("");
//   const [data, setData] = useState(null);

//   const getData = async () => {
//     try {
//       const response = await fetch(
//         `${ENGAGELABS_API_BASE}/initialize_conversation`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-API-Key": `${ENGAGELABS_API_KEY}`,
//           },
//           body: JSON.stringify({
//             persona,
//             qualities,
//           }),
//         }
//       );

//       const data = await response.json();

//       console.log(data);
//       setData(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       <Notification
//         title="Oops! We couldn't initialize your session!"
//         description="There was an issue while initializing your conversation session, Please try again later!"
//         type="Error"
//       />;
//     }
//   };
//   const [dragActive, setDragActive] = useState<boolean>(false);
//   const [files, setFiles] = useState<any>([]);
//   const inputRef = useRef<any>(null);

//   function analyzeCall(mp3: any) {
//     console.log("Make an API call with this mp3", mp3);
//   }

//   function handleChange(e: any) {
//     e.preventDefault();
//     console.log("File has been added");
//     if (e.target.files && e.target.files[0]) {
//       setFiles([e.target.files[0]]);
//     }
//   }

//   function handleSubmitFile(e: any) {
//     if (files.length === 0) {
//       console.log("No file selected!");
//     } else {
//       analyzeCall(files[0]);
//     }
//   }

//   function handleDrop(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setFiles([e.dataTransfer.files[0]]);
//     }
//   }

//   function handleDragLeave(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//   }

//   function handleDragOver(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function handleDragEnter(e: any) {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(true);
//   }

//   function removeFile(fileName: any, idx: any) {
//     const newArr = [...files];
//     newArr.splice(idx, 1);
//     setFiles([]);
//     setFiles(newArr);
//   }

//   function openFileExplorer() {
//     inputRef.current.value = "";
//     inputRef.current.click();
//   }

//   const handleClick = () => {
//     getData();
//   };

//   const handleReinitialize = () => {
//     setData(null);
//     setPersona("");
//     setQualities("");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-center text-4xl pb-8 font-extrabold dark:text-gray-300 text-gray-300">
//         EngageLabs API Playground
//       </h1>
//       <h2 className="text-center text-xl pb-16 font-bold leading-9 tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
//         Try it out!
//       </h2>
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-transparent p-10 ring-2 ring-white rounded-lg shadow-md max-w-md w-full"
//       >
//         <div className="space-y-6">
//           <label
//             className="block text-sm font-medium text-gray-100"
//             htmlFor="help"
//           >
//             Customer's Persona
//             <span className="font-light text-gray-200">*</span>
//           </label>
//           <textarea
//             className={`bg-transparent text-white text-2xl block p-3 w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
//               data !== null ? "cursor-not-allowed" : ""
//             }`}
//             id="help"
//             placeholder="Ex. The Price Conscious Buyer"
//             rows={1}
            
//             required
//             value={persona}
//             onChange={(p) => setPersona(p.target.value)}
//             disabled={data !== null}
//           ></textarea>

//           <label
//             className="block text-sm font-medium text-gray-300"
//             htmlFor="help"
//           >
//             Customer's Qualities
//             <span className="font-light text-gray-200">*</span>
//           </label>
//           <textarea
//             className={`bg-transparent block p-3 w-full rounded-md border-0 py-3 shadow-sm text-white ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
//               data !== null ? "cursor-not-allowed" : ""
//             }`}
//             id="help"
//             placeholder="Ex. Very focused on getting the best value for money."
//             rows={4}
//             required
//             value={qualities}
//             onChange={(e) => setQualities(e.target.value)}
//             disabled={data !== null}
//           ></textarea>
          
//           <label className="block text-sm font-medium" htmlFor="dragndrop">
//             <div className="flex justify-between items-center text-gray-300">
//               <span>
//                 Multi-modal context
//                 <span className="text-gray-500"> (Optional)</span>
//               </span>
//               <Tooltip
//                 content="Attach videos, charts or any visual context describing the customer's persona and qualities. The AI will reflect these qualities in its responses."
//                 className="bg-white text-black text-sm rounded-lg p-3 max-w-60"
//                 showArrow={true}
//               >
//                 <FontAwesomeIcon
//                   className="cursor-pointer text-white hover:text-gray-400 transition-colors duration-200"
//                   icon={faInfoCircle}
//                 />
//               </Tooltip>
//             </div>
//           </label>
//            <form
//             id="dragndrop"
//             className={`${
//               dragActive
//                 ? "shadow-lg"
//                 : "border-2 border-dashed transition-colors duration-2000"
//             } p-6 rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center relative`}
//             onDragEnter={handleDragEnter}
//             onSubmit={(e) => e.preventDefault()}
//             onDrop={handleDrop}
//             onDragLeave={handleDragLeave}
//             onDragOver={handleDragOver}
//           >
//             <input
//               placeholder="fileInput"
//               className="hidden"
//               ref={inputRef}
//               type="file"
//               multiple={true}
//               onChange={handleChange}
//               accept=".jpg"
//             />

//             <p className="text-lg font-light text-white">
//               Drag & Drop files or{" "}
//               <span
//                 className="font-bold text-blue-800 cursor-pointer"
//                 onClick={openFileExplorer}
//               >
//                 <u>Select files</u>
//               </span>{" "}
//               to upload
//             </p>
//             <div className="text-sm font-light mt-2 text-gray-400 flex items-center">
//               Only .jpg files are supported at the moment!
//               <div className="relative ml-2">
//                 <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded mt-2 invisible group-hover:visible">
//                   You can upload multiple files at once.
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col items-center p-3 mt-4">
//               {files.map((file: any, idx: any) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-md shadow-md p-3 mb-2 flex flex-row items-center space-x-2"
//                 >
//                   <span className="font-medium text-black">{file.name}</span>
//                   <span
//                     className="text-red-600 font-bold cursor-pointer"
//                     onClick={() => removeFile(file.name, idx)}
//                   >
//                     <FontAwesomeIcon icon={faTrash} />
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </form>
//           <div>
//             {data ? (
//               <div>
//                 <div className="flex justify-center space-x-6">
//                   <button
//                     onClick={handleReinitialize}
//                     className="inline-flex items-center justify-center w-1/2 text-center rounded-md px-3.5 py-2.5 text-lg font-bold text-black bg-white hover:bg-red-200 transition-all duration-500"
//                   >
//                     <span className="mr-2 flex">
//                       Reset <pre> </pre>
//                       <img
//                         src="/reset.svg"
//                         alt=""
//                         height={25}
//                         width={25}
//                         className="p-1"
//                       />
//                     </span>
//                   </button>
//                   <button
//                     onClick={() =>
//                       (window.location.href = `/playground/${data}`)
//                     }
//                     className="inline-flex w-1/2 text-center rounded-lg px-3.5 py-2.5 text-lg font-bold text-black bg-gradient-to-r bg-white hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(230,230,230,0.5)]"
//                   >
//                     <span className="flex justify-center">
//                       <pre className="mt-1 mr-2"> Launch</pre>
//                       <img src="/ringing.gif" alt="" width={35} height={35} />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <Button
//                 name="Initiate AI Conversation"
//                 onclick={handleClick}
//                 width="w-full"
//               />
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Playground;

"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@nextui-org/tooltip";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

import { ENGAGELABS_API_BASE, ENGAGELABS_API_KEY } from "@/config";
import { Button } from "@/components";
import Notification from "@/components/Notification";

function Playground() {
  const [persona, setPersona] = useState("");
  const [qualities, setQualities] = useState("");
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `${ENGAGELABS_API_BASE}/initialize_conversation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${ENGAGELABS_API_KEY}`,
          },
          body: JSON.stringify({
            persona,
            qualities,
          }),
        }
      );

      const data = await response.json();

      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      <Notification
        title="Oops! We couldn't initialize your session!"
        description="There was an issue while initializing your conversation session> Please try again later!"
        type="Error"
      />;
    }
  };
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [files, setFiles] = useState<any>([]);
  const inputRef = useRef<any>(null);

  function analyzeCall(mp3: any) {
    console.log("Make an API call with this mp3", mp3);
  }

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      setFiles([e.target.files[0]]);
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      console.log("No file selected!");
    } else {
      analyzeCall(files[0]);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles([e.dataTransfer.files[0]]);
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const handleClick = () => {
    getData();
  };

  const handleReinitialize = () => {
    setData(null);
    setPersona("");
    setQualities("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl pb-8 font-extrabold dark:text-gray-300 text-gray-300">
        EngageLabs API Playground
      </h1>
      <h2 className="text-center text-xl pb-16 font-bold leading-9 tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
        Try it out!
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent p-10 ring-2 ring-white rounded-lg shadow-md max-w-md w-full"
      >
        <form onSubmit={getData} className="space-y-6">
          <label
            className="block text-sm font-medium text-gray-100"
            htmlFor="persona"
          >
            Customer's Persona
            <span className="font-light text-gray-200">*</span>
          </label>
          <textarea
            className={`bg-transparent text-white text-2xl block p-3 w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              data !== null ? "cursor-not-allowed" : ""
            }`}
            id="persona"
            placeholder="Ex. The Price Conscious Buyer"
            rows={1}
            required
            value={persona}
            onChange={(p) => setPersona(p.target.value)}
            disabled={data !== null}
          ></textarea>

          <label
            className="block text-sm font-medium text-gray-300"
            htmlFor="qualities"
          >
            Customer's Qualities
            <span className="font-light text-gray-200">*</span>
          </label>
          <textarea
            className={`bg-transparent block p-3 w-full rounded-md border-0 py-3 shadow-sm text-white ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              data !== null ? "cursor-not-allowed" : ""
            }`}
            id="qualities"
            placeholder="Ex. Very focused on getting the best value for money."
            rows={4}
            required
            value={qualities}
            onChange={(e) => setQualities(e.target.value)}
            disabled={data !== null}
          ></textarea>

          <label className="block text-sm font-medium" htmlFor="dragndrop">
            <div className="flex justify-between items-center text-gray-300">
              <span>
                Multi-modal context
                <span className="text-gray-500"> (Optional)</span>
              </span>
              <Tooltip
                content="Attach videos, charts or any visual context describing the customer's persona and qualities. The AI will reflect these qualities in its responses."
                className="bg-white text-black text-sm rounded-lg p-3 max-w-60"
                showArrow={true}
              >
                <FontAwesomeIcon
                  className="cursor-pointer text-white hover:text-gray-400 transition-colors duration-200"
                  icon={faInfoCircle}
                />
              </Tooltip>
            </div>
          </label>
          <div
            id="dragndrop"
            className={`${
              dragActive
                ? "shadow-lg"
                : "border-2 border-dashed transition-colors duration-2000"
            } p-6 rounded-lg min-h-[10rem] text-center flex flex-col items-center justify-center relative`}
            onDragEnter={handleDragEnter}
            onSubmit={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
          >
            <input
              placeholder="fileInput"
              className="hidden"
              ref={inputRef}
              type="file"
              multiple={true}
              onChange={handleChange}
              accept=".jpg"
            />

            <p className="text-lg font-light text-white">
              Drag & Drop files or{" "}
              <span
                className="font-bold text-blue-800 cursor-pointer"
                onClick={openFileExplorer}
              >
                <u>Select files</u>
              </span>{" "}
              to upload
            </p>
            <div className="text-sm font-light mt-2 text-gray-400 flex items-center">
              Only .jpg files are supported at the moment!
              <div className="relative ml-2">
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded mt-2 invisible group-hover:visible">
                  You can upload multiple files at once.
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center p-3 mt-4">
              {files.map((file: any, idx: any) => (
                <div
                  key={idx}
                  className="bg-white rounded-md shadow-md p-3 mb-2 flex flex-row items-center space-x-2"
                >
                  <span className="font-medium text-black">{file.name}</span>
                  <span
                    className="text-red-600 font-bold cursor-pointer"
                    onClick={() => removeFile(file.name, idx)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {data ? (
              <div>
                <div className="flex justify-center space-x-6">
                  <button
                    type="button"
                    onClick={handleReinitialize}
                    className="inline-flex items-center justify-center w-1/2 text-center rounded-md px-3.5 py-2.5 text-lg font-bold text-black bg-white hover:bg-red-200 transition-all duration-500"
                  >
                    <span className="mr-2 flex">
                      Reset <pre> </pre>
                      <img
                        src="/reset.svg"
                        alt=""
                        height={25}
                        width={25}
                        className="p-1"
                      />
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href = `/playground/${data}`)
                    }
                    className="inline-flex w-1/2 text-center rounded-lg px-3.5 py-2.5 text-lg font-bold text-black bg-gradient-to-r bg-white hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(230,230,230,0.5)]"
                  >
                    <span className="flex justify-center">
                      <pre className="mt-1 mr-2"> Launch</pre>
                      <img src="/ringing.gif" alt="" width={35} height={35} />
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <Button
                name="Initiate AI Conversation"
                width="w-full"
              />
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Playground;
