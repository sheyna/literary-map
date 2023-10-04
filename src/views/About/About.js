import { useEffect } from 'react';

function About({setShowDecorativeTitle}) {

  useEffect(function() {
    setShowDecorativeTitle(false);
  }, [setShowDecorativeTitle]);

  return (
    <div>
      about
    </div>
  )
}

export default About
