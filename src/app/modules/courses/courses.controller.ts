import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CourseServices } from "./courses.services";

const createCourse = catchAsync(async (req, res) => {
  const course = await CourseServices.createCourseInDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course Created Successfully",
    data: course,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const courses = await CourseServices.getAllCoursesFromDb();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Courses fetched successfully",
    data: courses,
  });
}); 


const getACourse = catchAsync(async (req, res) => {
  const courseSlug = req.params.slug; 
  const course = await CourseServices.getACourseFromDb(courseSlug);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course fetched successfully",
    data: course,
  });
});

const getACourseByID = catchAsync(async (req, res) => {
  const id = req.params.id; 
  const course = await CourseServices.getSingleCourseIDFromDb(id);


  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Course fetched successfully",
    data: course,
  });
});


const updateCourse = catchAsync(async (req ,res) => {
  const id = req.params.id; 
  
  const event = await CourseServices.updateCourse(id, req.body);
  
  sendResponse(res, {
      success: true,  
      statusCode: httpStatus.OK,
      message: "Event updated successfully",      
      data: event,
  })
  });   
  
  const deleteCourse = catchAsync(async (req ,res) => {
  const id = req.params.id; 
  const event = await CourseServices.deleteCourse(id); 
  sendResponse(res, {
  success: true,
  statusCode: httpStatus.OK,
  message: "Event deleted successfully",
  data: event,
  
  });
  
  
  });

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getACourse,updateCourse,deleteCourse , 
  getACourseByID
};
