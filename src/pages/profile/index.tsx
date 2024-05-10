import { z } from "zod";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import PDFFile from "~/components/PDFFile";
import React, { useState } from "react";
// import { usePDF } from "@react-pdf/renderer";
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);
// const usePDF = dynamic(
//   () => import("@react-pdf/renderer").then((mod) => mod.usePDF),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );
// WILL COMEBACK, NEED TO FIGURE OUT NESTED OBJECT REGISTERS AND ARRAYS, BRUTE FORCE FOR NOW
const Education = z.object({
  degree: z.string(),
  year: z.number(),
  school: z.string(),
});

const Project = z.object({
  link: z.string(),
  title: z.string(),
  description: z.string(),
});

const Info = z.object({
  name: z.string(),
  number: z.string(),
  email: z.string(),
  links: z.array(z.string()),
  education: z.array(Education),
  project: z.array(Project),
  skills: z.array(z.string()),
  fileName: z.string(),
});

export type ResumeValues = z.infer<typeof Info>;

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeValues>();
  const [formData, setFormData] = useState<ResumeValues>();
  // const [instance, update] = usePDF({ document: <PDFFile /> });

  const onSubmit: SubmitHandler<ResumeValues> = (data) => {
    setFormData(data);
    console.log(data);
  };

  {
    /**Attempting to put functions below main code */
  }
  //  Can be universally used for all inputs
  // Plan to make individual chunks for education and projects.
  // Individual chunks will supprt mulitple options (0, 1, 2, etc...)

  // const BasicInput: React.FC<{
  //   title: string;
  //   field: string;
  //   register: UseFormRegister<ResumeValues>;
  // }> = ({ title, field, register }) => {
  //   return (
  //     <div>
  //       <label className="font-semibold">{title}</label>
  //       <input
  //         className="w-full rounded border border-gray-400 px-3 py-2"
  //         {...register(field as keyof ResumeValues)}
  //       />
  //     </div>
  //   );
  // };

  return (
    <div className="container">
      <Head>
        <title>FactoryFloor</title>
        <meta name="description" content="Quickly build personalized resumes" />
      </Head>
      <h1 className="mb-12 font-mono text-7xl font-bold">
        Welcome To The Factory
      </h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Testing component method for reduce wear on main() */}
          <p className="text-lg font-bold">Basic Information</p>
          <div className="flex flex-col justify-start">
            <BasicInput title="Full Name" field="name" register={register} />
            <BasicInput
              title="Phone Number"
              field="number"
              register={register}
            />
            <BasicInput
              title="Email Address"
              field="email"
              register={register}
            />
            <BasicInput title="GitHub" field="links.0" register={register} />
            <BasicInput title="LinkedIn" field="links.1" register={register} />
          </div>
          <p className="text-lg font-bold">Education 1</p>
          <EducationInput eduNum="0" register={register} />
          <p className="text-lg font-bold">Education 2</p>
          <EducationInput eduNum="1" register={register} />
          <p className="text-lg font-bold">Projects</p>
          <ProjectInput projNum="0" register={register} />

          {/* SKILLS WILL GO HERE -> */}

          <BasicInput
            title="Preferred File Name"
            field="fileName"
            register={register}
          ></BasicInput>
          <button type="submit">Build</button>
          <div>
            <PDFDownloadLink
              document={<PDFFile {...formData} />}
              fileName={formData?.fileName || "temp"}
            >
              {({ loading }) =>
                loading ? (
                  <button>Loading Document...</button>
                ) : (
                  <button type="button">Download</button>
                )
              }
            </PDFDownloadLink>
          </div>
        </form>
      </div>
    </div>
  );
}

const BasicInput: React.FC<{
  title: string;
  field: string;
  register: UseFormRegister<ResumeValues>;
}> = ({ title, field, register }) => {
  return (
    <div>
      <label className="font-semibold">{title}</label>
      <input
        className="w-full rounded border border-gray-400 px-3 py-2"
        {...register(field as keyof ResumeValues)}
      />
    </div>
  );
};

const EducationInput: React.FC<{
  eduNum: string;
  register: UseFormRegister<ResumeValues>;
}> = ({ register, eduNum }) => {
  const fieldPrefix = `education.${eduNum}.`;
  return (
    <div className="flex flex-col justify-start">
      <BasicInput
        title="School"
        field={`${fieldPrefix}school`}
        register={register}
      />
      <BasicInput
        title="Degree"
        field={`${fieldPrefix}degree`}
        register={register}
      />
      <BasicInput
        title="Year of Graduation"
        field={`${fieldPrefix}year`}
        register={register}
      />
    </div>
  );
};

const ProjectInput: React.FC<{
  projNum: string;
  register: UseFormRegister<ResumeValues>;
}> = ({ register, projNum }) => {
  const fieldPrefix = `project.${projNum}.`;
  return (
    <div className="flex flex-col justify-start">
      <BasicInput
        title="Title"
        field={`${fieldPrefix}title`}
        register={register}
      />
      <BasicInput
        title="Link"
        field={`${fieldPrefix}link`}
        register={register}
      />
      <BasicInput
        title="Description"
        field={`${fieldPrefix}description`}
        register={register}
      />
    </div>
  );
};

// const BasicInfo: React.FC = () => {
//   return(
//     <><p className="text-lg font-bold">Basic Information</p><div className="flex flex-col justify-start">
//       <BasicInput title="Full Name" field="name" register={register} />
//       <BasicInput
//         title="Phone Number"
//         field="number"
//         register={register} />
//       <BasicInput
//         title="Email Address"
//         field="email"
//         register={register} />
//       <BasicInput title="GitHub" field="links.0" register={register} />
//       <BasicInput title="LinkedIn" field="links.1" register={register} />
//     </div></>
//   );
// };
