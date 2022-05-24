import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className=' hover:bg-primary hover:text-white'
        style={{
          borderBottom: match ? '2px solid #6a50b2' : 'none',
          fontWeight: match ? '500' : 'normal',
          color: match ? '#6a50b2' : 'black',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink