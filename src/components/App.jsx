import Profile from "./Profile/Profile";
import userData from '../userData.json'; 

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
    </>
  );
};
export default App








