import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img 
        src="/nextai.png" 
        alt="NextAI Logo" 
        style={{ display: 'inline', height: '30px', marginRight: '10px', verticalAlign: 'middle' }} 
      />
      <strong>NextAI API 使用说明</strong>
    </span>
  ),
  /*
  project: {
    link: 'https://api.nextai.win',
  },
  chat: {
    link: 'https://nextai.date/#connect-section',
  },
  */
  docsRepositoryBase: 'https://nextai.date/#connect-section',

  footer: {
    text: (
      <span>
        <img 
          src="/nextai.png" 
          alt="NextAI Logo" 
          style={{ display: 'inline', height: '25px', marginRight: '10px', verticalAlign: 'middle' }} 
        />
        <a href="https://nextai.date" target="_blank" rel="noopener noreferrer">
          <strong>Powered by NextAI</strong>
        </a>
      </span>
    ),
  },
  head: (
    <>
      <link rel="icon" href="/nextai.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="NextAI API 使用说明" />
      <title>NextAI API 使用说明</title>
    </>
  ),
  
}

export default config
