 
const ProfileTable = ({ profiles }) => {
  return (
    <div className="profile-table-container">
      <table className="table table-bordered border-primary table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Location</th>
            <th scope="col">Profession</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={profile.id}>
              <th scope="row">{index + 1}</th>
              <td>{profile.name}</td>
              <td>{profile.age}</td>
              <td>{profile.location}</td>
              <td>{profile.profession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileTable;
