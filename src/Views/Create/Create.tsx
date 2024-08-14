import { Outlet } from 'react-router-dom';
import { ToastContainer, Bounce } from 'react-toastify';
import CardComponent from '../../Components/Molecules/CardComponent';

function Create() {
  return (
    <>
      <div>
        <CardComponent>
          <Outlet />
        </CardComponent>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default Create;
