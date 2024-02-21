import Image from "next/image";
import { SocialIcon } from 'react-social-icons'

import { PinkTag } from './components/Tag'

const tagline = "Senior/Lead Software Engineer with 7+ years experience delivering cloud-native SaaS and mobile applications. Leveraging the full power of the web and modern JavaScript frameworks to create delightful user experiences."
const aboutMeCopyPt1 = "I’m a software engineer with over seven years experience working in large enterprises and scrappy startups. I can develop across the stack, but my focus is on UI with specialization in the React ecosystem."
const aboutMeCopyPt2 = "I have an empathetic people-oriented approach to my work. Open collaboration in a space and with team you trust will amplify your contributions. Other people can help you see what you’re capable of. And if you’re a good teammate, you can be that other person who helps them see what they’re capable of."

export default function Home() {
  return (
    <main className="bg-black py-5 min-h-screen flex items-center flex-col text-slate-400 antialiased break-words">

      <PinkTag bgColor="#EC4899">Under Construction</PinkTag>

      <div className="w-11/12 md:w-9/12 max-w-[1200px] pt-2 md:pt-7 flex items-center flex-col">
        <div className="hero relative w-full flex items-center flex-col">
          <div className="tagline max-w-[900px] text-center italic text-lg md:text-xl font-light">{tagline}</div>
          <div className="animate-fade-left mt-12 border-2 border-gray-400 h-72 w-72 md:h-96 md:w-96 rounded-full flex items-center justify-center">
            <div className="avatar brightness-75 h-60 w-60 md:h-80 md:w-80 rounded-full bg-avatar bg-cover bg-center"/>
          </div>
          <div className="mt-6 italic flex items-center flex-col">
            <div>Michael Daof.</div>
            <div>Full Stack TypeScript.</div>
            <div>React Specialist.</div>
          </div>
          <div className="socials mt-5 flex">
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} bgColor="#74BDCB" url="https://www.linkedin.com/in/michaeldaof/" />
            </div>
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} url="https://github.com/mike-daof" />
            </div>
            <div className="socail-container mx-2">
              <SocialIcon style={{ height: 40, width: 40 }} bgColor="#800000" network="email" url="michael.ivanhoe@gmail.com"/>
            </div>
          </div>
        </div>

        <section className="mt-14 w-full">
          <div className="font-extrabold text-white text-3xl">about me</div>
          <hr className="mt-4 bg-slate-400" />
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="section pr-2 flex-1">
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
            <div className="section flex-1 pt-6 md:pt-0 pl-2">{aboutMeCopyPt1}<br/><br/>{aboutMeCopyPt2}</div>
          </div>
        </section>

        <section className="mt-16 md:mt-24 w-full">
          <div className="font-extrabold text-white text-3xl">upcoming features</div>
          <hr className="mt-4 bg-slate-400" />
          <div className="content mt-4">
            <ul className="list-disc marker:text-white ml-8">
              <li>Integrate Sanity CMS</li>
              <li>Animate On Load</li>
              <li>Animate On Scroll</li>
              <li>{`Add "this page" section`}</li>
            </ul>
          </div>
        </section>

        <section className="mt-32 w-full">
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <div className="font-extrabold text-white text-3xl">Let&apos;s work together.</div>
            <a className="font-extrabold mt-1 text-white text-xl md:text-3xl" href="mailto:michael.ivanhoe@gmail.com">michael.ivanhoe@gmail.com</a>
          </div>
          <hr className="mt-4 bg-slate-400" />
        </section>

        <div className="footer mt-3 w-full flex justify-around items-center">
          <div className="footer text-xs w-full flex">icon provided by&nbsp;<a href="https://www.flaticon.com/authors/joalfa/glyph?author_id=521&type=standard">joalfa</a></div>
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
