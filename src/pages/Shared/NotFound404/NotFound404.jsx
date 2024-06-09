import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div className="container errorPage minHeight">
      <p className="errorCode">404</p>
      <p className="errorTitle">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="errorLink" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default NotFound404;
