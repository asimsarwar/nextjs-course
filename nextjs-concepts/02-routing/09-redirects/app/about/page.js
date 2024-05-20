import { redirect } from "next/navigation";
const About = () => {
  redirect("/");
  return <h1>User redirected to About Page</h1>;
};
export default About;
