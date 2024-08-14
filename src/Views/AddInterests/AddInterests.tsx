import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import InterestItem from '../../Components/Molecules/InterestItem';
import CustomButton from '../../Components/Atoms/CustomButton';
import { updateUserData } from '../../Store/User';
import { RootState } from '../../Store';

function AddInterests() {
  // redux use
  const dispatch = useDispatch();
  const { interests: userInterests } = useSelector(
    (state: RootState) => state.user
  );

  // state use
  const [interests, setInterests] = useState(userInterests);

  // navigate use
  const navigate = useNavigate();

  // functions
  const handleSelection = useCallback((title: string) => {
    setInterests((i) =>
      i.map((val) => {
        if (val.title === title) {
          return { ...val, selected: !val.selected };
        }
        return val;
      })
    );
  }, []);
  const handleSubmit = () => {
    dispatch(
      updateUserData({
        interests,
      })
    );
    navigate(ROUTES_CONFIG.GENDER.path);
  };

  return (
    <div className="flex flex-1 items-center flex-col">
      <p className="text-4xl font-medium mt-1 max-w-[70%] text-center">
        {STRING.ADD_INTERESTS.heading}
      </p>
      <div className="flex flex-wrap w-full max-w-[500px] items-center justify-center mt-8">
        {interests.map((val) => {
          return (
            <InterestItem
              key={val.title}
              icon={val.icon}
              title={val.title}
              isSelected={val.selected}
              setItemSelected={handleSelection}
            />
          );
        })}
      </div>
      <div className="w-[60%] my-12">
        <CustomButton
          text={STRING.ADD_INTERESTS.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddInterests;
