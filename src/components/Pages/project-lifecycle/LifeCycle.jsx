import { Link } from "react-router-dom";
import "./LifeCycle.css";

export default function LifeCycle() {
  return (
    <main>
      {/* ---------- Section 1 ---------- */}
      <section>
        <div className="about-sec-1-wrapper">
          <div className="container">
            <div className="about-sec-1-content-wrap">
              <div>
                <Link to="/" className="abt-sec-1-a-1">
                  Home
                </Link>{" "}
                /<span className="abt-sec-1-a"> Project LifeCycle</span>
              </div>
              <div>
                <h1 className="abt-sec-1-h1">Project Life Cycle</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Project Life Cycle Section ---------- */}
      <section className="lifecycle-list-section">
        <div className="container">
          <h2 className="lifecycle-title">Our Project Life Cycle</h2>

          <ol className="lifecycle-list">
            {/* DESIGN */}
            <li>
              <h3>DESIGN</h3>
              <ul>
                <li>
                  Design coordination with the Architects, Consultants for Shop
                  Drawing Approvals and Sample selection.
                </li>
                <li>
                  Review of the proposed GFC’s from constructability and match
                  to requirements. Highlight if any mismatch and resolve
                  accordingly.
                </li>
                <li>
                  Verification of the BOQ’s in parallel and highlight if any
                  variations.
                </li>
              </ul>
            </li>

            {/* PROCUREMENT */}
            <li>
              <h3>PROCUREMENT</h3>
              <ul>
                <li>Finalisation of the Vendors / suppliers.</li>
                <li>Set expectations on Quality and schedules.</li>
                <li>
                  Vendors / Suppliers finalisation capturing all the terms &
                  conditions including warranty finalisation from OEMs post DLP.
                </li>
              </ul>
            </li>

            {/* MOBILISATION */}
            <li>
              <h3>MOBILISATION</h3>
              <ul>
                <li>Obtain necessary permits & Approvals.</li>
                <li>Shop Drawings Approval, Mock ups & samples.</li>
                <li>
                  Logistics Plan (Debris management, Site Storage, Men &
                  Material movement).
                </li>
                <li>Deployment of separate teams for each floor.</li>
              </ul>
            </li>

            {/* CONSTRUCTION */}
            <li>
              <h3>CONSTRUCTION</h3>
              <ul>
                <li>On site construction activities.</li>
                <li>Schedule Management & Tracking of Orders.</li>
                <li>Quality Management and Risk Assessment.</li>
                <li>Periodic reporting.</li>
              </ul>
            </li>

            {/* CLOSEOUT */}
            <li>
              <h3>CLOSEOUT</h3>
              <ul>
                <li>Liaising with FM team, PM for Training & Hand-over.</li>
                <li>Reconciliation of the project spend.</li>
                <li>Punch list closure and As built documentation.</li>
                <li>Close out report.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
