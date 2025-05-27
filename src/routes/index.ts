import { Router } from "express";
import { UserRoutes } from "../app/modules/User/user.routes";
import { CourseRoutes } from "../app/modules/courses/courses.routes";
import { SeminarRoutes } from "../app/modules/seminar/seminar.routes";
import { EventRoutes } from "../app/modules/Events/event.routes";
import { TeamRouter } from "../app/modules/Team/team.routes";
import { AuthRoutes } from "../app/modules/auth/auth.routes";
import { CertificateRoutes } from "../app/modules/certificates/certificate.route";
import { Reviews } from "../app/modules/Reviews/clientReview.route";
import { PartnersRoutes } from "../app/modules/partners/partner.routes";
import {  certificatesApplicationsRoutes } from "../app/modules/CertificateApplication/certificateApplication.routes";
import { IndustrialCoursesRoutes } from "../app/modules/IndrustrialCourses/IndrustrialCourses.routes";
import { IndustrialCourseBannerRouter } from "../app/modules/industrial/industrialOfferBanner/industrialOfferBannerRoutes";
import { IndustrialBannerRoutes } from "../app/modules/industrial/industrialBanner/industrialBanner.router";
import { JobsRoutes } from "../app/modules/jobs/job.routes";
import { ApplicationRoutes } from "../app/modules/jobs/Jobaplications/jobaplication.routes";
import { InstructorHereRoutes } from "../app/modules/instructorHire/instructoreHire.routes";
import { PaymentRoutes } from "../app/modules/payments/payment.route";
import { couponRoutes } from "../app/modules/payments/coupon/coupon.routes";
import { CourseScheduleRoutes } from "../app/modules/courses/CourseSchedule/CourseSchedule.routes";


const routes = Router(); 

const moduleRoutes = [
    {
      path: "/users",
      route: UserRoutes,
    },
    
    {
      path: "/courses",
      route: CourseRoutes,
    },
    {
      path: "/schedules",
      route: CourseScheduleRoutes,
    },
    {
      path: "/industrial-courses",
      route: IndustrialCoursesRoutes,
    },
    {
      path: "/seminars",
      route: SeminarRoutes,
    }, 
    {
      path: "/events",
      route: EventRoutes
    },
    {
      path: "/team",
      route: TeamRouter
    }, 
    {
      path: "/auth",
      route: AuthRoutes
    },
    {
      path: "/certificates",
      route: CertificateRoutes
    },
    
    {
      path: "/reviews",
      route: Reviews
    },

    {
      path: "/partners",
      route: PartnersRoutes
    }, 
    {
      path:"/certificatesApplication", 
      route: certificatesApplicationsRoutes
    },
    { 
      path:"/industrial-offer-banner",
      route: IndustrialCourseBannerRouter

    },
    { 
      path:"/industrial-banner",
      route: IndustrialBannerRoutes
    },
    { 
      path:"/industrial-banner",
      route: IndustrialBannerRoutes
    }, 

    {
      path:"/jobs", 
      route: JobsRoutes 
    }, 
    {
      path:"/job-application", 
      route: ApplicationRoutes
    },
    {
      path:"/instructorHire", 
      route: InstructorHereRoutes
    }, 
    {
      path:"/payments", 
      route: PaymentRoutes
    }, 
    {
      path:"/coupons", 
      route: couponRoutes
    }

  ]; 


  moduleRoutes.forEach((route) => routes.use(route.path, route.route));

  export default routes;