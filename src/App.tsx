import {useEffect, useState} from 'react'
import './App.css'
import AppVariant from "./app-variant.constans";

function App() {
  useEffect(() => {
    // 处理 favicon
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = AppVariant.logo;
    document.getElementsByTagName('head')[0].appendChild(link);

    // 处理 title
    document.title = AppVariant.title;
  }, [])

  return (
    <div className="App">
      <p>端: {AppVariant.variant}</p>
      <p>是否显示导航栏: {AppVariant.showNavbar.toString()}</p>
      <p>Logo: {AppVariant.logo}</p>
      <p>变体: {JSON.stringify(AppVariant)}</p>
    </div>
  )
}

export default App
