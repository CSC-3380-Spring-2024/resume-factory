import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

const Education = z.object({
  degree: z.string(),
  year: z.number(),
  school: z.string(),
});

const Project = z.object({
  link: z.array(z.string()),
  title: z.string(),
  description: z.string(),
});

const Info = z.object({
  name: z.string(),
  number: z.string(),
  email: z.string(),
  links: z.array(z.string()),
  education: z.array(Education),
  projects: z.array(Project),
  skills: z.array(z.string()),
});

type resumeValues = z.infer<typeof Info>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resumeValues>();
  const onSubmit: SubmitHandler<resumeValues> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input {...register("name")} />
        <label>Phone Number</label>
        <input {...register("number")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
