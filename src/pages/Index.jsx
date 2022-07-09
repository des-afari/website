import React from 'react'
import Header from '../components/Header'
import { ReactComponent as Code } from '../assets/svg/code.svg'
import { ReactComponent as Web } from '../assets/svg/web.svg'
import { ReactComponent as Blockchain } from '../assets/svg/blockchain.svg'
import { ReactComponent as Devops } from '../assets/svg/devops.svg'

import '../styles/indexPage.css'

const Index = () => {
  return (
    <div className='index__container'>
        <Header />
        <div className='index'>
            <section className='index__main'>
                <div className='index__main__left'>
                    <h1>HI, I'M DESMOND AFARI</h1>
                </div>
                <div className='index__main__right'>
                    <Code />
                    <p>I am a software developer based in Ghana, West Africa. I specialize in devops engineering and web development with over 5 years of experience in each. My programming languages of choice are python and javascript. My hobbies include writing code and watching movies. I also enjoy playing video games.</p>
                </div>
            </section>
            <section className='index__side'>
                <div className='index__side__main'>
                    <div>
                      <Devops />
                      <h3>Devops Engineering</h3>
                      <p>With the help of electron, I possess the ability to create any desktop application you may require.</p>
                    </div>
                    <div>
                      <Web />
                      <h3>Web Development</h3>
                      <p>Using texhnologies like html, css, javascript and react, I can create any website you might require.</p>
                    </div>
                    <div>
                      <Blockchain />
                      <h3>Blockchain Development</h3>
                      <p>I also specialize in react native and possess the ability to create any mobile phone application you may require.</p>
                    </div>
                </div>
        </section>
        </div>
    </div>
  )
}

export default Index