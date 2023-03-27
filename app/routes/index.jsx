import { Link } from "@remix-run/react";

import homeStyles from "~/styles/home.css";

export default function Index() {
  return (
    <div id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our beta and never loose track of your notes again!</p>
      <div id="cta">
        <Link to="/notes">Try Now !</Link>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
