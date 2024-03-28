import React from "react";
import Sidebar from "../components/common/Sidebar";
import Home from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Footer from "../components/common/Footer";

import JopOpening from "../pages/JobOpening/JopOpening";
import JopOpeningAdd from "../pages/JobOpening/JopOpeningAdd";
import JopOpeningEdit from "../pages/JobOpening/JopOpeningEdit";
import JopOpeningView from "../pages/JobOpening/JopOpeningView";
import Users from "../pages/Users/Users";
import UsersAdd from "../pages/Users/UsersAdd";
import UsersEdit from "../pages/Users/UsersEdit";
import UsersView from "../pages/Users/UsersView";
import Submissions from "../pages/Submission/Submissions";
import SubmissionsReview from "../pages/Submission/SubmissionsReview";
import SubmissionsView from "../pages/Submission/SubmissionsView";

import Offers from "../pages/Offers/Offers";
import OffersAdd from "../pages/Offers/OfferAdd";
import OffersEdit from "../pages/Offers/OfferEdit";
import OffersView from "../pages/Offers/OfferView";

import Applications from "../pages/Applications/Applications";
import ApplicationsView from "../pages/Applications/ApplicationsView";
import ApplicationsChange from "../pages/Applications/ApplicationsChange";
import Department from "../pages/Department/Department";
import DepartmentAdd from "../pages/Department/DepartmentAdd";
import DepartmentEdit from "../pages/Department/DepartmentEdit";

import Assessment from "../pages/Assessments/Assessment";
import AssessmentView from "../pages/Assessments/AssessmentView";
import CandidateAssessmentAdd from "../pages/Assessments/CandidateAssessment/CandidateAssessmentAdd";
import CandidateAssessmentEdit from "../pages/Assessments/CandidateAssessment/CandidateAssessmentEdit";
import RecruiterAssessmentAdd from "../pages/Assessments/Recruiter'sAssessment/RecruiterAssessmentAdd";
import InterviewerAssessmentAdd from "../pages/Assessments/InterviewerAssessment/InterviewerAssessmentAdd";
import RecruiterAssessmentEdit from "../pages/Assessments/Recruiter'sAssessment/RecruiterAssessmentEdit";
import InterviewerAssessmentEdit from "../pages/Assessments/InterviewerAssessment/InterviewerAssessmentEdit";

import Candidates from "../pages/Candidates/Candidates";
import CandidateAdd from "../pages/Candidates/CandidateAdd";
import CandidateEdit from "../pages/Candidates/CandidateEdit";
import CandidateView from "../pages/Candidates/CandidateView";
import Interview from "../pages/Interview/Interview";
import InterviewView from "../pages/Interview/InterviewView";
import FormalInterview from "../pages/Interview/FormalInterview";
import RecordInterview from "../pages/Interview/RecordInterview";
import LiveInterview from "../pages/Interview/LiveInterview";
import LogAnInterview from "../pages/Interview/LogAnInterview";
import Clients from "../pages/clients/Clients";
import ClientAdd from "../pages/clients/ClientsAdd";
import ClientEdit from "../pages/clients/ClientsEdit";
import ClientView from "../pages/clients/ClientsView";
function Admin({ handleLogout }) {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <Sidebar onLogout={handleLogout}/>
        <div className="h-screen flex-grow-1 overflow-y-lg-auto">
          <main className="py-6 bg-surface-secondary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Job Opening */}
              <Route path="/jobOpening" element={<JopOpening />} />
              <Route path="/jobOpening/add" element={<JopOpeningAdd />} />
              <Route path="/jobOpening/edit" element={<JopOpeningEdit />} />
              <Route path="/jobOpening/view" element={<JopOpeningView />} />

              {/* {/ Clients /} */}
              <Route path="/clients" element={<Clients />} />
              <Route path="/clients/add" element={<ClientAdd />} />
              <Route path="/clients/edit" element={<ClientEdit />} />
              <Route path="/clients/view" element={<ClientView />} />

              {/* {/ Offers /} */}
              <Route path="/offer" element={<Offers />} />
              <Route path="/offers/add" element={<OffersAdd />} />
              <Route path="/offers/edit" element={<OffersEdit />} />
              <Route path="/offers/view" element={<OffersView />} />

              {/* {/ Applications /} */}
              <Route path="/applications" element={<Applications/>}/>
              <Route path="/applications/view" element={<ApplicationsView/>}/>
              <Route path="/applications/change" element={<ApplicationsChange/>}/>

              {/* {/ Department /} */}
              <Route path="/department" element={<Department/>}/>
              <Route path="/department/add" element={<DepartmentAdd/>}/>
              <Route path="/department/edit" element={<DepartmentEdit/>}/>

              {/*Assessment */}
              <Route path="/assessment" element={<Assessment />} />
              <Route path="/assessment/view" element={<AssessmentView />} />

              {/* {/ CandidateAssessment /} */}
              <Route path="/assessment/candidateadd" element={<CandidateAssessmentAdd />} />
              <Route path="/assessment/candidateedit" element={<CandidateAssessmentEdit />} />

              {/* {/ RecruiterAssessment /} */}
              <Route path="/assessment/recruiteradd" element={<RecruiterAssessmentAdd />} />
              <Route path="/assessment/recruiteredit" element={<RecruiterAssessmentEdit />} />

              {/* {/ InterviewerAssessment /} */}
              <Route path="/assessment/intervieweradd" element={<InterviewerAssessmentAdd />} />
              <Route path="/assessment/intervieweredit" element={<InterviewerAssessmentEdit />} />

              {/* {/ Candidates /} */}
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/candidates/add" element={<CandidateAdd />} />
              <Route path="/candidates/edit" element={<CandidateEdit />} />
              <Route path="/candidates/view" element={<CandidateView />} />

              {/* {/ Interview /} */}
              <Route path="/interview" element={<Interview />} />
              <Route path="/interview/formal" element={<FormalInterview />} />
              <Route path="/interview/record" element={<RecordInterview />} />
              <Route path="/interview/live" element={<LiveInterview />} />
              <Route path="/interview/logan" element={<LogAnInterview />} />
              <Route path="/interview/view" element={<InterviewView />} />

              {/* Submissions */}
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/submissions/review" element={<SubmissionsReview />} />
              <Route path="/submissions/view" element={<SubmissionsView />} />

               {/* Users */}
              <Route path="/users" element={<Users />} />
              <Route path="/users/add" element={<UsersAdd />} />
              <Route path="/users/edit" element={<UsersEdit />} />
              <Route path="/users/view" element={<UsersView />} />

            </Routes>
            <Footer />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
