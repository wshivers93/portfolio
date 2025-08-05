import React from 'react';
import { Section } from '~/components/Section';

export function Home() {
  return (
    <article className="flex flex-col justify-center gap-8">
      <Section
        header={
          <h1>Hi, my name is Will</h1>
        }
        centerContent
        headerBorder={false}
      >
        <div className="flex flex-row gap-4">
          <a href="https://github.com/wshivers93">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/william-shivers-0a133461">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>
      </Section>

      <Section
        header={
          <h2>About Me</h2>
        }
      >
        <p>
          I am a software engineer with a passion for solving complex problems. Professionally I currently work mostly with React and TypeScript, but I'm always eager to learn new technologies and improve my skills. In my free time, I enjoy too many things. Exploring new programming languages, reading, gaming, working out, and spending time with my wife and two kids.
        </p>
      </Section>

      <Section
        header={
          <h2>Career</h2>
        }
      />

      <Section
        header={
          <>
            <h3>Wellhub</h3>
            <p>February 2018 - April 2020</p>
          </>
        }
        headerBorder={false}
      >
        <p>
          My first job was at Wellhub (formerly Gympass) where I started as the IT guy. I had always wanted to be a software engineer, but had not had any luck finding a role. I didn't do an internship in college and my Github was empty, so I struggled to separate myself from all the other new graduates looking for a job. After a few frustrating months of searching for a job, I reached out to a friend who had graduated a year before me for advice. He told me at his company all entry level techies started in customer support for a year or so and then were transitioned to the role they wanted, so I should try broadening my search to other roles. I started applying to IT roles and eventually received an offer from Wellhub.
        </p>
        <p>
          I immediately started looking for opportunites to take on coding projects and didn't have to wait long to find one. A few months in to me running IT for the US branch of this company (yeah I wasn't qualified for that but we figured it out) the head of operations wanted a dashboard that could be displayed on TV's around the office for the sales team to reference.
        </p>
      </Section>
    </article>
  );
}

