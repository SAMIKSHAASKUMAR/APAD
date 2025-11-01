/******************************************************************************************
 * @file        AboutComponent.jsx
 * @description 'About' main page of the portal with basic HaaS info 
 * @team        SheCodes-Hub (MSITM'26 @ McCombs School of Business, UT Austin)
 * @created     2025-10-01
 * @version     v2.0.0
 **********************************************************************************************************/
import React from "react";

const AboutComponent = () => {
  return (
    <div style={{ width: "80vw", maxWidth: "700px", margin: "2.5rem auto" }}>
      <div className="card">
        <h2 className="card-title">Welcome to Hardware Resource Management Portal</h2>
        <p style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
          {`This project is a proof of concept (PoC) Microservice for Project Management within the Hardware-as-a-Service (HaaS) system.  
It enables users to create new projects, add participants, monitor project progress, and view project-specific hardware allocations in real time.

The service is designed for modularity, scalability, and seamless integration with other HaaS microservices such as User Management and Hardware Inventory.  
It supports RESTful APIs for project creation, user association, and project-level state retrieval—built using Flask, React.js, and MongoDB for a robust backend and responsive frontend.

Use this microservice to create, manage, and collaborate on hardware projects efficiently within the distributed HaaS ecosystem.
`}
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
