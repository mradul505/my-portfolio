import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I Have Been A Part Of
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            During my internship in VectoScalar Technologies, i contrivuted to two prjects, namely Voyapic IOS / Android App, and Pokerbaazi Desktop Application.
          </p>
        </div>
        <div class="bg-rose-300 ...">
          <iframe class="object-contain h-72 w-full ..." src="https://www.voyapic.com/" > </iframe><br />
          <iframe class="object-contain h-72 w-full ..." src="https://www.pokerbaazi.com/" > </iframe> <br />
        </div>
      </div>
    </section>
  );
}