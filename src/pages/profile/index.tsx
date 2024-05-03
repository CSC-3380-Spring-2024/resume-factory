import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { type NextPage } from "next";
import Head from "next/head";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "~/components/PDFFile";

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
  FileName: z.string(),
});

type resumeValues = z.infer<typeof Info>;

export default function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resumeValues>();
  const onSubmit: SubmitHandler<resumeValues> = (data) => console.log(data);

  return (
    <div>
      <Head>
        <title>FactoryFloor</title>
        <meta name="description" content="Quickly build personalized resumes" />
      </Head>
      <h1 className="mb-12 font-mono text-7xl font-bold">
        Welcome To The Factory
      </h1>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-lg font-bold">Basic Information</p>
          <div className="flex flex-col justify-start">
            <div>
              <label className="font-semibold">Full Name</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("name")}
              />
            </div>
            <div>
              <label className="font-semibold">Phone Number</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("number")}
              />
            </div>
            <div>
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("email")}
              />
            </div>
            <div>
              <label className="font-semibold">Github</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("links")}
              />
            </div>
          </div>
          <p className="text-lg font-bold">Education</p>
          <div className="flex flex-col justify-start">
            <div>
              <label className="font-semibold">School</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("education.0.school")}
              />
            </div>
            <div>
              <label className="font-semibold">Degree</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("education.0.degree")}
              />
            </div>

            <div>
              <label className="font-semibold">Year of Graduation</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("education.0.year")}
              />
            </div>
          </div>
          <p className="text-lg font-bold">Projects</p>
          <div className="flex flex-col justify-start">
            <div>
              <label className="font-semibold">Project Title</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("project.0.title")}
              />
            </div>
            <div>
              <label className="font-semibold">Project Link</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("project.0.link")}
              />
            </div>

            <div>
              <label className="font-semibold">Project Description</label>
              <input
                className="w-full rounded border border-gray-400 px-3 py-2"
                {...register("project.0.description")}
              />
            </div>
          </div>
          <button>Build</button>
        </form>
        {/* DownloadLink trial for react-pdf */}
        <div>
          <PDFDownloadLink document={<PDFFile />} fileName="temp">
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
}
