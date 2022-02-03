import s from './Header.module.css';

function Header() {
	return (
		<header className={s.header}>
			<img src='https://pbs.twimg.com/media/CHjFLrpVAAEweiT.jpg' alt='logo'></img>
	  </header>
	);
}

export default Header;