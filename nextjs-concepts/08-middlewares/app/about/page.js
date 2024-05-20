import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/about/aboutstudent">About Student</Link>&nbsp;&nbsp;
      <Link href="/about/aboutcollege">About College</Link>&nbsp;&nbsp;
      <Link href="/">Home</Link>
    </div>
  );
};

export default About;
