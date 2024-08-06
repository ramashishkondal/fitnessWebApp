import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import PreferenceItem from '../../Components/Molecules/PreferenceItem';
import CustomButton from '../../Components/Atoms/CustomButton';
import { updateUserData } from '../../Store/User';
import { RootState } from '../../Store';

function AddPreferences() {
  // redux use
  const dispatch = useDispatch();
  const { preferences: userPreferences } = useSelector(
    (state: RootState) => state.user
  );

  // state use
  const [preferences, setPreferences] = useState(userPreferences);

  // navigate use
  const navigate = useNavigate();

  // functions
  const handleSelection = useCallback((title: string) => {
    setPreferences((p) =>
      p.map((val) => {
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
        preferences,
      })
    );
    navigate(ROUTES_CONFIG.INTERESTS.path);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-medium mt-1 max-w-[70%] text-center">
        {STRING.ADD_PREFERENCES.heading}
      </p>
      <p className="text-xl text-gray-300 mt-2 w-[70%] text-center">
        {STRING.ADD_PREFERENCES.description}
      </p>
      <div className="flex flex-col w-full items-center my-10">
        {preferences.map((val) => {
          return (
            <PreferenceItem
              key={val.title}
              isSelected={val.selected}
              title={val.title}
              setIsItemSelected={handleSelection}
            />
          );
        })}
      </div>
      <div className="min-w-[60%] mb-8">
        <CustomButton
          text={STRING.ADD_PREFERENCES.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddPreferences;
