import { z } from "zod";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldValues,
  useFieldArray,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import { type NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import PDFFile from "~/components/PDFFile";
import React, { useState, createContext, useContext } from "react";
// import { usePDF } from "@react-pdf/renderer";

// Register function
const RegisterContext = createContext<
  UseFormRegister<ResumeValues> | undefined
>(undefined);

// Custom hook to use the register function from context
export const useRegister = () => {
  const register = useContext(RegisterContext);
  if (!register) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return register;
};

// Provider component to wrap around the top-level component

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

// all zod object are meant for validation | NOT YET IMPLEMENTED PROPERLY
const Education = z.object({
  degree: z.string(),
  year: z.string(),
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

export const RegisterProvider: React.FC<{
  register: UseFormRegister<ResumeValues>;
  children: React.ReactNode;
}> = ({ register, children }) => {
  return (
    <RegisterContext.Provider value={register}>
      {children}
    </RegisterContext.Provider>
  );
};

export default function Profile() {
  const methods = useForm<ResumeValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = methods;
  const [formData, setFormData] = useState<ResumeValues>();

  // Handles button submition to push to console for testing and to PDFFile
  const onSubmit: SubmitHandler<ResumeValues> = (data) => {
    setFormData(data);
    console.log(data);
  };

  // DESIGN STILL NEEDS TO BE DONE
  // FOCUSING ON FUNCTIONALITY
  return (
    <div className="mx-auto max-w-2xl">
      <Head>
        <title>FactoryFloor</title>
        <meta name="description" content="Quickly build personalized resumes" />
      </Head>
      <h1 className="mb-12 font-mono text-7xl font-bold">
        Welcome To The Factory
      </h1>
      <div className="">
        <FormProvider {...methods}>
          <RegisterProvider register={register}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <BasicInfo />
              <EducationInfo />
              <ProjectInfo />
              <SkillsInfo />
              <BasicInput title="Preferred File Name" field="fileName" />
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
          </RegisterProvider>
        </FormProvider>
      </div>
    </div>
  );
}

const BasicInput: React.FC<{
  title: string;
  field: string;
}> = ({ title, field }) => {
  const register = useRegister();
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
}> = ({ eduNum }) => {
  const fieldPrefix = `education.${eduNum}.`;
  return (
    <div className="flex flex-col justify-start">
      <BasicInput title="School" field={`${fieldPrefix}school`} />
      <BasicInput title="Degree" field={`${fieldPrefix}degree`} />
      <BasicInput title="Year of Graduation" field={`${fieldPrefix}year`} />
    </div>
  );
};

const ProjectInput: React.FC<{
  projNum: string;
}> = ({ projNum }) => {
  const fieldPrefix = `project.${projNum}.`;
  return (
    <div className="flex flex-col justify-start">
      <BasicInput title="Title" field={`${fieldPrefix}title`} />
      <BasicInput title="Link" field={`${fieldPrefix}link`} />
      <BasicInput title="Description" field={`${fieldPrefix}description`} />
    </div>
  );
};

const BasicInfo: React.FC = () => {
  return (
    <>
      <p className="text-lg font-bold">Basic Information</p>
      <div className="flex flex-col justify-start">
        <BasicInput title="Full Name" field="name" />
        <BasicInput title="Phone Number" field="number" />
        <BasicInput title="Email Address" field="email" />
        <BasicInput title="GitHub" field="links.0" />
        <BasicInput title="LinkedIn" field="links.1" />
      </div>
    </>
  );
};

const EducationInfo: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <>
      <p className="text-lg font-bold">Education</p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <p className="text-lg font-bold">Education {index + 1}</p>
          {/* toString saved my life */}
          <EducationInput eduNum={index.toString()} />
          <button type="button" onClick={() => remove(index)}>
            Remove Education
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ degree: "", year: "", school: "" })}
      >
        Add Education
      </button>
    </>
  );
};

const ProjectInfo: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "project",
  });
  return (
    <>
      <p className="text-lg font-bold">Projects</p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <p className="text-lg font-bold">Project {index + 1}</p>
          {/* toString saved my life */}
          <ProjectInput projNum={index.toString()} />
          <button type="button" onClick={() => remove(index)}>
            Remove Project
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ title: "", link: "", description: "" })}
      >
        Add Project
      </button>
    </>
  );
};

const SkillsInfo: React.FC = () => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <>
      <p className="text-lg font-bold">Skills</p>
      {fields.map((field, index) => (
        <div key={field.id}>
          <BasicInput title={`Skill ${index + 1}`} field={`skills.${index}`} />
          <button type="button" onClick={() => remove(index)}>
            Remove Skill
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append("")}>
        Add Skill
      </button>
    </>
  );
};
