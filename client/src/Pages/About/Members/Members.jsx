import "./Members.scss";
import React from "react";
import arrow from "../../../assets/arrow2x.png";
import { Grid } from "@mui/material";
import { fetchEventMedia } from "../../../Cloudinary/Cloudinary";
import { useState,useEffect } from "react";

function Members() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [members,setMembers] = useState([
    {
        "asset_id": "7d91af0f67dbe4fc7a9b4e8e740c57c2",
        "public_id": "SaazMembers/Aditya_Ghai",
        "format": "jpg",
        "version": 1721222485,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:25Z",
        "bytes": 1695972,
        "width": 4640,
        "height": 6960,
        "asset_folder": "SaazMembers",
        "display_name": "Aditya Ghai",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222485/SaazMembers/Aditya_Ghai.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222485/SaazMembers/Aditya_Ghai.jpg"
    },
    {
        "asset_id": "bc8370b33f0a24e985469ee47613a6db",
        "public_id": "SaazMembers/Akash_Deep_Saikia",
        "format": "jpg",
        "version": 1721222473,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:13Z",
        "bytes": 89912,
        "width": 853,
        "height": 1280,
        "asset_folder": "SaazMembers",
        "display_name": "Akash Deep Saikia",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222473/SaazMembers/Akash_Deep_Saikia.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222473/SaazMembers/Akash_Deep_Saikia.jpg"
    },
    {
        "asset_id": "4b2b128f98f35da4b5e006fa6700c38d",
        "public_id": "SaazMembers/Akkshan_Singh",
        "format": "jpg",
        "version": 1721222490,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:30Z",
        "bytes": 138781,
        "width": 1156,
        "height": 1156,
        "asset_folder": "SaazMembers",
        "display_name": "Akkshan Singh",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222490/SaazMembers/Akkshan_Singh.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222490/SaazMembers/Akkshan_Singh.jpg"
    },
    {
        "asset_id": "d8d377545faec56facf04c57f1cf955d",
        "public_id": "SaazMembers/Asritha_Gunapati",
        "format": "jpg",
        "version": 1721222480,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:20Z",
        "bytes": 351571,
        "width": 960,
        "height": 960,
        "asset_folder": "SaazMembers",
        "display_name": "Asritha Gunapati",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222480/SaazMembers/Asritha_Gunapati.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222480/SaazMembers/Asritha_Gunapati.jpg"
    },
    {
        "asset_id": "149afb9aa7eaad0682c5d65f277a625b",
        "public_id": "SaazMembers/Deep_Trivedi",
        "format": "jpg",
        "version": 1721222483,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:23Z",
        "bytes": 1183914,
        "width": 5182,
        "height": 4160,
        "asset_folder": "SaazMembers",
        "display_name": "Deep Trivedi",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222483/SaazMembers/Deep_Trivedi.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222483/SaazMembers/Deep_Trivedi.jpg"
    },
    {
        "asset_id": "e473d8ee3fcc8c99b6b8daeb3921ff78",
        "public_id": "SaazMembers/kshiti",
        "format": "jpg",
        "version": 1721222501,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:41Z",
        "bytes": 461654,
        "width": 1778,
        "height": 2610,
        "asset_folder": "SaazMembers",
        "display_name": "kshiti",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222501/SaazMembers/kshiti.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222501/SaazMembers/kshiti.jpg"
    },
    {
        "asset_id": "5214385aaad9b710edaf17c667c64003",
        "public_id": "SaazMembers/Madhav_Saraswat",
        "format": "jpg",
        "version": 1721222506,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:46Z",
        "bytes": 330557,
        "width": 2293,
        "height": 2292,
        "asset_folder": "SaazMembers",
        "display_name": "Madhav Saraswat",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222506/SaazMembers/Madhav_Saraswat.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222506/SaazMembers/Madhav_Saraswat.jpg"
    },
    {
        "asset_id": "19410352e3973486381f0342682da406",
        "public_id": "SaazMembers/Malhar_Patel",
        "format": "jpg",
        "version": 1721222477,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:17Z",
        "bytes": 223801,
        "width": 960,
        "height": 960,
        "asset_folder": "SaazMembers",
        "display_name": "Malhar Patel",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222477/SaazMembers/Malhar_Patel.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222477/SaazMembers/Malhar_Patel.jpg"
    },
    {
        "asset_id": "34bd23a898e45d6c2851fe6df10ec45c",
        "public_id": "SaazMembers/Ovee_Chachad",
        "format": "jpg",
        "version": 1721222499,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:39Z",
        "bytes": 995003,
        "width": 1687,
        "height": 3456,
        "asset_folder": "SaazMembers",
        "display_name": "Ovee Chachad",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222499/SaazMembers/Ovee_Chachad.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222499/SaazMembers/Ovee_Chachad.jpg"
    },
    {
        "asset_id": "4ee41097113fe1ab1d9b4bbd83e6b0e6",
        "public_id": "SaazMembers/Piyush_Deshmukh1",
        "format": "jpg",
        "version": 1721222490,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:30Z",
        "bytes": 2406675,
        "width": 6960,
        "height": 4640,
        "asset_folder": "SaazMembers",
        "display_name": "Piyush Deshmukh1",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222490/SaazMembers/Piyush_Deshmukh1.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222490/SaazMembers/Piyush_Deshmukh1.jpg"
    },
    {
        "asset_id": "a39e5c60aa716f7c5b9847d7430f5c53",
        "public_id": "SaazMembers/Prakriti_Das",
        "format": "jpg",
        "version": 1721222495,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:35Z",
        "bytes": 101096,
        "width": 853,
        "height": 1280,
        "asset_folder": "SaazMembers",
        "display_name": "Prakriti Das",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222495/SaazMembers/Prakriti_Das.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222495/SaazMembers/Prakriti_Das.jpg"
    },
    {
        "asset_id": "0941e43a63567638a261595bcd55e637",
        "public_id": "SaazMembers/Shreya_Melon",
        "format": "jpg",
        "version": 1721222474,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:14Z",
        "bytes": 164233,
        "width": 960,
        "height": 1280,
        "asset_folder": "SaazMembers",
        "display_name": "Shreya Melon",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222474/SaazMembers/Shreya_Melon.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222474/SaazMembers/Shreya_Melon.jpg"
    },
    {
        "asset_id": "19a1f78031fa9bb032d3e3f33b45d982",
        "public_id": "SaazMembers/Virat_Singh",
        "format": "jpg",
        "version": 1721222504,
        "resource_type": "image",
        "type": "upload",
        "created_at": "2024-07-17T13:21:44Z",
        "bytes": 149112,
        "width": 720,
        "height": 727,
        "asset_folder": "SaazMembers",
        "display_name": "Virat Singh ",
        "url": "http://res.cloudinary.com/djy2jlthj/image/upload/v1721222504/SaazMembers/Virat_Singh.jpg",
        "secure_url": "https://res.cloudinary.com/djy2jlthj/image/upload/v1721222504/SaazMembers/Virat_Singh.jpg"
    }
]);

  useEffect(()=>{
    const fetchMemebers= async () =>{
        const fetchedMemebers = await fetchEventMedia("SaazMembers")
        setMembers(fetchedMemebers)
    }
    fetchMemebers();
  },[]);

  console.log(members);
  
  const getTransformedImageUrl = (url) => {
    return url.replace("/upload/", "/upload/w_600,q_50/");
  };

  return (
    <div className="Members_page">
      <div className="members-details" style={{display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap'}}>
        <div className="counsellor">
          <img 
            src="https://res.cloudinary.com/dddirokst/image/upload/v1765443854/qa9nlgfxo9dzz1hpkqbd.jpg" 
            alt="Counsellor"
            style={{ 
                width: "250px",        
                height: "250px",       
                objectFit: "cover",    
                borderRadius: "50%"    
            }} 
          />
          <div className="position">Cultural Counsellor </div>
          <div className="Name">Dr.Amrita Bhattacharjee</div>
        </div>

        <div className="faculty">
          <img 
            src="http://faculty.iiitdmj.ac.in/proPic/Nitish%20pic.jpg" 
            alt="Faculty In-Charge Saaz"
            style={{ 
                width: "250px",        
                height: "250px",       
                objectFit: "cover",    
                borderRadius: "50%"    
            }} 
          />
          <div className="position">Faculty In-Charge </div>
          <br></br>
          <div className="Name">Dr. Nitish Andola</div>
        </div>
      </div>

      <div className="members-title">
        <div className="one"></div>
        <div className="two">Members</div>
        <div className="three"></div>
      </div>

      <div className="members-details">
        <div className="cordinator">
          <img 
            src="https://res.cloudinary.com/dddirokst/image/upload/v1765458525/SaazMembers/Ishwar
i_Maske.jpg"
            alt="Coordinator"
            style={{ 
                width: "250px",        
                height: "250px",       
                objectFit: "cover",    
                borderRadius: "50%"    
            }}
          />
          <div className="position">Coordinator</div>
          <div className="Name">Ishwari Maske</div>
        </div>
        
        <div className="cocs" style={{ display: "flex", gap: "250px", justifyContent: "center", flexWrap: "wrap" }}>

          <div className="co-cordinator1">
            <img 
                src="https://res.cloudinary.com/dddirokst/image/upload/v1765458837/SaazMembers/Akash_
Deep_Saikia.jpg"
                alt="Co-Coordinator"
                style={{ 
                    width: "250px",        
                    height: "250px",       
                    objectFit: "cover",    
                    borderRadius: "50%"    
                }} 
            />
            <div className="position">Co-Coordinator</div>
            <div className="Name">Akash Deep Saikia</div>
          </div>
          <div className="co-cordinator2">
            <img 
                src="https://res.cloudinary.com/dddirokst/image/upload/v1765461034/SaazMembers/Sai_An
kith.jpg"
                alt="Co-Coordinator"
                style={{ 
                    width: "250px",        
                    height: "250px",       
                    objectFit: "cover",    
                    borderRadius: "50%"    
                }}
            />
            <div className="position">Co-Coordinator</div>
            <div className="Name">Ankith Sai</div>
          </div>
        </div>
      </div>

      <div className="bottom-half">
        <div className="working-committe-title">Committee Members</div>
        <div className={`working-committe ${isExpanded ? "expanded" : ""}`}>
          <Grid container spacing={2}>
            {members.map((member, index) => (
              <Grid item key={index} xs={6} sm={6} md={4}>
                <div className="committee-member-tile">
                  <img
                    src={getTransformedImageUrl(member.secure_url)}
                    alt=""
                  />
                  <div className="Name">{member.display_name}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      
      <div className={`toggle-button ${isExpanded ? "up":""}`} onClick={toggleExpand}>
        <img src={arrow} alt="" />
        <div className="more">
            {isExpanded ? "Less" : "more"}
        </div>
      </div>
    </div>
  );
}

export default Members;