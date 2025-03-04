import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span>
      <img 
        src="/openai.png" 
        alt="ChatGPT Share" 
        style={{ display: 'inline', height: '30px', marginRight: '10px', verticalAlign: 'middle' }} 
      />
      <strong>ChatGPT Share 用户使用手册</strong>
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
  //docsRepositoryBase: 'https://nextai.date/#connect-section',

  /*
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
  */
  footer: {
    text: null,  // 或者完全删除这个配置
  },

  feedback: false,  // 禁用右侧的反馈
  editLink: false,  // 禁用右侧的编辑页面链接


  head: (
    <>
      <link rel="icon" href="/openai.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ChatGPT Share 用户使用手册" />
      <title>ChatGPT Share 用户使用手册</title>
    </>
  ),
  
}

export default config
