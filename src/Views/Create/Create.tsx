import { Outlet } from 'react-router-dom';
import CardComponent from '../../Components/Molecules/CardComponent';

function Create() {
  return (
    <div>
      <CardComponent>
        <Outlet />
      </CardComponent>
    </div>
  );
}

export default Create;
