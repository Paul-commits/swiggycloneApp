import Login from './login';
import Modal from '../Components/Modal/modal';
import { useSelector, useDispatch} from 'react-redux';
import { disableSignIn } from '../Slices/signinSlice';
import { SigninSelector } from '../Types/Interface';

const SignIn : React.FC<{}> = () => {

  const dispatch = useDispatch()

  const signinInfo = useSelector((state: SigninSelector) => state.signIn.isSigninClicked);

  const handleModalClose = () => {
    dispatch(disableSignIn())
  };

  return (
    <div>
      {signinInfo &&(
        <Modal onClose={handleModalClose}>
            <Login />
        </Modal>
      )}
    </div>
  );
}

export default SignIn