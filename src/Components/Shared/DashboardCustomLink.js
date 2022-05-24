import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function DashboardCustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className=' hover:bg-primary hover:text-white'
        style={{
          background: match ? '#8c84f9' : '',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default DashboardCustomLink;
