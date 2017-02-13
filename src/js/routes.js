import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './app/App';
import Home from './app/views/home/components/index';
import DoctorSearchContainer from './app/views/DoctorSearch/containers/DoctorSearchContainer';
import ConsultingDetailsContainer from './app/views/ConsultingDetails/containers/ConsultingDetailsContainer';
import UploadDocumentsContainer from './app/views/UploadDocuments/containers/UploadDocumentsContainer';
import SecondOpinionContainer from './app/views/SecondOpinion/containers/SecondOpinionContainer';
import SendNoteContainer from './app/views/SendNote/containers/SendNoteContainer';
import ContactUsContainer from './app/views/ContactUs/containers/ContactUsContainer';
import AboutUsContainer from './app/views/AboutUs/containers/AboutUsContainer';
import NewsListContainer from './app/views/HealthDesk/News/containers/NewsListContainer';
import TestimonialsContainer from './app/views/HealthDesk/Testimonials/containers/TestimonialsContainer';
import TestimonialContainer from './app/views/HealthDesk/Testimonials/containers/TestimonialContainer';
import BlogListContainer from './app/views/HealthDesk/Blogs/containers/BlogListContainer';
import BlogContainer from './app/views/HealthDesk/Blogs/containers/BlogContainer';
import CaseStudyListContainer from './app/views/HealthDesk/CaseStudies/containers/CaseStudyListContainer';
import CaseStudyContainer from './app/views/HealthDesk/CaseStudies/containers/CaseStudyContainer';
import NotFoundView from './404/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/doctor-search/:specialtyId" component={DoctorSearchContainer} />
    <Route path="/consulting-details/:specialtyId/:subspecialtyId/:docId" component={ConsultingDetailsContainer} />
    <Route path="/upload-documents/:caseId/:docId" component={UploadDocumentsContainer} />
    <Route path="/second-opinion" component={SecondOpinionContainer} />
    <Route path="/send-note/:caseId" component={SendNoteContainer} />
    <Route path="/contact-us" component={ContactUsContainer} />
    <Route path="/about" component={AboutUsContainer} />
    <Route path="/testimonials" component={ TestimonialsContainer} />
    <Route path="/blogs" component={ BlogListContainer } />
    <Route path="/blog/:id" component={ BlogContainer } />
    <Route path="/testimonial/:id" component={ TestimonialContainer} />
    <Route path="/case-studies" component={ CaseStudyListContainer} />
    <Route path="/case-study/:contentId" component={ CaseStudyContainer } />
    <Route path="/newss" component={NewsListContainer} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
