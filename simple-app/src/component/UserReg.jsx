import React, { useState } from 'react';

export default function UserReg() {
  const [data, setData] = useState({
    name: '',
    lastname:'',
    email: '',
    password: '',
    dob: '',
    phn:'',
    course:'',
    Duration:''

  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div>
      {!loading ? (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={(e) =>
              setData({ ...data, name: e.target.value })
            }
          />
          <br></br>
          <br></br>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            value={data.lastname}
            onChange={(e) =>
              setData({ ...data, lastname: e.target.value })
            }
          />

          <br />
          <br />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
          />

          <br />
          <br />

          <label>DOB:</label>
          <input
            type="date"
            value={data.dob}
            onChange={(e) =>
              setData({ ...data, dob: e.target.value })
            }
          />

          <br />
          <br />
          <label>Phone Number:</label>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            value={data.phn}
            onChange={(e) =>
              setData({ ...data, phn: e.target.value })
            }
          />
          <br></br>
          <br></br>
          <label>Choose the Course u want to enroll:</label>
          <select name='course'value={data.course}
            onChange={(e) =>
              setData({ ...data, course: e.target.value })
            }>
          <option>Select</option>
          <option>Java</option>
          <option>Course</option>
          
          </select>
          <br></br><br></br>
          <input    type="radio"    name="Duration"   value="12 month"value={data.Duration}
            onChange={(e) =>
              setData({ ...data, Duration: e.target.value })
            }/>12 Month<br></br>
          <input  type="radio"    name="Duration"   value="6 month"value={data.Duration}
            onChange={(e) =>
              setData({ ...data, Duration: e.target.value })
            }/>6 Month<br></br>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <p>
            Name: <strong>{data.name}</strong>
          </p>
          <p>
            Last Name:{data.lastname}
          </p>
          <p>
            Email: <strong>{data.email}</strong>
          </p>
          <p>
            DOB: <strong>{data.dob}</strong>
          </p>
          <p>
            Phone NUmber:{data.phn}
          </p>
          <p>
            Course:{data.course}
          </p>
          <p>
            Duration:{data.Duration}
          </p>
        </>
      )}
    </div>
  );
}
