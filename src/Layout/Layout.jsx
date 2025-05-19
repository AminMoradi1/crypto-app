import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
        <header>
            <h1>Crypto App</h1>
            <p>AminMoradi | learning React.js</p>
        </header>
        {children }
        <footer>
            <p>Developed by AminMoradi with Love</p>
        </footer>
    </>
  )
}

export default Layout