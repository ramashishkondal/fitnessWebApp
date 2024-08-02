import { useLoaderData } from 'react-router-dom';
import { useDemoApiQuery } from '../../Services/Api/module/demoApi';

export default function Dashboard() {
  // const { data, error } = useDemoApiQuery('');

  const filmData = useLoaderData();
  console.log(filmData);
  return (
    <div className="underline">
      <div>wagwan broski</div>
    </div>
  );
}
