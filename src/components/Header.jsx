  export default function Header({ openModal, user, onLogout }) {
    return (
      <header className="header">
        <div className="header_div-first">
          <img className="header_div-first-img" src="/img/logo.png" />

          <nav className="header_div-first-nav">
            <a className="header_div-first-nav-a" href="#">
              Who we are
            </a>
            <a className="header_div-first-nav-a" href="#">
              Contacts
            </a>
            <a className="header_div-first-nav-a" href="#">
              Menu
            </a>
          </nav>
        </div>

        <div className="header_div-second">
          {user ? (
            <>
              <span className="header-username">{user.username}</span>
              <button onClick={onLogout} className="header_div-second-btn logout">
                Log out
              </button>
              <img
                className="header_div-second-img"
                src="/img/user.png"
                alt="user avatar"
              />
            </>
          ) : (
            <>
              <button onClick={openModal} className="header_div-second-btn">
                Sign Up
              </button>
              <img
                className="header_div-second-img"
                src="/img/user.png"
                alt="user avatar"
              />
            </>
          )}
        </div>
      </header>
    );
  }
