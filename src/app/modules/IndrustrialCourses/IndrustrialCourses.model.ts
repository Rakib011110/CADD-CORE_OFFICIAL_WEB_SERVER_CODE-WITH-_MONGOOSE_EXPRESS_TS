import { model, Schema } from "mongoose";
import { courseSchema } from "../courses/courses.model";

// const courseSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     slug: { type: String, required: true },
//     categories: { type: String, required: true },
//     duration: { type: String, required: true },
//     lessons: { type: String, required: true },
//     photoUrl: { type: String, required: true },
//     projects: { type: String, required: true },
//     description: { type: String, required: true },

//     schedule: {
//       startingDate: { type: String },
//       mode: { type: String },
//       days: { type: String },
//       time: { type: String },
//     },

//     overview: {
//       overviewDescription: { type: String },
//       videoUrl: { type: String },
//     },

//     courseIncludes: {
//       duration: { type: String },
//       weeklyLiveClasses: { type: String },
//       weeklyClassHours: { type: String },
//     },

//     topicsCovered: [
//       {
//         topicTitle: { type: String },
//         topicDescription: { type: String },
//       },
//     ],

//     softwaresTaught: [
//       {
//         softwareTitle: { type: String },
//         photoUrl: { type: String },
//       },
//     ],

//     expertPanel: {
//       advisors: [
//         {
//           name: { type: String },
//           title: { type: String },
//           photoUrl: { type: String },
//         },
//       ],
//       teachers: [
//         {
//           name: { type: String },
//           role: { type: String },
//           photoUrl: { type: String },
//         },
//       ],
//     },

//     learningProject: [
//       {
//         title: { type: String },
//         description: { type: String },
//         photoUrl: { type: String },
//       },
//     ],

//     freeTrainingSessions: [
//       {
//         title: { type: String },
//         videoUrl: { type: String },
//       },
//     ],

//     // ✅ Newly Added Fields
//     InternationaldemoCertificate: [
//       {
//         certificateTitle: { type: String },
//         certificateOverview: { type: String },
//         photoUrl: { type: String },
//       },
//     ],

//     demoCertificate: [
//       {
//         title: { type: String },
//         photoUrl: { type: String },
//       },
//     ],

//     courseFee: { type: String },

//     faqs: [
//       {
//         question: { type: String },
//         answer: { type: String },
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

export const IndustrialCoursesModel = model("IndustrialCourses", courseSchema);
