import axios from 'axios';
import React, { useState } from 'react';
const ListingSubForm = () => {
  // const [file, setFile] = useState(null);
  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   if (selectedFile && selectedFile.type === 'application/pdf') {
  //     setFile(selectedFile);
  //   } else {
  //     alert('Please select a PDF file.');
  //   }
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (file) {
  //     // Handle file submission here
  //     console.log('File submitted:', file);
  //   } else {
  //     alert('Please upload a PDF file.');
  //   }
  // };


  const [formData, setFormData] = useState({
    file: null,
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  };



  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', formData.file);
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('unit', formData.unit);
    data.append('leaseInfo', formData.leaseInfo);

    try {
      const response = await axios.post('http://api.scholar-suites.com:4000/api/listing', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Reset the form after successful submission
      setFormData({
        file: null,
      
      });
      alert('list file submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Upload PDF:
          <input
           type="file"
            accept="application/pdf"
             onChange={handleFileChange}
                name="file"
              style={styles.input} />
        
        </label>
        <button
        class="button-29" 
        type="submit" >Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
  },
  input: {
    marginTop: '0.5rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
//   button: {
//     marginTop: '1rem',
//     padding: '0.5rem 1rem',
//     fontSize: '1rem',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
};

export default ListingSubForm;