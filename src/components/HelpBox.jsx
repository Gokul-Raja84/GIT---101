<<<<<<< HEAD
=======
import { string } from 'prop-types';

>>>>>>> feature-1
import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
<<<<<<< HEAD
      <h2>{title}</h2>
=======
      <h3>{title}</h3>
>>>>>>> feature-1
      <p>{text}</p>
    </article>
  );
}

<<<<<<< HEAD
=======
HelpBox.propTypes = {
  title: string,
  text: string,
};

>>>>>>> feature-1
export default HelpBox;
