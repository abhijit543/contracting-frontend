import { motion } from "framer-motion";

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
  }

]

const ongoingProjectData=[
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
        <div className="about-sec-1-wrapper">
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
      style={{ backgroundColor: "#219c97" }}
      className="py-14 mb-3 mt-3"
    >
      <h1 className="text-center text-primary text-3xl font-bold mb-8">
        Executed Projects
      </h1>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-300 bg-gradient-to-b from-white to-gray-100"
        >
          <table className="min-w-full border-collapse text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-gray-800 to-teal-700 text-white text-md uppercase">
              <tr>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Year Executed
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Project Name
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Packages
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Location of Project
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Client
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Type of Project
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Sq Ft
                </th>
              </tr>
            </thead>

            <tbody>
              {projectsData.map((group, groupIndex) =>
                group.projects.map((proj, index) => (
                  <motion.tr
                    key={`${group.year}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className={`border border-gray-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-50 hover:shadow-md transition-all duration-300`}
                  >
                    {/* Year column only for first project of the year */}
                    {index === 0 ? (
                      <td
                        rowSpan={group.projects.length}
                        className="border border-gray-300 py-3 px-4 font-semibold text-gray-700 text-center bg-teal-100"
                      >
                        {group.year}
                      </td>
                    ) : null}
                    <td className="border border-gray-300 py-3 px-4 font-medium">
                      {proj.projectName}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.packages}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.location}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.client}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.typeOfProject}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.sqft}
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
     <section
      style={{ backgroundColor: "rgb(180, 202, 202)" }}
      className="py-14 mb-3 mt-3"
    >
      <h1 className="text-center text-primary text-3xl font-bold mb-8">
        Ongoing Projects
      </h1>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-300 bg-gradient-to-b from-white to-gray-100"
        >
          <table className="min-w-full border-collapse text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-gray-800 to-teal-700 text-white text-md uppercase">
              <tr>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Year Executed
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Project Name
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Packages
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Location of Project
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Client
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Type of Project
                </th>
                <th className="border border-gray-400 py-3 px-4 text-left">
                  Sq Ft
                </th>
              </tr>
            </thead>

            <tbody>
              {ongoingProjectData.map((group, groupIndex) =>
                group.projects.map((proj, index) => (
                  <motion.tr
                    key={`${group.year}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className={`border border-gray-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-50 hover:shadow-md transition-all duration-300`}
                  >
                    {/* Year column only for first project of the year */}
                    {index === 0 ? (
                      <td
                        rowSpan={group.projects.length}
                        className="border border-gray-300 py-3 px-4 font-semibold text-gray-700 text-center bg-teal-100"
                      >
                        {group.year}
                      </td>
                    ) : null}
                    <td className="border border-gray-300 py-3 px-4 font-medium">
                      {proj.projectName}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.packages}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.location}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.client}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.typeOfProject}
                    </td>
                    <td className="border border-gray-300 py-3 px-4">
                      {proj.sqft}
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
    </main>
  );
}
