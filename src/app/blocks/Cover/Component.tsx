import React from "react";

type CoverBlockProps = {
  title: string;
  subtitle: string;
};

export const CoverBlock: React.FC<CoverBlockProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">{subtitle}</p>
      </div>
    </section>
  );
};
