import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { memo } from 'react';
import { toggle } from '../../redux/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header({ type }) {
	const active = { color: 'aqua' };
	const dispatch = useDispatch();
	const { open } = useSelector(({ menu }) => menu);
	return (
		<>
			<header className={type}>
				<h1>
					<Link to='/'>DCODELAB</Link>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							Members
						</NavLink>
					</li>
				</ul>
				<FontAwesomeIcon icon={open ? faClose : faBars} onClick={() => dispatch(toggle())} />
			</header>
		</>
	);
}

export default memo(Header);
