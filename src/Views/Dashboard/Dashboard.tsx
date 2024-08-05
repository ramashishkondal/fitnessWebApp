import { useDemoApiQuery } from '../../Services/Api/module/demoApi';

export default function Dashboard() {
  const { data, error } = useDemoApiQuery('');
  console.log(data, error);
  return (
    <div className="underline">
      <div>wagwan broski</div>
    </div>
  );
}
