import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={s.container}>
      <p className={s.text}>Thank you for using our app!</p>
      <iframe
        title="Fun"
        className={s.gif}
        src="https://giphy.com/embed/H1vjPkqdL7liL6O7Bj"
        alt="gif"
      ></iframe>
    </div>
  );
}
