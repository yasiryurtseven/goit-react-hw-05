import { NavLink } from 'react-router-dom';
import clsx from 'clsx'; // Eğer yüklüyse sınıfları birleştirmek için kolaylık sağlar
import css from './Navigation.module.css'; // İsteğe bağlı CSS dosyan

const Navigation = () => {
  // NavLink için aktiflik kontrolü yapan fonksiyon
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

// İŞTE EKSİK OLAN SATIR BURASI:
export default Navigation;