import { ReactComponent as GithubIcon } from 'assets/images/github.svg';

import './styles.css';

export function NavBar() {
  return (
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href="https://github.com/vinicius-gomes-dev" target="_blank">
            <div className='dsmovie-contact-container'>
              <GithubIcon />
              <p className='dsmovie-contact-link'>/vinicius-gomes-dev</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}