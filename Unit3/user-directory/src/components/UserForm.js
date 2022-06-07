import { useFormik, Field } from 'formik';

const UserForm = (props) => {

  const {data, setData} = props;

  const formik = useFormik({
    initialValues: {
      name: {
        first: '',
        last: '',
      },
      city: '',
      country: '',
      employer: '',
      title: '',
      favoriteMovies: ["","",""],
    },
    onSubmit: values => {
      let newData = [...data, values];
      debugger;
      setData(newData);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="name.first"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name.first}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="name.last"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name.last}
      />

      <label htmlFor="city">City</label>
      <input
        id="city"
        name="city"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.city}
      />

      <label htmlFor="country">Country</label>
      <input
        id="country"
        name="country"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.country}
      />

      <label htmlFor="employer">Employer</label>
      <input
        id="employer"
        name="employer"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.employer}
      />

      <label htmlFor="title">Job Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="favoriteMovies">Favorite Movies:</label>
      <input
        id="favoriteMovies"
        name="favoriteMovies[0]"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.favoriteMovies[0]}
      />

      <input
        id="favoriteMovies"
        name="favoriteMovies[1]"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.favoriteMovies[1]}
      />

      <input
        id="favoriteMovies"
        name="favoriteMovies[2]"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.favoriteMovies[2]}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
