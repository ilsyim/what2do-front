// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <div>
        <p>add the bored api "https://www.boredapi.com/documentation"</p>
        <p>make divs to show the suggetions</p>
        <p>this is an app to help you decide what to do on solo dates with yourself or with others!</p>
      </div>
      
    </main>
  )
}

export default Landing
