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
          <a href="https://github.com/wshivers93" aria-label='github profile'>
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/william-shivers-0a133461" aria-label='linkedin profile'>
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
          I am a software developer with a passion for solving complex problems. For most of my career I have worked with React and TypeScript, but I'm always eager to learn new technologies and broaden my skills.
        </p>
        <p>
          In my free time, I enjoy far too many things. Exploring new programming languages, reading, gaming, working out, and spending time with my wife and two kids.
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
          My first job was at Wellhub(formerly Gympass) where I started as the IT guy.I had always wanted to be a software developer, but had not had any luck finding a role.I didn't do an internship in college and my Github was empty, so I struggled to separate myself from all the other new graduates. After a few frustrating months of job hunting, I reached out to a friend who had graduated a year before me for advice. He told me at his company all new graduates started in customer support for a year or so and then were transitioned to the role they wanted. I broadened my search to other roles and eventually received an offer from Wellhub.
        </p >
        <p>
          I immediately started looking for opportunites to take on coding projects whenever I had time. I built a simple dashboard using Python and Django to display sales stats around the office. I also built a Python script to automate the onboarding process for new customers. These two projects caught the attention of the analytics team and I was able to transition to a role as a data analyst. I continued writing Python scripts to automate data processing and reports. Once COVID hit, I was laid off along with the rest of the analytics team.
        </p>
      </Section >

      <Section
        header={
          <>
            <h3>Ledge</h3>
            <p>September 2020 - May 2022</p>
          </>
        }
        headerBorder={false}
      >
        <p>
          I spent unemployment learning and working on side projects and eventually landed a job at Ledge. They had a Wordpress website they wanted to customize and eventually migrate to a React app. For most of my time at Ledge I was the only developer. I worked closely with Marketing, Sales, and many executives to deliver many new features using PHP and JavaScript
        </p>
        <p>
          I built custom pages in order include umbrellas on the site. At the time we used a Wordpress plugin to manage products, however the umbrellas had so many customizations that the plugin could not handle them. So I integrated directly with the e-commerce platform's APIs to retrieve the data I needed to display the products on the site. I also wrote lot's of Javascript to handle customer interactions with the page, product customization selections, and cart actions.
        </p>
        <p>
          Another major feature I worked on was the ability for customers to add complimentary products to their cart without having to navigate away from the product they were currently viewing. For example, if a customer was viewing a chair for their pool they could also add a table or pillows for that chair to their cart. This change resulted in an increase in our products per transaction metric (from ~1.2 to ~1.5).
        </p>
        <p>
          A few months before I left, another developer was hired and we started designing and building a POC for the migration to React. Unfortunately this project always got pushed back in favor of new features or last minute requests so we never had the chance to implement this change.
        </p>
      </Section>

      <Section
        header={
          <>
            <h3>Amazon Web Services (AWS)</h3>
            <p>May 2022 - Present</p>
          </>
        }
        headerBorder={false}
      >

      </Section>
    </article >
  );
}

