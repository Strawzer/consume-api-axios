import axios from 'axios';
import React, {useState, useEffect} from 'react';

interface Patient {
  mrn: string;
  id_patient: number;
  first_name: string;
  last_name: string;
  dob: Date;
  gender: string;
  phone: string;
  address: string;
  line2: string;
  zip: number;
  is_enabled: boolean;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
  child_updated_at: Date;
  last_update: Date;
  Clinic_id_clinic: number;
  site_name: string;
  active_wounds: number;
  access_enabled: boolean;
}
const patientsUrl = "https://dev.ekareinc.com/api/1.14/web/patients?clinic=1105&limit=25";


const PatientsList: React.FC = () => {
  const [patientsData, setPatientsData] = useState<Patient[]>();

  useEffect( () => {
    getPatientsData();
  }, []);

  const getPatientsData = async () => {
    axios.get(patientsUrl, {headers: {
      api_pass: "7c89ad287e0ba21d58647201dc8b3c69",
      api_key: "13e6b8b4168ed280993f3a6f167d983a",
      user: "Akram21",
      clinic: "1100"
    }})
      .then( response => {
        const patients = response.data as Patient[];
        setPatientsData(patients);
      })
      .catch( (error) => {
        console.log(error)
      });
  };
  return (
    <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">MRN</th>
              <th scope="col">Site Name</th>
              <th scope="col">Active Wounds</th>
            </tr>
          </thead>
          <tbody>
            {
              patientsData && patientsData.map((p) =>
                {
                  return(
                  <tr key={p.id_patient}>
                    <th scope="row">{p.id_patient}</th>
                    <td>{p.first_name}</td>
                    <td>{p.last_name}</td>
                    <td>{p.dob}</td>
                    <td>{p.gender}</td>
                    <td>{p.address} {p.line2}</td>
                    <td>{p.mrn}</td>
                    <td>{p.site_name}</td>
                    <td>{p.active_wounds}</td>
                  </tr>
                  );
                })
            }
          </tbody>
        </table>
  );
}

export default PatientsList;