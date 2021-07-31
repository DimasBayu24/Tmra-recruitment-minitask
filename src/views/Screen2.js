import React, { useEffect, useState } from "react";
import examplePic from '../assets/img/pic.jpg'
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../components/Header'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import vid from '../assets/vid1.mp4'
import Input from '@material-ui/core/Input';


const Screen2 = () => {
    const location = useLocation();
    const history = useHistory();
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [locationAddress, setLocationAddress] = useState(null);
    const [value, setValue] = useState(location.state.name)
    const [pic, setPic] = useState(examplePic)
    const [videoFile, setVideoFile] = useState(vid);

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setPic(URL.createObjectURL(img))
        }
    } 
    const onVideoChange = (e) => {
        console.log(videoFile);
        if (e.target.files && e.target.files[0]) {
            let vid = e.target.files[0];
            console.log(URL.createObjectURL(vid));
            setVideoFile(URL.createObjectURL(vid))
        }
    } 
    const handleChange = (value) => {
        setValue(value)
    }
    const handleSave = () => {
        history.push("/")
    }
    const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async function (position) {
            console.log(position);
            await setLatitude(position.coords.latitude);
            await setLongitude(position.coords.longitude);
            await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}&zoom=18&addressdetails=1`,
              { mode: 'cors' }
            )
              .then((response) => {
                console.log(response);
                let res = response.json();
                return res;
              })
              .then((data) => {
                console.log(data);
                setLocationAddress(data.display_name);
              })
              .catch((error) => alert(error));
          }, handleLocationError);
        } else {
          alert('Fitur Geolocation tidak didukung oleh browser anda');
        }
      };
    
      const handleLocationError = (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert(
              'Anda tidak mengizinkan untuk akses lokasi, silahkan untuk mengizinkan kembali.'
            );
            break;
          case error.POSITION_UNAVAILABLE:
            alert('Informasi lokasi sedang tidak tersedia, silahkan coba kembali.');
            break;
          case error.TIMEOUT:
            alert(
              'Waktu permintaan akses lokasi telah habis, silahkan coba kembali.'
            );
            break;
          case error.UNKNOWN_ERROR:
            alert('Sedang terjadi kesalahan, silahkan coba kembali.');
            break;
          default:
            alert('Sedang terjadi kesalahan, silahkan coba kembali.');
        }
      };
    return (
        <div className="w-full h-auto  background-screen" >
        <Header />
        <div className="flex flex-row">
            <div className="w-2/12" />
            <div style={{borderRadius: 20}} className="px-5 flex flex-col my-5 w-8/12 bg-white" >
            <div className="flex flex-row" >
                <div className="flex flex-col px-5 py-10" >
                <a style={{paddingBottom: 4, paddingTop: 4}} >Title</a>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Duration</a>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Target Donation</a>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Description</a>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Main Photo</a>
                <div style={{marginTop: 200}} />
                <a style={{paddingBottom: 4, paddingTop: 4}} >Videos(URL)</a>
                <div style={{marginTop: 167}} />
                <button onClick={getLocation} style={{paddingBottom: 4, paddingTop: 4, textAlign: "left"}} >Geolocation(click)</button>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Category</a>
                <a style={{paddingBottom: 4, paddingTop: 4}} >Expected number of beneficiaries</a>
                </div>
                <div className="flex text-left flex-col py-10" >
                    <Input onChange={(e) => handleChange(e.target.value)} value={value} placeholder="Title" />
                    <Input placeholder="Duration" />
                    <Input placeholder="Target Donation" />
                    <Input placeholder="Description" />
                    <Input type="file" accept="image/"  onChange={(e) => onImageChange(e)}  />
                    <img style={{width: 300, height:200}} src={pic}/>
                    <Input accept="video/" type="file" onChange={(e) => onVideoChange(e)} />
                    <video width="300" height="200" controls>
                         <source src={videoFile}/>
                    </video>            
                           
                    <Input placeholder="Geolocation" value={latitude ? locationAddress : null}
 />

                    <Input placeholder="Category" />
                    <Input placeholder="Expected Number" />
                </div>
            </div>
            <Button onClick={handleSave} variant="contained">Save Button</Button>
            <div className="mb-5" />
         {/* <a>{location.state.name}</a>
         <a>{location.state.start} - {location.state.end} </a>
         <a>{location.state.target}</a>
         <a>
         Description:
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </a>
            <img style={{width: 512}} src={pic} />
            <div className="flex flex-row">
            <img style={{width: 128}} src={pic} />
            <img style={{width: 128}} src={pic} />
            </div> */}
        </div>
            <div className="w-2/12" />
        </div>

      
           </div>
    );
}

export default Screen2;