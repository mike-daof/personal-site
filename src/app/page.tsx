import Image from "next/image";
import { SocialIcon } from 'react-social-icons'

import { PinkTag } from './components/Tag'

const tagline = "Senior/Lead Software Engineer with 7+ years experience delivering cloud-native SaaS and mobile applications. Leveraging the full power of the web and modern JavaScript frameworks to create delightful user experiences."
const aboutMeCopyPt1 = "I’m a software engineer with over seven years experience working in large enterprises and scrappy startups. I can develop across the stack, but my focus is on UI with specialization in the React ecosystem."
const aboutMeCopyPt2 = "I have an empathetic people-oriented approach to my work. Open collaboration in a space and with team you trust will amplify your contributions. Other people can help you see what you’re capable of. And if you’re a good teammate, you can be that other person who helps them see what they’re capable of."

export default function Home() {
  return (
    <main className="bg-black py-5 min-h-screen flex items-center flex-col text-slate-400 antialiased">

      <PinkTag bgColor="#EC4899">Under Construction</PinkTag>

      <div className="w-9/12 max-w-[1200px] pt-7 flex items-center flex-col">
        <div className="hero relative w-full flex items-center flex-col">
          <div className="tagline max-w-[900px] text-center italic text-xl font-light">{tagline}</div>
          <div className="mt-12 border-2 border-gray-400 h-96 w-96 rounded-full flex items-center justify-center">
            <div className="avatar h-80 w-80 rounded-full bg-avatar bg-cover bg-center"/>
          </div>
          <div className="mt-6 italic flex items-center flex-col">
            <div>Michael Daof.</div>
            <div>Full Stack Software Engineer.</div>
            <div>React Enthusiast.</div>
          </div>
          <div className="socials mt-5 flex">
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} bgColor="#74BDCB" url="https://www.linkedin.com/in/michaeldaof/" />
            </div>
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} url="https://github.com/mike-daof" />
            </div>
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} network="email" url="michael.ivanhoe@gmail.com"/>
            </div>
          </div>
        </div>

        <section className="mt-14 w-full">
          <div className="font-extrabold text-white text-3xl">about me</div>
          <hr className="mt-4 bg-slate-400" />
          <div className="mt-4 flex">
            <div className="section flex-1">
              Skills
              <ul className="list-disc marker:text-white ml-8">
                <li>Implementing Design Systems</li>
                <li>Web Application Architecture</li>
                <li>Implementing/designing API</li>
                <li>Defining application data schema</li>
                <li>Establishing Web rendering strategy (static, server-side, client-side, etc)</li>
                <li>Building Component Libraries</li>
                <li>Plotting and executing rewrites of legacy applications</li>
                <li>Training teams to React development</li>
                <li>Configuring CI/CD Pipelines</li>
                <li>Creating Product Roadmaps with agile teams</li>
              </ul>
            </div>
            <div className="section flex-1">{aboutMeCopyPt1}<br/><br/>{aboutMeCopyPt2}</div>
          </div>
        </section>

        <section className="mt-24 w-full">
          <div className="font-extrabold text-white text-3xl">upcoming features</div>
          <hr className="mt-4 bg-slate-400" />
          <div className="content mt-4">
            <ul className="list-disc marker:text-white ml-8">
              <li>Integrate Sanity CMS</li>
              <li>Mobile View</li>
              <li>Animate On Load</li>
              <li>Animate On Scroll</li>
              <li>Add "this page" section</li>
            </ul>
          </div>
        </section>

        <section className="mt-32 w-full">
          <div className="w-full flex justify-between">
            <div className="font-extrabold text-white text-3xl">Let's work together.</div>
            <a className="font-extrabold text-white text-3xl" href="mailto:michael.ivanhoe@gmail.com">michael.ivanhoe@gmail.com</a>
          </div>
          <hr className="mt-4 bg-slate-400" />
        </section>

        <div className="footer mt-6 w-full flex justify-around align-center">
          <div className="footer text-xs w-full">icon provided by <a href="https://www.flaticon.com/authors/joalfa/glyph?author_id=521&type=standard">joalfa</a></div>
          <div className="socials flex">
            <div className="socail-container mx-1">
              <SocialIcon style={{ height: 32, width: 32 }} bgColor="#74BDCB" url="https://www.linkedin.com/in/michaeldaof/" />
            </div>
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 32, width: 32 }} url="https://github.com/mike-daof" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
