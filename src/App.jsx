import {useEffect, useState} from 'react'

import ExternalLinkIcon from '/public/assets/external-link.svg?react'

import './index.css'

const APPS = [
  {
    name: 'Ajwain',
    id: 'ajwain',
    url: 'https://rp-ajwain.vercel.app/',
    description: 'Project management tool.',
    codeLinks: [
      {
        title: 'Server',
        url: 'https://github.com/rituraj-pritish/ajwain-server'
      },
      {
        title: 'Client',
        url: 'https://github.com/rituraj-pritish/ajwain-Client'
      }
    ]
  },
  {
    name: 'Fashion',
    id: 'fashion',
    url: 'https://fashion-ecom-inky.vercel.app/',
    description: 'E-commerce web application.',
    codeLinks: [
      {
        title: 'Client',
        url: 'https://github.com/rituraj-pritish/fashion'
      }
    ]
  },
  {
    name: 'Watchbox',
    id: 'watchbox',
    url: 'https://watchbox-nu.vercel.app/',
    description: 'Media database explorer.',
    codeLinks: [
      {
        title: 'Client',
        url: 'https://github.com/rituraj-pritish/watchbox'
      }
    ]
  },
]

function GithubLinks({links}) {
  return (
    <div className='githubLinks'>
      {links.map(function({title, url}) {
        return <a key={url} href={url} alt={title} target='_blank'>{title}</a>
      })}
      <div className='githubLogo'>
        <img src={'/assets/github-logo.webp'} alt='github' />
      </div>
    </div>
  )
}

function Navbar({
  activeSection,
  onSectionClick
}) {
  return(
    <div className='navbar'>
      <div className='navbarContent'>
        {APPS.map(function(project) {
          const isActive = activeSection.includes(project.id);

          return (
            <a
              key={project.id}
              className={isActive ? 'active' : ''}
              href={`#${project.id}`}

              onClick={function() {
                onSectionClick(project.id)
              }}
            >
              {project.name}
            </a>
          )
        })}
      </div>
    </div>
  )
}

function Project(props) {
  const {
    isActive,

    id,
    name,
    description,
    url,
    codeLinks,
  } = props;

  return (
    <section id={id} className={['project', isActive ? 'active' : ''].join(' ')}>
      <div className='projectHeader'>
        <h3>{name}</h3>
        <GithubLinks links={codeLinks} />
      </div>

      <a className='projectLink' href={url} target='_blank'>
        <img
          className='projectImg'
          src={`/assets/${id}-1.png`}
          alt={name}
        />
        <div className='projectOverlay'>
          <p>Visit Site</p>
          <ExternalLinkIcon/>
        </div>
      </a>

      <p className='projectDescription'>{description}</p>
    </section>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState(
    window.location.hash ||
      APPS[0].id
  )

  return (
    <>
    <Navbar
      activeSection={activeSection}
      onSectionClick={function(section) {
        setActiveSection(section)
      }}
    />
    <div className='app'>
      {APPS.map(function(project) {
        return (
          <Project
            key={project.id}
            isActive={activeSection.includes(project.id)}
            {...project}
          />
        )
      })}
    </div>
    </>
  )
}

export default App
