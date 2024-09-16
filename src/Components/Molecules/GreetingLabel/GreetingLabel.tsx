import { useEffect, useState } from 'react';
import { GreetingLabelProps } from './types';

function GreetingLabel({ name }: GreetingLabelProps) {
  // state use
  const [greeting, setGreeting] = useState('');

  // Update greeting based on time
  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('morning');
    } else if (currentHour < 18) {
      setGreeting('afternoon');
    } else {
      setGreeting('evening');
    }
  };
  // effect use
  useEffect(() => {
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Check every minute
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <p className="text-4xl font-semibold">{`Good ${greeting}, ${name}`}</p>
    </div>
  );
}

export default GreetingLabel;
