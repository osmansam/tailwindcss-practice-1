import React from "react";
import { FiMenu } from "react-icons/fi";
import Walmart from "./assets/Walmart";
import JP from "./assets/JP";
import Visa from "./assets/Visa";
import Tinder from "./assets/Tinder";
import Samsung from "./assets/Samsung";
import Verizon from "./assets/Verizon";
import spencepage from "./assets/Spense.png";
import yelppage from "./assets/YelpCamp.png";
const Sayfa1 = () => {
  return (
    <div className="min-h-screen dark:bg-black ">
      <div className="dark:bg-black dark:text-white  ">
        <div className="max-w-6xl mx-auto">
          <section className="mx-auto flex  items-center justify-between p-4 pt-8">
            <h1 className="text-3xl font-medium capitalize">
              Jonathan Speeter
            </h1>
            <nav className="text-gray-400 hidden  space-x-8 text-xl  lg:block capitalize">
              <ul className="list-none capitalize flex flex-row justify-between space-x-8 ">
                <li className="text-gray-400 hover:text-gray-500">articles</li>
                <li className="text-gray-400 hover:text-gray-500">chats</li>
                <li className="text-gray-400 hover:text-gray-500">awards</li>
                <li className="text-gray-400 hover:text-gray-500">about</li>
              </ul>
            </nav>
            <button className="bg-yellow-300 w-36 h-12 text-black capitalize text-center hidden lg:block">
              get in touch
            </button>
            <button className="text-white text-3xl   lg:hidden ">
              <FiMenu />
            </button>
          </section>
          <section className=" flex flex-col  justify-between max-w-3xl p-6 pt-8 mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-9">
              Helping companies build better,scalable software.
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl pr-8 font-normal mt-3 ">
              Author-winning web developer and author, with over 15+ years of
              working experience with Fortune 500 companies like Apple, Google,
              Facebook and more.
            </p>
          </section>
          <section className="flex items-center flex-wrap lg:max-w-6xl md:max-w-[28rem] max-w-xs mx-auto gap-x-3  justify-evenly p-4  mt-8 gap-y-10 md:justify-between  ">
            <Walmart />
            <JP />
            <Visa />
            <Tinder />
            <Samsung />
            <Verizon />
          </section>
          <section className="dark:bg-black flex items-center p-4 flex-wrap flex-col lg:flex-row lg:justify-between h-2/3 mt-8 max-w-6xl">
            <div className="flex flex-col ">
              <img
                className=" max-w-4xl h-full w-full   lg:p-0 lg:max-w-lg mt-5 "
                src={spencepage}
                alt="spence"
              />

              <section className=" flex flex-col  justify-between max-w-3xl   mt-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-9">
                  Spense.com -->
                </h1>
                <p className="text-gray-400 text-lg max-w-lg  font-normal mt-4 mb-8 ">
                  Rethinking the way writers get paid, an open source platform
                  designed to help writers focus more on writing and how they'll
                  get paid. Project in collabrated with Codewell.cc
                </p>
              </section>
            </div>
            <div className="flex flex-col ">
              <img
                className=" max-w-3xl h-full w-full   lg:p-0 lg:max-w-lg  mt-5"
                src={yelppage}
                alt="yelpCamp"
              />

              <section className=" flex flex-col  justify-between max-w-3xl  mt-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl leading-9">
                  YelpCamp.com -->
                </h1>
                <p className="text-gray-400 text-lg max-w-lg  font-normal mt-4 mb-8 ">
                  Rethinking the way writers get paid, an open source platform
                  designed to help writers focus more on writing and how they'll
                  get paid. Project in collabrated with Codewell.cc
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
      <div className="dark:bg-gray-700 dark:text-white h-full flex flex-col  ">
        <section className="max-w-6xl mx-auto p-4  lg:grid lg:grid-cols-2 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl mt-6 leading-9 ">
            A co-founder at one of the world's largest communities
          </h1>
          <p className="text-gray-400 text-lg max-w-xl  font-normal mt-6   ">
            Rethinking the way writers get paid, an open source platform
            designed to help writers focus more on writing and how they'll get
            paid. Project in collabrated with Codewell.cc osman
          </p>
          <p className="text-gray-400 text-lg max-w-xl  font-normal mt-6    ">
            Rethinking the way writers get paid, an open source platform
            designed to help writers focus more on writing and how they'll get
            paid. Project in collabrated with Codewell.cc
          </p>
          <p className="text-gray-400 text-lg max-w-xl  font-normal mt-6">
            Rethinking the way writers get paid, an open source platform
            designed to help writers focus more on writing and how they'll get
            paid. Project in collabrated with Codewell.cc
          </p>
          <p className="text-gray-400 text-lg max-w-xl  font-normal mt-6 ">
            Rethinking the way writers get paid, an open source platform
            designed to help writers focus more on writing and how they'll get
            paid. Project in collabrated with Codewell.cc
          </p>
          <p className="text-gray-400 text-lg max-w-xl  font-normal mt-6 ">
            Rethinking the way writers get paid, an open source platform
            designed to help writers focus more on writing and how they'll get
            paid. Project in collabrated with Codewell.cc
          </p>
        </section>
      </div>
      <div className="dark:bg-black dark:text-white p-4  ">
        <div className="max-w-6xl mx-auto h-64 p-4 lg:p-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl mt-6 leading-9 mt-8 lg:mt-16">
            Interested in working with me ?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl pr-8 font-normal mt-3 ">
            Author-winning web developer and author, with over 15+ years of
            working experience with Fortune 500 companies like Apple, Google,
            Facebook and more.
          </p>
          <button className="bg-yellow-300 w-36 h-12 text-black capitalize text-center  mt-4 ">
            get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sayfa1;
