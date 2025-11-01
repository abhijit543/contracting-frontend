import { motion } from "framer-motion";
import bgImg from "../../../assets/img/project-bg-img.jpg"
export default function Projects() {
  const projectsData = [
  {
    "year": "2019-2020",
    "projects": [
      {
        "projectName": "Anheuser- Bush InBev",
        "packages": "Demolition works",
        "location": "SEZ Bagmane World Technology",
        "client": "Eleganz Interiors",
        "typeOfProject": "IT",
        "sqft": "20000"
      },
      {
        "projectName": "Pulse Secure - 2F",
        "packages": "Civil & Interior, Electrical, HVAC, FAPA, Furnitures, Chairs and Networking",
        "location": "Bagmane Techpark",
        "client": "Pulse Secure",
        "typeOfProject": "IT",
        "sqft": "35000"
      },
      {
        "projectName": "OYO - 3F",
        "packages": "Electrical, FAPA works",
        "location": "3F, Ranka Junction",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "IT",
        "sqft": "21000"
      },
      {
        "projectName": "JUNIPER - 2F",
        "packages": "Electrical & HVAC works",
        "location": "Prestige Techpark",
        "client": "Eleganz Interiors",
        "typeOfProject": "IT",
        "sqft": "25000"
      },
      {
        "projectName": "Clarivate Analytics (India) Private Limited - 2F",
        "packages": "Electrical works & Sprinkler, FAPA, CCTV",
        "location": "Sarjapur Outer Ring Road",
        "client": "Simpliviworks Offices Pvt Ltd",
        "typeOfProject": "IT",
        "sqft": "18000"
      },
      {
        "projectName": "Royal Oak",
        "packages": "Electrical, Security Systems, PA works",
        "location": "HSR Layout",
        "client": "Royal Oak",
        "typeOfProject": "GC works",
        "sqft": "7650"
      },
      {
        "projectName": "Royal Oak",
        "packages": "Electrical, Security Systems, PA works",
        "location": "Bommanahalli",
        "client": "Royal Oak",
        "typeOfProject": "GC works",
        "sqft": "9944"
      },
      {
        "projectName": "Royal Oak",
        "packages": "Electrical, Security Systems, PA works",
        "location": "Magadi Road",
        "client": "Royal Oak",
        "typeOfProject": "GC works",
        "sqft": "5575"
      },
      {
        "projectName": "Royal Oak",
        "packages": "Electrical, Security Systems, PA works",
        "location": "Nagarbhavi",
        "client": "Royal Oak",
        "typeOfProject": "GC works",
        "sqft": "7592"
      },
      {
        "projectName": "Intel SRR1 - VTT2",
        "packages": "Civil & Interior, Electrical, HVAC, FAPA, CCTV, Furniture, OFA",
        "location": "Devarabeesanahalli",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "IT",
        "sqft": "LAB"
      }
    ]
  },
  {
    "year": "2020-2021",
    "projects": [
      {
        "projectName": "Global Indian International School",
        "packages": "Civil & Interior, Electrical, HVAC, Chairs",
        "location": "Varthur, Whitefield Road",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "GC works",
        "sqft": "Blocks- A,B,C"
      },
      {
        "projectName": "IMS Health Analytics Services Pvt Ltd - 5F",
        "packages": "Civil & Interior, HVAC, Electrical, FAPA, Furnitures",
        "location": "Embassy Techsquare, Outer Ring Road",
        "client": "Savills Property Services",
        "typeOfProject": "IT",
        "sqft": "LAB"
      },
      {
        "projectName": "Pulse Secure - 2F",
        "packages": "Civil & Interior, Electrical, HVAC, FAPA, Furnitures, Chairs and Networking",
        "location": "Bagmane Techpark",
        "client": "Pulse Secure",
        "typeOfProject": "IT",
        "sqft": "15000"
      },
      {
        "projectName": "IMS Health Analytics Services Pvt Ltd - BF to 8F",
        "packages": "Marble works",
        "location": "Embassy Techsquare, Outer Ring Road",
        "client": "Savills Property Services",
        "typeOfProject": "IT",
        "sqft": "Floor - BF to 8F"
      }
    ]
  },
  {
    "year": "2021-2022",
    "projects": [
      {
        "projectName": "Eurofins BioPharma Product Testing India Pvt Ltd",
        "packages": "Civil & Interior, Electrical, HVAC, Furnitures and Chairs",
        "location": "Chitlapakkam, Chennai",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "LAB",
        "sqft": "Floor - Grd, 1st, 2nd"
      },
      {
        "projectName": "Cowrks - 2F",
        "packages": "Interior works, Raceway works, Floor EGA works",
        "location": "RMZ, Bellandur",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "IT",
        "sqft": "30000"
      },
      {
        "projectName": "LIC LAB - 4F & 2F",
        "packages": "Civil & Interior, Electrical, HVAC, Furnitures and FAPA",
        "location": "Embassy Paragon, ITPL Road",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "IT",
        "sqft": "LAB"
      },
      {
        "projectName": "IMS RDS (India) Pvt Ltd - 1F, 7F & 8F",
        "packages": "Civil & Interior, Electrical, HVAC, Furnitures and FAPA",
        "location": "Embassy Techsquare, Outer Ring Road",
        "client": "Savills Property Services",
        "typeOfProject": "IT",
        "sqft": "20000"
      }
    ]
  },
  {
    "year": "2022-2023",
    "projects": [
      {
        "projectName": "Fortinet - GF (Conference Room Renovation works)",
        "packages": "Interior works and Furniture works",
        "location": "The Millennia No 1 & 2 Murphy Road",
        "client": "Fortinet Technologies India Private Limited",
        "typeOfProject": "GC works",
        "sqft": "—"
      },
      {
        "projectName": "Global Indian International School",
        "packages": "Civil & Interior works, Electrical works and HVAC works",
        "location": "Kul Echoloch, Near Balewadi Sports Complex, Nande-Balewadi Road, Pune",
        "client": "Mode",
        "typeOfProject": "GC works",
        "sqft": "LAB"
      },
      {
        "projectName": "Global Indian International School",
        "packages": "Civil & Interior works, Electrical works and HVAC works",
        "location": "202-A & 202-B/1, Sade Satra Nali, Hadapsar, Pune",
        "client": "Mode",
        "typeOfProject": "GC works",
        "sqft": "LAB"
      },
      {
        "projectName": "Global Indian International School",
        "packages": "Civil & Interior works, Electrical works and HVAC works",
        "location": "Survey No. 27, Bannerghatta, Bengaluru",
        "client": "Mode",
        "typeOfProject": "GC works",
        "sqft": "LAB"
      },
      {
        "projectName": "Global Indian International School",
        "packages": "Civil & Interior works, Electrical works and HVAC works",
        "location": "Godrej Garden City, Behind Nirma University, Off S G Highway, Jagatpur, Ahmedabad, Gujarat",
        "client": "Mode",
        "typeOfProject": "GC works",
        "sqft": "LAB"
      }
    ]
  },
 {
    "year":"2023-2024",
    "projects":[
      {
         "projectName": "Ernst &Young Pvt Ltd",
        "packages": " Refurbishment works ",
        "location": "Ernst & Young Services Pvt. Ltd,Tidel Park, 6th & 7th Floor, A Block,(Module 601,701-702) , No.4, Rajiv Gandhi Salai, Taramani,,City : Chennai ",
        "client": "Eleora Electrical & Engineers",
        "typeOfProject": "GC works",
        "sqft": "LAB"
      },
      {
         "projectName": "One World International School - GF ,1F & 2F",
        "packages": "Civil & Interior works ,Electrical works and HVAC works ",
        "location": "One World International School , Sy No:188/3 & 188, 4, Sarjapur Main Road,Dommasandra, Bengaluru,Karnataka 562125.",
        "client": "Mode",
        "typeOfProject": "GC works",
        "sqft": "Wing A & B"
      }
    
    ]
  }
]



  return (
    <main>
      {/* ---------- Section 1 ---------- */}
      <section id="priceSection-1">
        <div className="project-sec-1-wrapper"style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                 url(${bgImg}) no-repeat top center`,
    backgroundSize: "cover"
  }}>
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <a href="/index.html" className="abt-sec-1-a-1">
                  Home
                </a>
                /<a href="#" className="abt-sec-1-a">Projects</a>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">
                  Executed Projects and Ongoing Projects
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Section 2 (Enhanced Table) ---------- */}
 <section
  style={{
    background: "linear-gradient(180deg, #219c97 0%, #176b63 100%)",
    color: "white",
    padding: "60px 0"
  }}
>
  <div className="container mx-auto px-6">
    <h1 className="text-center text-4xl font-bold mb-12">
      Our Projects
    </h1>

    {projectsData.map((group, groupIndex) => (
      <motion.div
        key={group.year}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6 border-l-4 border-yellow-400 pl-3">
          Year: {group.year}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-3">
          {group.projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/10 backdrop-blur-lg mb-1 p-6 rounded-2xl shadow-lg border border-white/30 hover:bg-white/15 transition duration-300"
            >
              <h3 className="text-lg font-bold text-yellow-300 mb-2">
                {proj.projectName}
              </h3>

              <p className="text-sm mb-1 text-white-100">
                <span className="font-semibold text-white">Packages:</span>{" "}
                {proj.packages}
              </p>
              <p className="text-sm mb-1 text-white-100">
                <span className="font-semibold text-white">Location:</span>{" "}
                {proj.location}
              </p>
              <p className="text-sm mb-1 text-white-100">
                <span className="font-semibold text-white">Client:</span>{" "}
                {proj.client}
              </p>
              <p className="text-sm mb-1 text-gray-100">
                <span className="font-semibold text-white">Type:</span>{" "}
                {proj.typeOfProject}
              </p>
              <p className="text-sm text-gray-100">
                <span className="font-semibold text-white">Sq Ft:</span>{" "}
                {proj.sqft}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


    </main>
  );
}
